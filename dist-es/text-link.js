"use client";
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
import { jsx as d } from "react/jsx-runtime";
import { BaseTouchable as k } from "./touchable.js";
import y from "classnames";
import { useTheme as T } from "./hooks.js";
import { useIsInverseOrMediaVariant as x } from "./theme-variant-context.js";
import { useForm as I } from "./form-context.js";
import { getTextFromChildren as r } from "./utils/common.js";
import { useTrackingConfig as b, eventNames as w, eventCategories as C, eventActions as D } from "./utils/analytics.js";
import { variants as n, linkStyles as o } from "./text-link.css-mistica.js";
const E = (_param)=>{
    var { children: e, className: a = "", disabled: s, style: i, trackEvent: m, underline: c = "always" } = _param, t = _object_without_properties(_param, [
        "children",
        "className",
        "disabled",
        "style",
        "trackEvent",
        "underline"
    ]);
    const l = x(), { isDarkMode: u } = T(), { formStatus: f } = I(), { eventFormat: v } = b(), p = c === "always" ? o.underlineAlways : o.underlineOnHover, g = ()=>v === "google-analytics-4" ? {
            name: w.userInteraction,
            component_type: "link",
            component_copy: r(e)
        } : {
            category: C.userInteraction,
            action: D.linkTapped,
            label: r(e)
        };
    var _t_trackingEvent;
    return /* @__PURE__ */ d(k, _object_spread_props(_object_spread({}, t), {
        stopPropagation: !0,
        as: t.onPress ? "a" : void 0,
        trackingEvent: (_t_trackingEvent = t.trackingEvent) !== null && _t_trackingEvent !== void 0 ? _t_trackingEvent : m ? g() : void 0,
        disabled: s || f === "sending",
        className: y(l ? u ? n.inverseDark : n.inverseLight : n.default, p, a),
        style: i,
        children: e
    }));
}, _ = E;
export { _ as default };
