# O Formador Reflexivo

Aplicação React + Vite com servidor Express para apoiar diagnóstico pedagógico, registo reflexivo, metas SMART e síntese assistida por IA.

## Como correr localmente

**Pré-requisito:** Node.js instalado.

1. Instalar dependências:
   `npm install`

   Este comando descarrega as bibliotecas necessárias para a aplicação funcionar.

2. Configurar a chave Gemini:
   criar um ficheiro `.env.local` com base em `.env.example` e preencher `GEMINI_API_KEY`.

   Sem esta chave, a aplicação continua a funcionar com o motor local de regras.

3. Iniciar a aplicação:
   `npm run dev`

   Este comando arranca o servidor Express com o Vite em modo de desenvolvimento.

4. Abrir no navegador:
   `http://localhost:3000`

## Comandos úteis

- `npm run lint`: valida o TypeScript sem gerar ficheiros.
- `npm run build`: cria a versão de produção.
- `npm run clean`: remove ficheiros gerados em `dist`.
