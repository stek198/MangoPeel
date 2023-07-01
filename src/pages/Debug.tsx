import { VFC } from "react";
import { ButtonItem, PanelSectionRow } from "decky-frontend-lib";
import { VscDebug } from "react-icons/vsc"

export const Debug: VFC = () => {
    return (
        // The outermost div is to push the content down into the visible area
        <>
            <PanelSectionRow>
                <ButtonItem
                    icon={<VscDebug style={{ display: "block" }} />}
                    label="Debug"
                    onClick={() => {
                        
                    }}
                    description="123"
                >
                    Generate Debug Log
                </ButtonItem>
            </PanelSectionRow>
        </>
    );
}