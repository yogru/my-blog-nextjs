import {CssValue} from "@/modules/CssUtils";

/**
 *  해당 컴포넌트에서만 적용 되는 레이아웃 상수값.
 *
 */


export type Layout= {
    mainHeaderSideHeight:CssValue

}
const layoutValue:Layout = {
    mainHeaderSideHeight:new CssValue(12,"rem")
}



export default layoutValue




