import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config({ path: '.env.local' });
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini safely and lazily to avoid startup crashes if key is omitted
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "") {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// API endpoint to analyze diagnostics scores
app.post('/api/analyze-diagnostics', async (req, res) => {
  try {
    const { scores, activeDiaryEntries } = req.body;

    if (!scores) {
       res.status(400).json({ error: 'Scores are required for diagnostics analysis.' });
       return;
    }

    const { professional, collaboration, pedagogical, reflection } = scores;

    const summaryPrompt = `
      Você é um Coach Pedagógico sênior (andragogo especialista em excelência docente).
      Analise as seguintes pontuações de autoavaliação (escala 0.0 a 5.0) do professor e seus relatos:

      1. Desenvolvimento Pessoal e Profissional (Excelência Profissional): ${professional} / 5.0
      2. Trabalho com a Equipa Pedagógica (Colaboração): ${collaboration} / 5.0
      3. Prática Pedagógica (Ação Direta): ${pedagogical} / 5.0
      4. Reflexão Crítica (Foco Prioritário): ${reflection} / 5.0

      Registos reflexivos recentes fornecidos pelo professor:
      ${JSON.stringify(activeDiaryEntries || [])}

      Escreva um parecer pedagógico profissional em formato JSON com os seguintes campos exatos em português e sem marcação adicional (retorne apenas o JSON bruto):
      - "conclusao": Uma análise profunda dos pontos fortes consolidados e equilibrios vistos nas pontuações, em um tom formal, inspirador e andragógico de alto nível (máximo de 3 parágrafos).
      - "areaCritica": Identificação da área prioritária com menor pontuação ou que requer maior intervenção e por quê.
      - "proximoPasso": Recomendação prática, curta e memorável para o próximo passo no progresso do formador.
      - "planoSugerido": Uma lista de 3 metas SMART recomendadas para os próximos meses para melhorar a menor pontuação.
    `;

    const ai = getGeminiClient();

    if (ai) {
      try {
        const response = await ai.models.generateContent({
          model: 'gemini-3.5-flash',
          contents: summaryPrompt,
          config: {
            responseMimeType: 'application/json',
          }
        });

        const text = response.text;
        if (text) {
          const result = JSON.parse(text);
          res.json({ source: 'gemini-ai', ...result });
          return;
        }
      } catch (err) {
        console.error('Gemini API call failed, falling back to rule-based engine:', err);
      }
    }

    // High quality offline fallback system in case Gemini API is not configured or fails
    const lowestValue = Math.min(professional, collaboration, pedagogical, reflection);
    let areaCritica = "Reflexão Crítica";
    let proximoPasso = "Iniciar o hábito de manter um diário de bordo digital focado em incidentes críticos.";
    let planoSugerido = [
      "Produzir 1 registo reflexivo sistemático por mês detalhando avanços e pontos de fricção.",
      "Integrar sessões de auto-análise de vídeo ou mentoria com um colega experiente para feedback mútuo.",
      "Criar uma base de conhecimento privada catalogando boas práticas andragógicas consolidadas."
    ];

    if (lowestValue === professional) {
      areaCritica = "Desenvolvimento Pessoal e Profissional";
      proximoPasso = "Agendar 2 horas semanais protegidas para atualizar de forma ativa competências técnicas de docência e tendências de IA.";
      planoSugerido = [
        "Completar 1 micro-formação andragógica focada em metodologias ativas digitais nos próximos 60 dias.",
        "Aderir a um webinar ou conferência sobre facilitação híbrida e inovação em sala de aula.",
        "Atualizar 2 planos de aula antigos adicionando 1 nova ferramenta interativa de ensino de adultos."
      ];
    } else if (lowestValue === collaboration) {
      areaCritica = "Trabalho com a Equipa Pedagógica";
      proximoPasso = "Promover um encontro informal de partilha de recursos com pares e convidar um colega para assistir a uma sessão.";
      planoSugerido = [
        "Criar 1 repositório partilhado de dinamizações ativas para a equipa pedagógica em 30 dias.",
        "Realizar 1 sessão de co-planeamento multidisciplinar com um formador de outra área de especialidade.",
        "Registar feedbacks conjuntos pós-módulos comuns com as coordenações operacionais por escrito."
      ];
    } else if (lowestValue === pedagogical) {
      areaCritica = "Prática Pedagógica (Ação Direta)";
      proximoPasso = "Substituir pelo menos 20% das apresentações expositivas tradicionais por dinâmicas práticas ou de roleplaying.";
      planoSugerido = [
        "Reformular o plano de formação atual para incluir 2 metodologias de sala de aula invertida.",
        "Desenhar ferramentas e roteiros diferenciados para apoiar ritmos cognitivos desiguais em turmas grandes.",
        "Implementar 1 rota de feedback formador-formando instantâneo com Mentimeter no fecho de cada módulo."
      ];
    }

    // General overall conclusion based on averages
    const average = parseFloat(((professional + collaboration + pedagogical + reflection) / 4).toFixed(1));
    let conclusao = "";
    if (average >= 4.0) {
      conclusao = "A análise revela uma base profissional de altíssimo nível, demonstrando uma forte consolidação de práticas assertivas e maduras. A sua dedicação ao trabalho com a equipa pedagógica e à clareza metodológica projeta-o como um polo de excelência, servindo de inspiração andragógica para os seus pares. O equilíbrio técnico e interpessoal garante robustez aos seus formandos.";
    } else if (average >= 3.5) {
      conclusao = "O diagnóstico aponta para um perfil profissional equilibrado e seguro, com desempenho sólido situado consistentemente acima do limiar intermédio de 3.5. Existe clara lucidez pedagógica e uma excelente margem para expandir o potencial metodológico. Ao refinar pontos específicos de coordenação ou reflexão, atingirá em breve a maturidade de excelência.";
    } else {
      conclusao = "A autoavaliação revela que, embora haja boa vontade e competência técnica inicial, existem pontos cruciais que beneficiarão fortemente de maior sistematização e apoio. Estabelecer processos estruturados de planeamento conjunto e regularidade de diários reflexivos ajudará a solidificar consideravelmente a autoconfiança de facilitação diária.";
    }

    res.json({
      source: 'offline_expert_engine',
      conclusao,
      areaCritica,
      proximoPasso,
      planoSugerido
    });

  } catch (error: any) {
    console.error('Error processing diagnostics analysis:', error);
    res.status(500).json({ error: 'Erro interno ao realizar a síntese pedagógica.' });
  }
});

async function startServer() {
  // Use Vite middleware in development mode
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve build directory in production mode
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[O Formador Reflexivo] Full-stack server running on port ${PORT}`);
  });
}

startServer();
