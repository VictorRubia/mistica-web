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
import { jsxs as R, Fragment as H, jsx as n } from "react/jsx-runtime";
import * as d from "react";
import { TextFieldBaseAutosuggest as I, FieldEndIcon as g } from "./text-field-base.js";
import B from "./generated/mistica-icons/icon-calendar-regular.js";
import F from "react-datetime";
import S from "./overlay.js";
import { DEFAULT_WIDTH as E } from "./text-field-components.css-mistica.js";
import { cancelEvent as L, createChangeEvent as T } from "./utils/dom.js";
import { useTheme as V, useElementDimensions as Y } from "./hooks.js";
import j from "./generated/mistica-icons/icon-close-regular.js";
import { reactDatePicker as A } from "./date-time-picker.css-mistica.js";
import { vars as O } from "./skins/skin-contract.css-mistica.js";
import "moment/locale/es";
import "moment/locale/de";
import "moment/locale/pt-br";
import "moment/locale/en-gb";
import { clearButton as q } from "./text-tokens.js";
const K = {
    es: "es",
    // spanish
    ca: "es",
    // catalan
    eu: "es",
    // euskera
    gl: "es",
    // gallego
    de: "de",
    // german
    pt: "pt-br",
    // portuguese
    en: "en-gb"
}, N = (i)=>{
    const a = i.toLocaleLowerCase().split("-")[0];
    return K[a] || "en-gb";
}, le = (_param)=>{
    var { withTime: i, mode: a, isValidDate: h, optional: u } = _param, o = _object_without_properties(_param, [
        "withTime",
        "mode",
        "isValidDate",
        "optional"
    ]);
    const [m, y] = d.useState(!1), { texts: x, i18n: { locale: b }, t: k } = V(), r = d.useRef(null), { height: C, ref: v } = Y(), l = (e)=>{
        o.disabled || y(e);
    }, D = ()=>{
        var f;
        const { top: e = 0, bottom: t = 0, left: c = 0 } = ((f = r.current) == null ? void 0 : f.getBoundingClientRect()) || {}, P = 260 + t < window.innerHeight;
        return {
            width: E,
            top: P ? t : e - C,
            left: c,
            position: "absolute",
            borderRadius: O.borderRadii.input,
            overflow: "hidden",
            boxShadow: "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)"
        };
    }, s = ()=>{
        var t;
        const e = (t = r.current) == null ? void 0 : t.value;
        return e ? new Date(e) : void 0;
    }, w = (e)=>i ? e.format("yyyy-MM-DD HH:mm") : a === "year-month" ? e.format("yyyy-MM") : e.format("yyyy-MM-DD"), p = (e)=>{
        var c;
        const t = typeof e == "string" ? e : w(e);
        r.current && (r.current.focus(), (c = o.onChange) == null || c.call(o, T(r.current, t)));
    }, M = ()=>s() && u ? /* @__PURE__ */ n(g, {
            Icon: j,
            "aria-label": x.clearButton || k(q),
            hasBackgroundColor: !1,
            onPress: ()=>p("")
        }) : /* @__PURE__ */ n(g, {
            Icon: B,
            "aria-label": "",
            disabled: o.disabled,
            hasBackgroundColor: !1,
            onPress: ()=>l(!m)
        });
    return /* @__PURE__ */ R(H, {
        children: [
            /* @__PURE__ */ n(I, _object_spread_props(_object_spread({}, o), {
                style: {
                    cursor: "pointer"
                },
                required: !u,
                type: "text",
                autoComplete: "off",
                shrinkLabel: !!s(),
                endIcon: M(),
                inputRef: (e)=>{
                    var t;
                    (t = o == null ? void 0 : o.inputRef) == null || t.call(o, e), r.current = e;
                },
                readOnly: !0,
                onKeyDown: ()=>l(!0),
                onClick: ()=>{
                    l(!0);
                }
            })),
            m && /* @__PURE__ */ n(S, {
                onPress: (e)=>{
                    L(e), l(!1);
                },
                disableScroll: !0,
                children: /* @__PURE__ */ n("div", {
                    ref: v,
                    style: D(),
                    className: A,
                    children: /* @__PURE__ */ n(F, {
                        initialViewMode: a === "year-month" ? "months" : void 0,
                        dateFormat: a === "year-month" ? "YYYY-MM" : void 0,
                        timeFormat: i ? "HH:mm" : !1,
                        initialValue: s(),
                        locale: N(b),
                        input: !1,
                        onChange: p,
                        isValidDate: h
                    })
                })
            })
        ]
    });
};
export { le as default };
