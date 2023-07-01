import { useEffect, useState, VFC } from "react";
import { PanelSection} from "decky-frontend-lib";
import { SessionParamGroup } from "./util/enum";
import { paramList } from "./util/config";
import { Settings } from "../util";
import { SessionParamItem } from "./components/SessionParamItem";

export const Config: VFC = () => {
    return (
      <>{
        Object.values(SessionParamGroup).map((groupName)=>{
            var groupItem=Object.values(paramList).filter((paramData) => {
              return paramData.group==groupName;
            })
            useEffect(()=>{
              const updateEvent=()=>{
                
              }
              Settings.settingChangeEventBus.addEventListener(groupName,updateEvent);
              return ()=>{
                Settings.settingChangeEventBus.removeEventListener(groupName,updateEvent);
            }
            },[])
            return groupItem.length>0&&(
            <PanelSection title={groupName}>
            {groupItem.map((paramData)=>{
              return(
                <>
                  <SessionParamItem paramData={paramData}></SessionParamItem>
                </>)
              })}
            </PanelSection>
            )
          })}
      </>
    );
}