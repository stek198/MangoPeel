import { SessionParamGroup, SessionParamName } from "./enum";
import { ParamPatchType} from "../../util";

export interface SessionParamData {
    name: SessionParamName;
    group:SessionParamGroup;
    toggle: SessionParamToggle;
    patchs: SessionParamPatch[];
}

export interface SessionParamToggle {
    label?: string;
    description?: string;
    isShowPatchWhenEnable?: boolean;
    defaultEnable: boolean;
}

export interface SessionParamPatch {
    label?: string;
    description?: string;
    type: ParamPatchType;
    args: any[];
    defaultValue: any[];
}
