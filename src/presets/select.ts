import type { Options } from ".";
import type { Preset } from "unocss";

function selectPreset(options?: Options): Preset {
    return {
        name: "blech-ui/select",
        shortcuts: {
            select: "flex flex-row items-center px-3 py-1 rounded border-0.5 border-solid border-base-2 text-base-content bg-base-0 hover:bg-base-0-highlight",
            "select-ghost": "select border-transparent bg-transparent",
            "select-neutral": "select bg-base-1 hover:bg-base-1-highlight",
            "select-primary": "select bg-primary text-primary-content hover:bg-primary-highlight",
        },
    };
}

export default selectPreset;
