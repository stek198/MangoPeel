import { DropdownItem, PanelSectionRow, ToggleField,SliderField,showModal,ButtonItem } from "decky-frontend-lib";
import { useEffect, useState, VFC } from "react";
import { RiArrowDownSFill, RiArrowUpSFill} from 'react-icons/ri';
import { ParamPatchType, Settings} from "../../util";
import { SlowSliderField,TextInputModal } from "../../components";
import ResortableList from "../../components/ResortableList";
import { LocalizationManager, localizeStrEnum } from "../../i18n";
import { SessionParamData, SessionParamPatch } from "../util/interface";
import { SessionParamName } from "../util/enum";

const SessionParamPatchItem: VFC<{ paramName: SessionParamName, patch: SessionParamPatch; patchIndex: number }> = ({ paramName, patch, patchIndex }) => {

  const [selectedValue, setSelectedValue] = useState(Settings.getParamValue(paramName, patchIndex));
  const [selectedIndex, setSelectedIndex] = useState(patch.args.indexOf(selectedValue));

  useEffect(() => {
    const updateEvent = () => {
      const new_value = Settings.getParamValue(paramName, patchIndex);
      const new_index = patch.args.indexOf(new_value);
      setSelectedValue(new_value);
      setSelectedIndex(new_index);
    };
    Settings.settingChangeEventBus.addEventListener(paramName, updateEvent);
    return () => {
      Settings.settingChangeEventBus.removeEventListener(paramName, updateEvent);
    };
  }, []);

  const updateSelectedValue = (value: any) => {
    setSelectedValue(value);
  };public static setParamValue(paramName:SessionParamName,patchIndex:number,paramValue:any){
    var paramValues=this.getParamValues(paramName);
    if(patchIndex>=paramValues.length){
      paramValues=this.getDefaultParamValues(paramName);
    }
    if(patchIndex>=0&&patchIndex<paramValues.length&&paramValue!=paramValues[patchIndex]){
      paramValues[patchIndex]=paramValue;
      this.ensureSettings().setParamValues(paramName,paramValues);
      Settings.saveSettingsToLocalStorage();
      Backend.applyConfig(this.getSettingsIndex(),this.getParamConfig());
      //this.settingChangeEventBus.dispatchEvent(new Event(paramName))
    }
  }

  public static getParamValues(paramName:SessionParamName,patchIndex:number){
    var paramValues=this.ensureSettings().getParamValues(paramName);
    //参数值无效时，重设置为默认值
    if(!this.isValidParamValue(paramValues,paramName,patchIndex)){
      paramValues=this.getDefaultParamValues(paramName);
      this.ensureSettings().setParamValues(paramName,paramValues);
    }
    return paramValues[patchIndex];
  }

  public static setParamEnable(paramName:SessionParamName,bEnable:boolean,bforce?:boolean){
    if(bEnable!=this.getParamEnable(paramName)||(bforce??false)){
      this.ensureSettings().setParamEnable(paramName,bEnable);
      var updateParamList=this.updateParamVisible(paramName);
      var updateGroupList:ParamGroup[]=[];
      //刷新前置参数包含此参数的组件
      updateParamList.forEach((paramName)=>{
        //刷新组件
        this.settingChangeEventBus.dispatchEvent(new Event(paramName));
        if(updateGroupList.indexOf(paramList[paramName].group)==-1){
          updateGroupList.push(paramList[paramName].group);
        }
      })
      //刷新对应的参数组标题
      updateGroupList.forEach((groupName)=>{
        this.settingChangeEventBus.dispatchEvent(new Event(groupName));
      })
      Settings.saveSettingsToLocalStorage();
      Backend.applyConfig(this.getSettingsIndex(),this.getParamConfig());
    }
  }

  public static getParamEnable(paramName:SessionParamName){
    return this._instance.sessionParamInfos[paramName].bEnable;
  }

  switch (patch.type) {
    case ParamPatchType.slider:
      return (
        <>
          <PanelSectionRow id="MangoPeel_Slider">
            <SlowSliderField
              min={patch.args[0]}
              max={patch.args[1]}
              step={patch.args[2]}
              showValue={true}
              value={selectedValue}
              layout={"inline"}
              bottomSeparator={"none"}
              onChangeEnd={updateSelectedValue}
            />
          </PanelSectionRow>
          <style>
            {
              //缩短滑动条
              `#MangoPeel_Slider 
              .gamepaddialog_Field_S-_La.gamepaddialog_ChildrenWidthFixed_1ugIU 
              .gamepaddialog_FieldChildren_14_HB{
                min-width:215px
              }`
            }
            {
              //调整标签位置
              `#MangoPeel_Slider 
              .gamepadslider_DescriptionValue_2oRwF {
                width: 43px;
                margin-left: 0;
                flex-direction: column;
              }`
            }
          </style>
        </>
      );
    case ParamPatchType.notchSlider:
      return (
        <>
          <PanelSectionRow>
            <SliderField
              label={patch.label}
              min={0}
              max={patch.args.length - 1}
              value={selectedIndex}
              bottomSeparator={"none"}
              notchCount={patch.args.length}
              notchLabels={patch.args.map((x, i) => {
                return { notchIndex: i, label: x, value: i };
              })}
              onChange={(value) => {
                setSelectedIndex(value);
                updateSelectedValue(patch.args[value]);
              }}
            />
          </PanelSectionRow>
        </>
      );
    case ParamPatchType.dropdown:
      return (
        <>
          <PanelSectionRow>
            <DropdownItem
              label={patch.label}
              rgOptions={patch.args.map((x, i) => {
                return { data: i, label: x };
              })}
              selectedOption={selectedIndex}
              bottomSeparator={"none"}
              onChange={(index) => {
                setSelectedIndex(index.data);
                updateSelectedValue(index.label);
              }}
            />
          </PanelSectionRow>
        </>
      );
    case ParamPatchType.textInput:
      return (
        <>
          <PanelSectionRow>
            <ButtonItem
              layout="below"
              bottomSeparator={"none"}
              onClick={() => {
                showModal(
                  <TextInputModal
                    strTitle={patch.args?.[0]}
                    strDescription={patch.args?.[1]}
                    defaultValue={selectedValue}
                    OnConfirm={(text) => {
                      updateSelectedValue(text);
                    }}
                  />
                );
              }}
            >
              {selectedValue}
            </ButtonItem>
          </PanelSectionRow>
        </>
      );
    case ParamPatchType.resortableList:
      return (
        <>
            <ResortableList initialArray={selectedValue.map((value: any)=>{
              return {label:patch.args.filter((item)=>{ return value==item.value})?.[0]?.label??"not_find",value:value};
            })}
            onArrayChange={(newArray)=>{
              var value = newArray.map((item)=>{
                return item.value;
              })
              updateSelectedValue(value);
            }}/>
        </>
      );
    default:
      return null;
  }
};

