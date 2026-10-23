# Projeto `formador_formadores`

Este projeto contém uma página HTML interativa e visual sobre a profissão de bombeiro, em modo galeria de apresentação.

A versão atual reaproveita texto, imagens e estilo visual do PowerPoint `Bombeiro Profissao Risco.pptx`.

## Como abrir

1. Abre a pasta `formador_formadores`.
2. Faz duplo clique no ficheiro `index.html`.
3. O navegador abre a apresentação em formato de slides.

## Estrutura do projeto

- `index.html` - página principal do projeto, com navegação por slides.
- `assets/` - pasta onde ficam as imagens usadas pela página.
- `assets/bombeiro-hero.png` - imagem principal do topo da página.
- `assets/pptx/` - imagens e resumo extraídos do PowerPoint original.
- `Bombeiro Profissao Risco.pptx` - cópia local da apresentação usada como referência.

## Como editar

1. Para alterar textos, abre `index.html` num editor de código.
2. Para trocar a imagem principal, substitui `assets/bombeiro-hero.png` por outra imagem com o mesmo nome.
3. Para alterar cores, procura a zona `:root` no início do CSS dentro do `index.html`.

## Como navegar

- Usa os botões `Anterior` e `Próximo`.
- Também podes usar as setas do teclado.
- Os pontos no fundo permitem saltar diretamente para um slide.
- No slide de índice, usa o menu para ir diretamente para os temas principais.

## Nota

O projeto foi feito para funcionar diretamente no navegador, sem instalação de programas adicionais.

## Publicação

Site Netlify:

https://formador-formadores-bombeiro.netlify.app

Código para incorporar no Moodle:

```html
<iframe
  src="https://formador-formadores-bombeiro.netlify.app"
  width="100%"
  height="720"
  style="border:0; width:100%; min-height:720px;"
  allowfullscreen>
</iframe>
```
