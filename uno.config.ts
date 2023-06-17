import presetBlechUi from "./src/presets/index";
import presetUno from "@unocss/preset-uno";
import { defineConfig } from "unocss";

// TODO: rebalance colors
export default defineConfig({
    presets: [presetUno(), presetBlechUi()],
});
