import presetBlechUi from "./src/presets/index";
import { defineConfig, presetIcons, presetUno } from "unocss";

export default defineConfig({
    presets: [presetUno(), presetBlechUi(), presetIcons()],
});
