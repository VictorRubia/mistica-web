"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "showNativeSnackbar", {
    enumerable: true,
    get: function() {
        return T;
    }
});
const _webviewbridge = require("@tef-novum/webview-bridge");
const I = [
    "DISMISS",
    "TIMEOUT",
    "CONSECUTIVE",
    "BUTTON"
], T = (param)=>{
    let { message: t, duration: o, buttonText: e, buttonAccessibilityLabel: a, type: c = "INFORMATIVE", withDismiss: i } = param;
    return (0, _webviewbridge.nativeMessage)({
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
