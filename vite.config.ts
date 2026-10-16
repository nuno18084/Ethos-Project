import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function portugueseShareIndex(): Plugin {
  return {
    name: "portuguese-share-index",
    apply: "build",
    async closeBundle() {
      const distDir = path.resolve(process.cwd(), "dist");
      const html = await readFile(path.join(distDir, "index.html"), "utf8");
      const ptHtml = html
        .replaceAll('<html lang="en">', '<html lang="pt">')
        .replaceAll(
          "<title>ETHOS — Applied Philosophy for Organizations</title>",
          "<title>ETHOS — Filosofia Aplicada às Organizações</title>",
        )
        .replaceAll(
          'content="ETHOS — Applied Philosophy for Organizations"',
          'content="ETHOS — Filosofia Aplicada às Organizações"',
        )
        .replaceAll(
          "Applied philosophy for organizations. ETHOS elevates ethical capital through classical philosophy — better decisions, better execution, better organizations.",
          "Filosofia aplicada às organizações. O ETHOS eleva o capital ético através da Filosofia Clássica — melhores decisões, melhor execução, melhores organizações.",
        )
        .replaceAll(
          'rel="canonical" href="https://www.ethosprogram.com/"',
          'rel="canonical" href="https://www.ethosprogram.com/pt"',
        )
        .replaceAll(
          'property="og:url" content="https://www.ethosprogram.com/"',
          'property="og:url" content="https://www.ethosprogram.com/pt"',
        )
        .replaceAll(
          'property="og:locale" content="en_US"',
          'property="og:locale" content="pt_PT"',
        )
        .replaceAll(
          'property="og:locale:alternate" content="pt_PT"',
          'property="og:locale:alternate" content="en_US"',
        )
        .replaceAll(
          '"url": "https://www.ethosprogram.com/"',
          '"url": "https://www.ethosprogram.com/pt"',
        );

      await mkdir(path.join(distDir, "pt"), { recursive: true });
      await writeFile(path.join(distDir, "pt", "index.html"), ptHtml);
    },
  };
}

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tailwindcss(),
    portugueseShareIndex(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (id.includes("motion")) return "motion";
          if (id.includes("@emailjs")) return "emailjs";
          if (id.includes("react-burger-menu")) return "burger-menu";
          if (
            id.includes("react-router") ||
            id.includes("react-dom") ||
            id.includes("/react/")
          ) {
            return "react-vendor";
          }
        },
      },
    },
  },
});
