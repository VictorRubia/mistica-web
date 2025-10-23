import { isWebViewBridgeAvailable as r } from "@tef-novum/webview-bridge";
const t = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var n;
    var _e_userAgent, _ref;
    return typeof self > "u" ? (_e_userAgent = e.userAgent) !== null && _e_userAgent !== void 0 ? _e_userAgent : "" : (_ref = (n = self.navigator) == null ? void 0 : n.userAgent) !== null && _ref !== void 0 ? _ref : "";
}, s = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return typeof e.insideNovumNativeApp < "u" ? e.insideNovumNativeApp : r();
}, f = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return t(e).includes("acceptance-test") && !process.env.SSR_TEST;
}, i = !!(typeof self < "u" && self.MSStream), o = (e)=>e.platform === "android" ? !0 : t(e).toLowerCase().includes("android") && !i, u = (e)=>!!(e.platform === "ios" || /iPad|iPhone|iPod/.test(t(e)) && !i || s(e) && !o(e)), a = (e)=>!!t(e).match(/Firefox\/([0-9]+)\./), d = (e)=>!!t(e).match(/Chrom(e|ium)\/([0-9]+)\./), p = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = e.platform;
    return n || (u(e) ? "ios" : o(e) ? "android" : "desktop");
};
export { p as getPlatform, o as isAndroid, d as isChrome, a as isFirefox, s as isInsideNovumNativeApp, u as isIos, f as isRunningAcceptanceTest };
