import presetUno from "@unocss/preset-uno";
import { defineConfig } from "unocss";
import presetBlechUi from "~presets";

export default defineConfig({
    presets: [presetUno(), presetBlechUi()],
});
