import { ServerAPI,Router } from "decky-frontend-lib";
import { Backend} from "./backend";
import { LocalizationManager } from "../i18n/localization";
import { Settings } from "./settings";
import PluginPage from "../pages/PluginPage";


export class PluginManager{
  public static register = async(serverAPI:ServerAPI)=>{
    await Settings.init();
    await LocalizationManager.init();
    await Backend.init(serverAPI);
    Backend.reloadConfig();
    Backend.applyConfigs(Settings.getParamConfigs());
    serverAPI.routerHook.addRoute("/mangoPeel", PluginPage);
  }

  public static openPluginPage(){
    Router.CloseSideMenus()
    Router.Navigate("/mangoPeel")
  }

  public static unregister = (serverAPI:ServerAPI)=>{
    serverAPI.routerHook.removeRoute("/mangoPeel");
  }
}

