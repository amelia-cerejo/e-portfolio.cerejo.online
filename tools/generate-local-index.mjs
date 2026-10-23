import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync("src/data.ts", "utf8");
const executable = source
  .replace(/import\s+\{[^}]+\}\s+from\s+"\.\/types";\s*/u, "")
  .replace(
    /export\s+const\s+INITIAL_PORTFOLIO_DATA\s*:\s*PortfolioData\s*=/u,
    "const INITIAL_PORTFOLIO_DATA ="
  )
  + "\nglobalThis.__PORTFOLIO_DATA__ = INITIAL_PORTFOLIO_DATA;";

const context = {};
vm.createContext(context);
vm.runInContext(executable, context);

const dataJson = JSON.stringify(context.__PORTFOLIO_DATA__).replace(/</g, "\\u003c");

function cleanReadingChrome(input) {
  return input
    .replace(/\n\s*\.actions\s*\{[\s\S]*?\n\s*\}\n\s*\n\s*button,\s*select,\s*\.button-link\s*\{/u, "\n\n      button, .button-link {")
    .replace(/\n\s*button,\s*select,\s*\.button-link\s*\{/u, "\n      button, .button-link {")
    .replace(/\n\s*button,\s*\.button-link\s*\{\s*\n\s*cursor:\s*pointer;/u, "\n        cursor: pointer;")
    .replace(/\n\s*\.actions\s*\{\s*\n\s*width:\s*100%;\s*\n\s*\}\s*\n\s*select\s*\{\s*\n\s*flex:\s*1;\s*\n\s*min-width:\s*0;\s*\n\s*\}\n/u, "\n")
    .replace(/header,\s*nav,\s*\.actions,\s*\.floating-nav/u, "header, nav, .floating-nav")
    .replace(/\n\s*<div class="actions">[\s\S]*?<\/div>\s*(?=\n\s*<\/div>\n\s*<\/header>)/u, "")
    .replace(/\n\s*const jump = document\.getElementById\("jump"\);/u, "")
    .replace(/\n\s*jump\.innerHTML = sections\.map[\s\S]*?jump\.addEventListener\("change", \(\) => showSection\(jump\.value, true\)\);/u, "")
    .replace(/\n\s*document\.getElementById\("jump"\)\.value = selectedId;/u, "")
    .replace(
      /<a class="float-button" href="imprimir-completo\.html" title="Ver vers[\s\S]*?<\/a>/u,
      `<a class="float-button action-complete" href="imprimir-completo.html" title="Ver completo" aria-label="Ver completo">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 7h10v13H8z"/><path d="M6 17H5a2 2 0 0 1-2-2V4h10a2 2 0 0 1 2 2v1"/><path d="M11 11h4"/><path d="M11 15h4"/></svg>
          <span class="sr-only">Ver completo</span>
        </a>`
    )
    .replace(
      /<a class="float-button" href="imprimir-completo\.html" title="Ver completo" aria-label="Ver completo">/u,
      `<a class="float-button action-complete" href="imprimir-completo.html" title="Ver completo" aria-label="Ver completo">`
    )
    .replace(
      /<button class="float-button" type="button" onclick="preparePrint\(\)"/gu,
      `<button class="float-button action-print" type="button" onclick="preparePrint()"`
    )
    .replace(
      /<button class="float-button" type="button" onclick="window\.scrollTo\(\{ top: 0, behavior: 'smooth' \}\)" title="Topo" aria-label="Topo">/u,
      `<button class="float-button is-hidden" type="button" id="float-top" onclick="scrollToTop()" title="Topo" aria-label="Topo">`
    )
    .replace(
      /<a class="float-button" href="imprimir-completo\.html" title="Imprimir completo" aria-label="Imprimir completo">[\s\S]*?<\/a>/u,
      `<button class="float-button" type="button" onclick="preparePrint()" title="Imprimir esta secÃ§Ã£o" aria-label="Imprimir esta secÃ§Ã£o">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 8V4h10v4"/><path d="M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><path d="M7 14h10v6H7z"/><path d="M17 12h.01"/></svg>
          <span class="sr-only">Imprimir esta secÃ§Ã£o</span>
        </button>
        <a class="float-button" href="imprimir-completo.html" title="Ver versÃ£o completa" aria-label="Ver versÃ£o completa">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h8"/><path d="M8 9h2"/></svg>
          <span class="sr-only">Ver versÃ£o completa</span>
        </a>`
    )
    .replace(
      /@media print \{\s*header, nav, \.floating-nav \{ display: none; \}\s*body \{ background: white; \}\s*\.layout \{ display: block; max-width: none; padding: 0; \}\s*section \{ display: block !important; min-height: auto; break-inside: avoid; border: 0; border-bottom: 1px solid #ddd; border-radius: 0; \}\s*\.module \{ display: block !important; \}\s*\}/u,
      `@media print {
        header, nav, .floating-nav { display: none; }
        body { background: white; }
        .layout { display: block; max-width: none; padding: 0; }
        section {
          display: none !important;
          min-height: auto;
          break-inside: avoid;
          border: 0;
          border-bottom: 1px solid #ddd;
          border-radius: 0;
        }
        section.active-section,
        body.print-complete-page section {
          display: block !important;
        }
        .module { display: none !important; }
        .module.active-module,
        body.print-complete-page .module {
          display: block !important;
        }
      }`
    )
    .replace(/\n\s*body\.print-mode section,\s*\n\s*body\.print-mode \.module\s*\{\s*\n\s*display: block !important;\s*\n\s*\}\n/u, "\n")
    .replace(/\n\s*body\.print-complete-page \.floating-nav\s*\{\s*\n\s*display: none;\s*\n\s*\}\n/u, "\n")
    .replace(
      /(\.float-button:hover\s*\{\s*border-color: var\(--gold\);\s*transform: translateY\(-1px\);\s*\})(?!\s*\.float-button\.is-hidden)/u,
      `$1

      .float-button.action-complete {
        background: #fff7e3;
        border-color: #d5a02a;
        color: #7a5200;
      }

      .float-button.action-print {
        background: #eef8f1;
        border-color: #8bbf9a;
        color: #1f6b3b;
      }

      .float-button.is-hidden {
        display: none;
      }`
    )
    .replace(
      /(\s*\.float-button\.is-hidden\s*\{)/u,
      `
      .float-button.action-complete {
        background: #ffe9a8;
        border-color: #c98a00;
        color: #694400;
      }

      .float-button.action-print {
        background: #dff4e6;
        border-color: #4f9a69;
        color: #155c32;
      }

$1`
    )
    .replace(
      /function preparePrint\(\) \{\s*document\.body\.classList\.add\("print-mode"\);\s*window\.scrollTo\(\{ top: 0, behavior: "auto" \}\);\s*setTimeout\(\(\) => window\.print\(\), 50\);\s*\}/u,
      `function preparePrint() {
        window.scrollTo({ top: 0, behavior: "auto" });
        setTimeout(() => window.print(), 50);
      }`
    )
    .replace(
      /function setupFloatingNav\(\) \{[\s\S]*?\n\s*\}\n\s*\n\s*function render\(\) \{/u,
      `function setupFloatingNav() {
        const menuButton = document.getElementById("float-menu");
        if (menuButton) {
          menuButton.addEventListener("click", () => {
            const isCollapsed = document.body.classList.toggle("sidebar-collapsed");
            menuButton.setAttribute("aria-expanded", String(!isCollapsed));
          });
        }

        const topButton = document.getElementById("float-top");
        const updateTopButton = () => {
          if (!topButton) return;
          topButton.classList.toggle("is-hidden", window.scrollY < 180);
        };
        updateTopButton();
        window.addEventListener("scroll", updateTopButton, { passive: true });
      }

      function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      function render() {`
    )
    .replace(/\n\s*document\.body\.classList\.remove\("print-mode"\);/u, "");
}

function tuneMobileMenu(input) {
  return input.replace(
    /(\s*)nav \{\s*\n\s*position: fixed;\s*\n\s*left: 14px;\s*\n\s*right: 86px;\s*\n\s*bottom: 18px;\s*\n\s*top: auto;\s*\n\s*z-index: 39;\s*\n\s*max-height: min\(520px, calc\(100vh - 120px\)\);\s*\n\s*overflow-y: auto;\s*\n\s*box-shadow: 0 18px 45px rgba\(0, 43, 91, 0\.16\);\s*\n\s*\}/u,
    (_match, indent) => `${indent}nav {
${indent}  position: fixed;
${indent}  left: auto;
${indent}  right: 86px;
${indent}  bottom: 18px;
${indent}  top: auto;
${indent}  z-index: 39;
${indent}  width: fit-content;
${indent}  min-width: 260px;
${indent}  max-width: calc(100vw - 110px);
${indent}  max-height: min(520px, calc(100vh - 120px));
${indent}  overflow-y: auto;
${indent}  box-shadow: 0 18px 45px rgba(0, 43, 91, 0.16);
${indent}}`
  );
}

function stripExtraEvidence(input) {
  return input.replace(
    /\$\{\[\s*\.\.\.portfolio\.evidences,\s*\{[\s\S]*?url:\s*"evidencias\/mf5\/grelha-avaliacao-feedback\/"\s*\}\s*\]\s*\.map/u,
    "${portfolio.evidences.map"
  );
}

function refreshData(input) {
  return stripExtraEvidence(input).replace(
    /const portfolio = [\s\S]*?;\n\n\s*const sections =/u,
    `const portfolio = ${dataJson};\n\n      const sections =`
  );
}
function buildPrintPage(input) {
  return input
    .replace("<body>", '<body class="print-mode print-complete-page sidebar-collapsed">')
    .replace(
      "      body.print-complete-page .layout {\n        grid-template-columns: 1fr;\n      }",
      "      body.print-complete-page .layout {\n        grid-template-columns: 1fr;\n      }\n\n      body.print-complete-page:not(.sidebar-collapsed) nav {\n        display: block;\n      }\n\n      body.print-complete-page:not(.sidebar-collapsed) .layout {\n        grid-template-columns: 280px minmax(0, 1fr);\n      }\n\n      body.print-complete-page main section,\n      body.print-complete-page .module {\n        display: block !important;\n        min-height: auto;\n      }"
    )
    .replace(
      /<a class="float-button" href="#capa" title="Inicio" aria-label="Inicio">/u,
      '<a class="float-button" href="index.html" title="Voltar ao e-PortfÃ³lio" aria-label="Voltar ao e-PortfÃ³lio">'
    )
    .replace(
      /<button class="float-button" type="button" onclick="preparePrint\(\)" title="Imprimir esta secÃ§Ã£o" aria-label="Imprimir esta secÃ§Ã£o">[\s\S]*?<\/button>\s*/u,
      `<button class="float-button" type="button" onclick="preparePrint()" title="Imprimir completo" aria-label="Imprimir completo">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 8V4h10v4"/><path d="M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><path d="M7 14h10v6H7z"/><path d="M17 12h.01"/></svg>
          <span class="sr-only">Imprimir completo</span>
        </button>
        `
    )
    .replace(
      /<a class="float-button" href="imprimir-completo\.html" title="Ver versÃ£o completa" aria-label="Ver versÃ£o completa">[\s\S]*?<\/a>\s*/u,
      ""
    )
    .replace(
      /\n\s*<a class="float-button" href="imprimir-completo\.html"[\s\S]*?<\/a>\s*/u,
      "\n"
    )
    .replace(
      /\n\s*<a class="float-button action-complete" href="imprimir-completo\.html"[\s\S]*?<\/a>\s*/u,
      "\n"
    )
    .replace(/title="Imprimir[^"]*" aria-label="Imprimir[^"]*"/u, 'title="Imprimir completo" aria-label="Imprimir completo"')
    .replace(/<span class="sr-only">Imprimir[^<]*<\/span>/u, '<span class="sr-only">Imprimir completo</span>')
    .replace(
      "      function setupFloatingNav() {\n        const menuButton = document.getElementById(\"float-menu\");\n        menuButton.addEventListener(\"click\", () => {\n          const isCollapsed = document.body.classList.toggle(\"sidebar-collapsed\");\n          menuButton.setAttribute(\"aria-expanded\", String(!isCollapsed));\n        });\n      }",
      "      function setupFloatingNav() {\n        const menuButton = document.getElementById(\"float-menu\");\n        if (!menuButton) return;\n        menuButton.addEventListener(\"click\", () => {\n          const isCollapsed = document.body.classList.toggle(\"sidebar-collapsed\");\n          menuButton.setAttribute(\"aria-expanded\", String(!isCollapsed));\n        });\n      }"
    )
    .replace('      render();\n      showSection(location.hash.replace("#", "") || "capa");', '      render();\n      showSection("capa");')
    .replace('window.addEventListener("hashchange", () => showSection(location.hash.replace("#", "") || "capa"));', "");
}

const currentHtml = fs.readFileSync("index.html", "utf8");
const html = tuneMobileMenu(refreshData(cleanReadingChrome(currentHtml)));
const printHtml = buildPrintPage(html);

fs.writeFileSync("index.html", html, "utf8");
fs.writeFileSync("imprimir-completo.html", printHtml, "utf8");
console.log("index.html local gerado com sucesso.");
