import type { Options } from ".";
import type { Preset } from "unocss";

function buttonPreset(options?: Options): Preset {
    return {
        name: "blech-ui/button",
        shortcuts: {
            btn: "flex flex-row items-center px-3 py-1 rounded border-0.5 border-solid border-base-2 text-base-content bg-base-0 hover:bg-base-0-highlight",
            "btn-neutral": "btn bg-base-1 hover:bg-base-1-highlight",
            "btn-primary":
                "btn bg-primary text-primary-content hover:bg-primary-highlight border-transparent",
            "btn-ghost":
                "btn border-transparent bg-transparent text-base-content hover:bg-base-0-highlight",
            "btn-link": "btn bg-transparent text-base-content",
        },
    };
}

export default buttonPreset;
