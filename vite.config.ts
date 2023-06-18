import Vue from "@vitejs/plugin-vue";
import path from "node:path";
import UnoCSS from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { VueRouterAutoImports } from "unplugin-vue-router";
import VueRouter from "unplugin-vue-router/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        VueRouter({
            dts: path.resolve(__dirname, "src/generated/router.d.ts"),
            extensions: [".vue", ".page.vue"],
        }),
        Vue(),
        AutoImport({
            imports: ["vue", "@vueuse/core", VueRouterAutoImports],
            dts: path.resolve(__dirname, "src/generated/auto-imports.d.ts"),
        }),
        Components({
            dirs: [path.resolve(__dirname, "src/components")],
            dts: path.resolve(__dirname, "src/generated/components.d.ts"),
        }),
        UnoCSS({
            configDeps: ["presets/*.ts"],
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
