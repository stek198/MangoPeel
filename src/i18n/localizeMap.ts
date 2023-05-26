import * as schinese from "./schinese.json";
import * as tchinese from "./tchinese.json";
import * as english from "./english.json";
export const localizeMap = {
    schinese: {
      label: '简体中文',
      strings: schinese,
      credit: [],
    },
    tchinese: {
        label: '繁體中文',
        strings: tchinese,
        credit: [],
      },
    english: {
      label: 'English',
      strings: english,
      credit: [],
    },  
};
export enum localizeStrEnum {
  MANGOINDEX_LABEL = "MANGOINDEX_LABEL",
  MANGOINDEX_LABEL_CLOSE = "MANGOINDEX_LABEL_CLOSE",
  RESET_PARAM_DEFAULT = "RESET_PARAM_DEFAULT",
  PARAM_MANUALLY_SORT_TITLE = "PARAM_MANUALLY_SORT_TITLE",
  LEGACY_LAYOUT_LABEL = "LEGACY_LAYOUT_LABEL",
  LEGACY_LAYOUT_DESCRIPTION = "LEGACY_LAYOUT_DESCRIPTION",
  HORIZONTAL_LABEL = "HORIZONTAL_LABEL",
  HORIZONTAL_DESCRIPTION = "HORIZONTAL_DESCRIPTION",
  TABLE_COLUMNS_LABEL = "TABLE_COLUMNS_LABEL",
  TABLE_COLUMNS_DESCRIPTION = "TABLE_COLUMNS_DESCRIPTION",
  WIDTH_LABLE = "WIDTH_LABLE",
  WIDTH_DESCRIPTION = "WIDTH_DESCRIPTION",
  POSITION_LABEL = "POSITION_LABEL",
  POSITION_DESCRIPTION = "POSITION_DESCRIPTION",
  HUD_NO_MARGIN_LABEL = "HUD_NO_MARGIN_LABEL",
  HUD_NO_MARGIN_DESCRIPTION = "HUD_NO_MARGIN_DESCRIPTION",
  OFFSET_X_LABEL = "OFFSET_X_LABEL",
  OFFSET_Y_LABEL = "OFFSET_Y_LABEL",
  FPS_ONLY_LABEL = "FPS_ONLY_LABEL",
  NO_DISPLAY_LABEL = "NO_DISPLAY_LABEL",
  ALPHA_LABEL = "ALPHA_LABEL",
  ALPHA_DESCRIPTION = "ALPHA_DESCRIPTION",
  BACKGROUND_ALPHA_LABEL = "BACKGROUND_ALPHA_LABEL",
  BACKGROUND_ALPHA_DESCRIPTION = "BACKGROUND_ALPHA_DESCRIPTION",
  FONT_SCALE_LABEL = "FONT_SCALE_LABEL",
  FULL_LABEL = "FULL_LABEL",
  FULL_DESCRIPTION = "FULL_DESCRIPTION",
  CUSTOM_TEXT_CENTER_LABEL = "CUSTOM_TEXT_CENTER_LABEL",
  CUSTOM_TEXT_CENTER_DESCRIPTION = "CUSTOM_TEXT_CENTER_DESCRIPTION",
  CUSTOM_TEXT_LABEL = "CUSTOM_TEXT_LABEL",
  CUSTOM_TEXT_DESCRIPTION = "CUSTOM_TEXT_DESCRIPTION",
  TIME_LABEL = "TIME_LABEL",
  TIME_DESCRIPTION = "TIME_DESCRIPTION",
  VERSION_LABEL = "VERSION_LABEL",
  VERSION_DESCRIPTION = "VERSION_DESCRIPTION",
  CPU_STATS_LABEL = "CPU_STATS_LABEL",
  CPU_TEXT_LABEL = "CPU_TEXT_LABEL",
  CPU_TEXT_DESCRIPTION = "CPU_TEXT_DESCRIPTION",
  CPU_LOAD_CHANGE_LABEL = "CPU_LOAD_CHANGE_LABEL",
  CPU_LOAD_CHANGE_DESCRIPTION = "CPU_LOAD_CHANGE_DESCRIPTION",
  CORE_LOAD_LABEL = "CORE_LOAD_LABEL",
  CORE_LOAD_DESCRIPTION = "CORE_LOAD_DESCRIPTION",
  CORE_LOAD_CHANGE_LABEL = "CORE_LOAD_CHANGE_LABEL",
  CORE_LOAD_CHANGE_DESCRIPTION = "CORE_LOAD_CHANGE_DESCRIPTION",
  CPU_MHZ_LABEL = "CPU_MHZ_LABEL",
  CPU_MHZ_DESCRIPTION = "CPU_MHZ_DESCRIPTION",
  CPU_POWER_LABEL = "CPU_POWER_LABEL",
  CPU_POWER_DESCRIPTION = "CPU_POWER_DESCRIPTION",
  CPU_TEMP_LABEL = "CPU_TEMP_LABEL",
  CPU_TEMP_DESCRIPTION = "CPU_TEMP_DESCRIPTION",
  GPU_STATS_LABEL = "GPU_STATS_LABEL",
  GPU_TEXT_LABEL = "GPU_TEXT_LABEL",
  GPU_TEXT_DESCRIPTION = "GPU_TEXT_DESCRIPTION",
  GPU_LOAD_CHANGE_LABEL = "GPU_LOAD_CHANGE_LABEL",
  GPU_LOAD_CHANGE_DESCRIPTION = "GPU_LOAD_CHANGE_DESCRIPTION",
  GPU_CORE_CLOCK_LABEL = "GPU_CORE_CLOCK_LABEL",
  GPU_CORE_CLOCK_DESCRIPTION = "GPU_CORE_CLOCK_DESCRIPTION",
  GPU_POWER_LABEL = "GPU_POWER_LABEL",
  GPU_POWER_DESCRIPTION = "GPU_POWER_DESCRIPTION",
  GPU_TEMP_LABEL = "GPU_TEMP_LABEL",
  GPU_TEMP_DESCRIPTION = "GPU_TEMP_DESCRIPTION",
  VRAM_LABEL = "VRAM_LABEL",
  VRAM_DESCRIPTION = "VRAM_DESCRIPTION",
  RAM_LABEL = "RAM_LABEL",
  RAM_DESCRIPTION = "RAM_DESCRIPTION",
  SWAP_LABEL = "SWAP_LABEL",
  SWAP_DESCRIPTION = "SWAP_DESCRIPTION",
  BATTERY_LABEL = "BATTERY_LABEL",
  BATTERY_DESCRIPTION = "BATTERY_DESCRIPTION",
  BATTERY_ICON_LABEL = "BATTERY_ICON_LABEL",
  BATTERY_ICON_DESCRIPTION = "BATTERY_ICON_DESCRIPTION",
  FAN_LABEL = "FAN_LABEL",
  FAN_DESCRIPTION = "FAN_DESCRIPTION",
  FSR_LABEL = "FSR_LABEL",
  FSR_DESCRIPTION = "FSR_DESCRIPTION",
  FPS_LABEL = "FPS_LABEL",
  FPS_DESCRIPTION = "FPS_DESCRIPTION",
  FPS_COLOR_CHANGE_LABEL = "FPS_COLOR_CHANGE_LABEL",
  FPS_COLOR_CHANGE_DESCRIPTION = "FPS_COLOR_CHANGE_DESCRIPTION",
  FRAME_TIMING_LABEL = "FRAME_TIMING_LABEL",
  FRAME_TIMING_DESCRIPTION = "FRAME_TIMING_DESCRIPTION",
  FRAME_COUNT_LABEL = "FRAME_COUNT_LABEL",
  FRAME_COUNT_DESCRIPTION = "FRAME_COUNT_DESCRIPTION",
  FRAME_TIME_LABEL = "FRAME_TIME_LABEL",
  FRAME_TIME_DESCRIPTION = "FRAME_TIME_DESCRIPTION",
  TIME_FORMAT_LABEL = "TIME_FORMAT_LABEL",
  TIME_FORMAT_DESCRIPTION = "TIME_FORMAT_DESCRIPTION",
  TIME_FORMAT_INPUT_TITLE = "TIME_FORMAT_INPUT_TITLE",
  TIME_FORMAT_INPUT_DESCRIPTION = "TIME_FORMAT_INPUT_DESCRIPTION"
}
    