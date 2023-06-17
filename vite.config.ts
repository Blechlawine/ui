import vue from "@vitejs/plugin-vue";
import path from "node:path";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), UnoCSS()],
    resolve: {
        alias: {
            "~components": path.join(__dirname, "src/components"),
            "~presets": path.join(__dirname, "src/presets"),
        },
    },
});
