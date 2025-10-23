import { nativeMessage as r } from "@tef-novum/webview-bridge";
const I = [
    "DISMISS",
    "TIMEOUT",
    "CONSECUTIVE",
    "BUTTON"
], T = (param)=>{
    let { message: t, duration: o, buttonText: e, buttonAccessibilityLabel: a, type: c = "INFORMATIVE", withDismiss: i } = param;
    return r({
        message: t,
        duration: o,
        buttonText: e,
        buttonAccessibilityLabel: a,
        type: c,
        withDismiss: i
    }).then((S)=>{
        const n = S;
        return n != null && n.action && I.includes(n.action) ? {
            action: n.action
        } : {
            action: "DISMISS"
        };
    });
};
export { T as showNativeSnackbar };