export const SessionParamItem: VFC<{ paramData: SessionParamData}> = ({paramData}) => {
      const [enable, setEnable] = useState(Settings.getParamEnable(paramData.name));
      const [showPatch,setShowPatch] = useState(false);
      const updateEvent=()=>{
        //console.log(`enable=${enable} new_enable=${new_enable}`);
        setEnable(Settings.getParamEnable(paramData.name));
      }
      useEffect(()=>{
        Settings.settingChangeEventBus.addEventListener(paramData.name,updateEvent);
        return ()=>{
          Settings.settingChangeEventBus.removeEventListener(paramData.name,updateEvent);
      }
      },[])
      return (
        <>
          <PanelSectionRow>
            <ToggleField
              bottomSeparator={(paramData.toggle.isShowPatchWhenEnable??true)==enable&&paramData.patchs?.length > 0?"none":"standard"}
              label={paramData.toggle.label?LocalizationManager.getString((paramData.toggle.label)as localizeStrEnum):undefined}
              description={paramData.toggle.description?LocalizationManager.getString((paramData.toggle.description)as localizeStrEnum):undefined}
              checked={enable}
              onChange={(enable) => {
                setEnable(enable);
                Settings.setParamEnable(paramData.name,enable);
              }}
            />
          </PanelSectionRow>
          {showPatch&&(paramData.toggle.isShowPatchWhenEnable??true)==enable&&paramData.patchs?.length > 0 ? (
            <>
              {paramData.patchs?.map((e,patchIndex) => (
                <SessionParamPatchItem paramName={paramData.name} patch={e} patchIndex={patchIndex}/>
              ))}
            </>
          ) : null}
          {(paramData.toggle.isShowPatchWhenEnable??true)==enable&&paramData.patchs?.length > 0 &&
          <PanelSectionRow>
          <ButtonItem
              layout="below"
              style={{
                height:10,
              }}
              onClick={() => setShowPatch(!showPatch)}
                    >
                      {showPatch ? (
                        <RiArrowUpSFill
                          style={{ transform: "translate(0, -13px)", fontSize: "1.5em"}}
                        />
                      ) : (
                        <RiArrowDownSFill
                          style={{ transform: "translate(0, -12px)", fontSize: "1.5em"}}
                        />
                      )}
                    </ButtonItem>
          </PanelSectionRow>
          }
        </>
      );
};