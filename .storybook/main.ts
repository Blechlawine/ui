import type { StorybookConfig } from "@storybook/vue3-vite";
import path from "node:path";
import UnoCSS from "unocss/vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/vue3-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    viteFinal(config) {
        return mergeConfig(config, {
            plugins: [UnoCSS()],
            resolve: {
                alias: {
                    "~components": path.join(__dirname, "../src/components"),
                    "~presets": path.join(__dirname, "../src/presets"),
                },
            },
        });
    },
};
export default config;
