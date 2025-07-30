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
import { jsx as t } from "react/jsx-runtime";
import * as f from "react";
import { useFieldProps as A } from "./form-context.js";
import { TextFieldBaseAutosuggest as E } from "./text-field-base.js";
import { isInputTypeSupported as N } from "./utils/dom.js";
import { isServerSide as j } from "./utils/environment.js";
import v from "./generated/mistica-icons/icon-calendar-regular.js";
import { getLocalDateString as r } from "./utils/time.js";
import { useTheme as B } from "./hooks.js";
import { isFirefox as C } from "./utils/platform.js";
import { iconContainer as L } from "./date-field.css-mistica.js";
import { iconSize as M } from "./icon-button.css-mistica.js";
import { formDateOutOfRangeError as V } from "./text-tokens.js";
const $ = /*#__PURE__*/ f.lazy(()=>import(/* webpackChunkName: "date-time-picker" */ "./date-time-picker.js")), q = (_param)=>{
    var { disabled: D, error: F, helperText: g, name: R, label: S, optional: c, validate: s, validateOnBlurInsideForm: I, onChange: O, onChangeValue: n, onBlur: k, value: y, defaultValue: T, min: i, max: o, dataAttributes: d } = _param, u = _object_without_properties(_param, [
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
    const h = (e)=>e, x = f.useMemo(()=>C() ? !1 : N("date"), []), { texts: z, t: b } = B(), a = (e)=>!(i && e && e < r(i) || o && e && e > r(o)), l = A({
        name: R,
        label: S,
        value: y,
        defaultValue: T,
        processValue: h,
        helperText: g,
        optional: c,
        error: F,
        disabled: D,
        onBlur: k,
        validate: (e, m)=>a(e) ? s == null ? void 0 : s(e, m) : z.formDateOutOfRangeError || b(V),
        validateOnBlurInsideForm: I,
        onChange: O,
        onChangeValue: (e, m)=>{
            a(e) && (n == null || n(e, m));
        }
    }), p = /* @__PURE__ */ t(E, _object_spread_props(_object_spread({}, u, l), {
        min: i ? r(i) : void 0,
        max: o ? r(o) : void 0,
        type: "date",
        endIconOverlay: /* @__PURE__ */ t("div", {
            className: L,
            "data-testid": "endIcon",
            children: /* @__PURE__ */ t(v, {
                size: M.default
            })
        }),
        dataAttributes: _object_spread({
            "component-name": "DateField",
            testid: "DateField"
        }, d)
    }));
    return x || j() ? p : /* @__PURE__ */ t(f.Suspense, {
        fallback: p,
        children: /* @__PURE__ */ t($, _object_spread_props(_object_spread({}, u, l), {
            optional: c,
            isValidDate: (e)=>a(r(e.toDate())),
            dataAttributes: _object_spread({
                "component-name": "DateField",
                testid: "DateField"
            }, d)
        }))
    });
}, te = q;
export { te as default };
