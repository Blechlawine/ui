import buttonPreset from "./button";
import selectPreset from "./select";
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
                "base-0-highlight": "#27272a",
                "base-1": "#27272a",
                "base-1-highlight": "#3f3f46",
                "base-2": "#3f3f46",
                "base-2-highlight": "#4b4b5e",
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

                "red-highlight": "#ef4444",
                "orange-highlight": "#f97316",
                "amber-highlight": "#f59e0b",
                "yellow-highlight": "#eab308",
                "lime-highlight": "#84cc16",
                "green-highlight": "#22c55e",
                "emerald-highlight": "#10b981",
                "teal-highlight": "#14b8a6",
                "cyan-highlight": "#06b6d4",
                "sky-highlight": "#0ea5e9",
                "blue-highlight": "#3b82f6",
                "indigo-highlight": "#6366f1",
                "violet-highlight": "#8b5cf6",
                "purple-highlight": "#a855f7",
                "fuchsia-highlight": "#d946ef",
                "pink-highlight": "#ec4899",
                "rose-highlight": "#f43f5e",

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
                "base-0-highlight": "#fafafa",
                "base-1": "#fafafa",
                "base-1-highlight": "#e4e4e7",
                "base-2": "#e4e4e7",
                "base-2-highlight": "#d4d4d8",
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

                "red-highlight": "#dc2626",
                "orange-highlight": "#ea580c",
                "amber-highlight": "#d97706",
                "yellow-highlight": "#ca8a04",
                "lime-highlight": "#65a30d",
                "green-highlight": "#16a34a",
                "emerald-highlight": "#059669",
                "teal-highlight": "#0d9488",
                "cyan-highlight": "#0891b2",
                "sky-highlight": "#0284c7",
                "blue-highlight": "#2563eb",
                "indigo-highlight": "#4f46e5",
                "violet-highlight": "#7c3aed",
                "purple-highlight": "#9333ea",
                "fuchsia-highlight": "#c026d3",
                "pink-highlight": "#db2777",
                "rose-highlight": "#e11d48",

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
                "primary-highlight": `rgb(var(--un-preset-theme-colors-${
                    options?.primary ?? "green"
                }-highlight))`,
            },
        },
        shortcuts: {
            ...buttonPreset(options).shortcuts,
            ...selectPreset(options).shortcuts,
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
