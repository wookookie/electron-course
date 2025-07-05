import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // electron 빌드 결과와 구분하기 위함
    outDir: "dist-react",
  },
});
