import { localizeStrEnum } from "../../i18n";
import { SessionParamGroup, SessionParamName } from "./enum";
import { SessionParamData } from "./interface";

export const paramList:{ [paramName: string]: SessionParamData }={
    [SessionParamName.cpu_color]:{
      name:SessionParamName.cpu_color,
      group:SessionParamGroup.color,
      toggle:{
          label:localizeStrEnum.LEGACY_LAYOUT_LABEL,
          description:localizeStrEnum.LEGACY_LAYOUT_DESCRIPTION,
          defaultEnable:false,
          isShowPatchWhenEnable:false,
      },
      patchs:[]
    }
}