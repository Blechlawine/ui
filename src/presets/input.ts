import { Options } from ".";
import { Preset } from "unocss";

function inputPreset(options?: Options): Preset {
    return {
        name: "blech-ui/input",
        shortcuts: {
            input: "bg-base-0 border-solid border-base-2 border-0.5 outline-none rounded px-2 py-1",
        },
    };
}

export default inputPreset;
