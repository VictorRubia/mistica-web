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
import { jsx as e } from "react/jsx-runtime";
import * as c from "react";
import { useFieldProps as x } from "./form-context.js";
import { TextFieldBaseAutosuggest as A } from "./text-field-base.js";
import { isInputTypeSupported as E } from "./utils/dom.js";
import { isServerSide as N } from "./utils/environment.js";
import j from "./generated/mistica-icons/icon-calendar-regular.js";
import { getLocalYearMonthString as o } from "./utils/time.js";
import { useTheme as v } from "./hooks.js";
import { iconContainer as B } from "./date-field.css-mistica.js";
import { iconSize as C } from "./icon-button.css-mistica.js";
import { formDateOutOfRangeError as L } from "./text-tokens.js";
const V = /*#__PURE__*/ c.lazy(()=>import(/* webpackChunkName: "date-time-picker" */ "./date-time-picker.js")), Y = (_param)=>{
    var { disabled: h, error: F, helperText: g, name: D, label: M, optional: d, validate: n, validateOnBlurInsideForm: R, onChange: S, onChangeValue: s, onBlur: y, value: I, defaultValue: O, min: r, max: i, dataAttributes: f } = _param, l = _object_without_properties(_param, [
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
    const k = (t)=>t, T = c.useMemo(()=>E("month"), []), { texts: z, t: b } = v(), m = (t)=>!(r && t && t < o(r) || i && t && t > o(i)), u = x({
        name: D,
        label: M,
        value: I,
        defaultValue: O,
        processValue: k,
        helperText: g,
        optional: d,
        error: F,
        disabled: h,
        onBlur: y,
        validate: (t, a)=>m(t) ? n == null ? void 0 : n(t, a) : z.formDateOutOfRangeError || b(L),
        validateOnBlurInsideForm: R,
        onChange: S,
        onChangeValue: (t, a)=>{
            m(t) && (s == null || s(t, a));
        }
    }), p = /* @__PURE__ */ e(A, _object_spread_props(_object_spread({}, l, u), {
        min: r ? o(r) : void 0,
        max: i ? o(i) : void 0,
        type: "month",
        endIconOverlay: /* @__PURE__ */ e("div", {
            className: B,
            "data-testid": "endIcon",
            children: /* @__PURE__ */ e(j, {
                size: C.default
            })
        }),
        dataAttributes: _object_spread({
            "component-name": "MonthField",
            testid: "MonthField"
        }, f)
    }));
    return T || N() ? p : /* @__PURE__ */ e(c.Suspense, {
        fallback: p,
        children: /* @__PURE__ */ e(V, _object_spread_props(_object_spread({}, l, u), {
            optional: d,
            isValidDate: (t)=>m(o(t.toDate())),
            mode: "year-month",
            dataAttributes: _object_spread({
                "component-name": "MonthField",
                testid: "MonthField"
            }, f)
        }))
    });
}, P = Y;
export { P as default };
