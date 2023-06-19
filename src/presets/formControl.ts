import { Options } from ".";
import { Preset } from "unocss";

function formControlPreset(options?: Options): Preset {
    return {
        name: "blech-ui/form-control",
        shortcuts: {
            "form-control": "flex flex-col max-w-72",
            label: "flex flex-row text-sm p-1",
            hint: "flex flex-row text-xs p-1",
        },
    };
}

export default formControlPreset;
