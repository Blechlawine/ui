import vue from "@vitejs/plugin-vue";
import path from "node:path";
import UnoCSS from "unocss/vite";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        UnoCSS(),
        Components({
            dirs: [path.resolve(__dirname, "src/components")],
            dts: path.resolve(__dirname, "src/generated/components.d.ts"),
        }),
    ],
    resolve: {
        alias: {
            "~components": path.join(__dirname, "src/components"),
            "~library": path.join(__dirname, "src/components/library"),
            "~presets": path.join(__dirname, "src/presets"),
        },
    },
});
