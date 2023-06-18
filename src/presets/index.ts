import buttonPreset from "./button";
import { Theme } from "@unocss/preset-uno";
import defu from "defu";
import type { Preset } from "unocss";
import presetTheme from "unocss-preset-theme";

export type Options = {
    theme?: Record<string, Theme>;
    primary?: string;
};

export default function presetBlechUi(options?: Options): Preset {
    const theme = defu(options?.theme ?? {}, {
        dark: {
            colors: {
                "base-0": "#18181b",
                "base-1": "#27272a",
                "base-2": "#3f3f46",
                "base-content": "#FFFFFF",

                red: "#f87171",
                orange: "#fb923c",
                amber: "#fbbf24",
                yellow: "#facc15",
                lime: "#a3e635",
                green: "#4ade80",
                emerald: "#34d399",
                teal: "#2dd4bf",
                cyan: "#22d3ee",
                sky: "#38bdf8",
                blue: "#60a5fa",
                indigo: "#818cf8",
                violet: "#a78bfa",
                purple: "#c084fc",
                fuchsia: "#e879f9",
                pink: "#f472b6",
                rose: "#fb7185",

                "red-content": "#18181b",
                "orange-content": "#18181b",
                "amber-content": "#18181b",
                "yellow-content": "#18181b",
                "lime-content": "#18181b",
                "green-content": "#18181b",
                "emerald-content": "#18181b",
                "teal-content": "#18181b",
                "cyan-content": "#18181b",
                "sky-content": "#18181b",
                "blue-content": "#18181b",
                "indigo-content": "#18181b",
                "violet-content": "#18181b",
                "purple-content": "#18181b",
                "fuchsia-content": "#18181b",
                "pink-content": "#18181b",
                "rose-content": "#18181b",
            },
        },
        light: {
            colors: {
                "base-0": "#FFFFFF",
                "base-1": "#fafafa",
                "base-2": "#e4e4e7",
                "base-content": "#18181b",

                red: "#ef4444",
                orange: "#f97316",
                amber: "#f59e0b",
                yellow: "#eab308",
                lime: "#84cc16",
                green: "#22c55e",
                emerald: "#10b981",
                teal: "#14b8a6",
                cyan: "#06b6d4",
                sky: "#0ea5e9",
                blue: "#3b82f6",
                indigo: "#6366f1",
                violet: "#8b5cf6",
                purple: "#a855f7",
                fuchsia: "#d946ef",
                pink: "#ec4899",
                rose: "#f43f5e",

                "red-content": "#FFFFFF",
                "orange-content": "#FFFFFF",
                "amber-content": "#FFFFFF",
                "yellow-content": "#FFFFFF",
                "lime-content": "#FFFFFF",
                "green-content": "#FFFFFF",
                "emerald-content": "#FFFFFF",
                "teal-content": "#FFFFFF",
                "cyan-content": "#FFFFFF",
                "sky-content": "#FFFFFF",
                "blue-content": "#FFFFFF",
                "indigo-content": "#FFFFFF",
                "violet-content": "#FFFFFF",
                "purple-content": "#FFFFFF",
                "fuchsia-content": "#FFFFFF",
                "pink-content": "#FFFFFF",
                "rose-content": "#FFFFFF",
            },
        },
    });

    return {
        name: "blech-ui",
        theme: {
            colors: {
                primary: `rgb(var(--un-preset-theme-colors-${options?.primary ?? "green"}))`,
                "primary-content": `rgb(var(--un-preset-theme-colors-${
                    options?.primary ?? "green"
                }-content))`,
            },
        },
        shortcuts: {
            ...buttonPreset(options).shortcuts,
        },
        safelist: Object.keys(theme),
        presets: [
            presetTheme<Theme>({
                theme,
                selectors: Object.fromEntries(Object.keys(theme).map((key) => [key, `.${key}`])),
            }),
        ],
    };
}

export type PresetPart = Omit<Preset, "name">;
