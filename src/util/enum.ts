export enum ParamName {
  alpha = "alpha",
  background_alpha = "background_alpha",
  battery = "battery",
  battery_icon = "battery_icon",
  cpu_stats = "cpu_stats",
  core_load = "core_load",
  core_load_change = "core_load_change",
  cpu_load_change = "cpu_load_change",
  cpu_mhz = "cpu_mhz",
  cpu_power = "cpu_power",
  cpu_temp = "cpu_temp",
  cpu_text = "cpu_text",
  gpu_stats = "gpu_stats",
  gpu_load_change = "gpu_load_change",
  gpu_core_clock = "gpu_core_clock",
  gpu_power = "gpu_power",
  gpu_temp = "gpu_temp",
  gpu_text = "gpu_text",
  legacy_layout = "legacy_layout",
  width = "width",
  offset_x = "offset_x",
  offset_y = "offset_y",
  fsr = "fsr",
  //io_stats="io_stats",
  //io_read="io_read",
  //io_write="io_write",
  ram = "ram",
  vram = "vram",
  swap = "swap",
  //procmem="procmem",
  //procmem_shared="procmem_shared",
  //procmem_virt="procmem_virt",
  position = "position",
  fps = "fps",
  fps_only = "fps_only",
  fps_color_change = "fps_color_change",
  fan = "fan",
  no_display = "no_display",
  horizontal = "horizontal",
  hud_no_margin = "hud_no_margin",
  table_columns = "table_columns",
  //arch="arch",
  //gpu_name="gpu_name",
  //wine="wine",
  frametime = "frametime",
  frame_timing = "frame_timing",
  frame_count = "frame_count",
  full = "full",
  font_scale = "font_scale",
  //no_small_font="no_small_font",
  custom_text_center = "custom_text_center",
  custom_text = "custom_text",
  time = "time",
  version = "version",
  time_format = "time_format"
}

export enum ParamGroup{
    LAYOUT="LAYOUT",
    SETTING="SETTING",
    CUSTOM="CUSTOM",
    CPU="CPU",
    GPU="GPU",
    //IO="IO",
    RAM="RAM",
    BATT="BATT",
    OTHER="OTHER",

}

export enum ParamPatchType{
    dropdown="dropdown",
    slider="slider",
    notchSlider="notchSlider",
    textInput="textInput",
    resortableList="resortableList",
    none="none"
}

export enum UpdateType{
    DISABLE="DISABLE",
    UPDATE="UPDATE",
    HIDE="HIDE",
    SHOW="SHOW",
    ENABLE="ENABLE",
    DISMOUNT="DISMOUNT"
}

export enum PluginState{
    INIT="0",
    RUN="1",
    QUIT="2",
  }