import { Options } from ".";
import { Preset } from "unocss";

function buttonPreset(options?: Options): Preset {
    return {
        name: "blech-ui/button",
        shortcuts: {
            btn: "flex flex-row items-center px-3 py-1 rounded border-0.5 border-solid border-base-2 text-base-content bg-base-0",
            "btn-neutral": "btn bg-base-1",
            "btn-primary": "btn bg-primary text-primary-content",
            "btn-ghost": "btn border-none bg-transparent text-base-content",
            "btn-link": "btn bg-transparent text-base-content",
        },
    };
}

export default buttonPreset;
