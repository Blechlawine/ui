import buttonPreset from "./button";
import type { Preset } from "unocss";

export default function presetBlechUi(options?: {}): Preset {
    return {
        name: "blech-ui",
        rules: [...(buttonPreset.rules ?? [])],
        variants: [...(buttonPreset.variants ?? [])],
        shortcuts: {
            ...buttonPreset.shortcuts,
        },
    };
}

export type PresetPart = Omit<Preset, "name">;
