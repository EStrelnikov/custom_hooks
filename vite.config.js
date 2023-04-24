import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      //   // Use React plugin in all *.jsx and *.tsx files
      //   include: "**/*.{jsx,tsx}",
    }),
  ],
  build: {
    // Relative to the root
    outDir: "../dist",
  },
});
