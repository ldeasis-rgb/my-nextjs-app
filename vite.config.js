import { fileURLToPath, URL } from "node:url"
import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: {
      "import.meta.env.NEXT_PUBLIC_API_BASE_URL": JSON.stringify(
        env.NEXT_PUBLIC_API_BASE_URL ?? env["NEXT PUBLIC API_BASE_URL"] ?? ""
      ),
    },
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
})