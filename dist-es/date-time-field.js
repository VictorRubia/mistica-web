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
import { jsx as r } from "react/jsx-runtime";
import * as c from "react";
import { useFieldProps as b } from "./form-context.js";
import { TextFieldBaseAutosuggest as w } from "./text-field-base.js";
import { isInputTypeSupported as A } from "./utils/dom.js";
import { isServerSide as E } from "./utils/environment.js";
import { getLocalDateTimeString as i } from "./utils/time.js";
import N from "./generated/mistica-icons/icon-calendar-regular.js";
import { isFirefox as V } from "./utils/platform.js";
import { useTheme as j } from "./hooks.js";
import { iconContainer as B } from "./date-field.css-mistica.js";
import { iconSize as C } from "./icon-button.css-mistica.js";
import { formDateOutOfRangeError as L } from "./text-tokens.js";
const M = /*#__PURE__*/ c.lazy(()=>import(/* webpackChunkName: "date-time-picker" */ "./date-time-picker.js")), $ = (_param)=>{
    var { disabled: F, error: g, helperText: R, name: S, label: I, optional: f, validate: a, validateOnBlurInsideForm: O, onChange: h, onChangeValue: m, onBlur: k, value: y, defaultValue: v, min: o, /**
   * When typing a datetime value into the input field (inside a test for example), some browsers like Chrome
   * force the year to have exactly 6 digits. In order to prevent this, in case max value was not provided we
   * set it so that it only accepts datetime values with years having up to 4 digits.
   */ max: s = /* @__PURE__ */ new Date("9999-12-31T23:59"), dataAttributes: d } = _param, l = _object_without_properties(_param, [
        "disabled",
        "error",
        "helperText",
        "name",
        "label",
        "optional",
        "validate",
        "validateOnBlurInsideForm",
        "onChange",
        "onChangeValue",
        "onBlur",
        "value",
        "defaultValue",
        "min",
        "max",
        "dataAttributes"
    ]);
    const u = c.useMemo(()=>V() ? !1 : A("datetime-local"), []), p = (e)=>u ? e : e.replace(/\s/, "T"), { texts: x, t: z } = j(), n = (e)=>{
        const t = p(e);
        return !(o && t && t < i(o) || s && t && t > i(s));
    }, D = b({
        name: S,
        label: I,
        value: y,
        defaultValue: v,
        processValue: p,
        helperText: R,
        optional: f,
        error: g,
        disabled: F,
        onBlur: k,
        validate: (e, t)=>n(e) ? a == null ? void 0 : a(e, t) : x.formDateOutOfRangeError || z(L),
        validateOnBlurInsideForm: O,
        onChange: h,
        onChangeValue: (e, t)=>{
            n(e) && (m == null || m(e, t));
        }
    }), T = /* @__PURE__ */ r(w, _object_spread_props(_object_spread({}, l, D), {
        min: o ? i(o) : void 0,
        max: s ? i(s) : void 0,
        type: "datetime-local",
        endIconOverlay: /* @__PURE__ */ r("div", {
            className: B,
            "data-testid": "endIcon",
            children: /* @__PURE__ */ r(N, {
                size: C.default
            })
        }),
        dataAttributes: _object_spread({
            "component-name": "DateTimeField",
            testid: "DateTimeField"
        }, d)
    }));
    return u || E() ? T : /* @__PURE__ */ r(c.Suspense, {
        fallback: T,
        children: /* @__PURE__ */ r(M, _object_spread_props(_object_spread({}, l, D), {
            optional: f,
            withTime: !0,
            isValidDate: (e)=>n(i(e.toDate())),
            dataAttributes: _object_spread({
                "component-name": "DateTimeField",
                testid: "DateTimeField"
            }, d)
        }))
    });
}, te = $;
export { te as default };
