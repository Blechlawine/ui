import presetBlechUi from "./src/presets/index";
import presetUno from "@unocss/preset-uno";
import { defineConfig } from "unocss";

export default defineConfig({
    presets: [presetUno(), presetBlechUi()],
});
