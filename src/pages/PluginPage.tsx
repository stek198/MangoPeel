import { VFC } from "react";
import {SidebarNavigation} from "decky-frontend-lib"
import { Config } from "./ParamConfig";
import { Debug } from "./Debug";

const PluginPage: VFC = () => {
    return (
      <SidebarNavigation
        title="MangoPeel"
        showTitle
        pages={[
          {
            title: "More Config",
            content: <Config/>,
            route: "/mangoPeel/about"
          },
          {
            title: "Debug",
            content: <Debug />,
            route: "/mangoPeel/debug"
          }
        ]}
      />
    );
  };

export default PluginPage;