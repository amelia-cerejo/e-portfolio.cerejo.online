import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";

const root = resolve(process.cwd());
const port = Number(process.env.PORT || 3000);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf",
  ".zip": "application/zip",
};

function resolveRequestPath(url) {
  const cleanUrl = new URL(url, `http://localhost:${port}`);
  const decodedPath = decodeURIComponent(cleanUrl.pathname);
  const target = normalize(resolve(root, `.${decodedPath}`));

  if (target !== root && !target.startsWith(root + sep)) {
    return null;
  }

  if (existsSync(target) && statSync(target).isDirectory()) {
    return join(target, "index.html");
  }

  return target;
}

const server = createServer((request, response) => {
  const target = resolveRequestPath(request.url || "/");

  if (!target || !existsSync(target) || statSync(target).isDirectory()) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Ficheiro não encontrado.");
    return;
  }

  response.writeHead(200, {
    "Content-Type": types[extname(target).toLowerCase()] || "application/octet-stream",
  });
  createReadStream(target).pipe(response);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Servidor local ativo em http://localhost:${port}/`);
});
