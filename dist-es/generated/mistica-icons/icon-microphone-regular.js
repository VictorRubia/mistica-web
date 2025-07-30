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
import { jsx as e, jsxs as s } from "react/jsx-runtime";
import { useTheme as n } from "../../hooks.js";
import { useIsInverseOrMediaVariant as v } from "../../theme-variant-context.js";
import { vars as t } from "../../skins/skin-contract.css-mistica.js";
const l = (_param)=>{
    var { color: i, size: c = 24 } = _param, r = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const a = v(), o = i !== null && i !== void 0 ? i : a ? t.colors.inverse : t.colors.neutralHigh, { skinName: h } = n();
    return h.match(/^o2-new/i) ? /* @__PURE__ */ e("svg", _object_spread_props(_object_spread({
        width: c,
        height: c,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, r), {
        children: /* @__PURE__ */ e("path", {
            fill: o,
            d: "M8.52 14.039v-8.52C8.52 3.545 10.05 2 12.005 2s3.485 1.546 3.485 3.518v8.52c0 1.973-1.531 3.52-3.485 3.52S8.52 16.01 8.52 14.037m8.257 7.221c0 .408-.33.74-.733.74H7.97a.737.737 0 0 1-.733-.74c0-.408.33-.74.733-.74h3.302v-.796c-2.687-.365-4.772-2.688-4.772-5.5 0-.408.329-.74.733-.74s.732.332.732.74c0 2.247 1.813 4.073 4.035 4.073s4.035-1.83 4.035-4.073c0-.408.328-.74.732-.74s.733.332.733.74c0 2.812-2.08 5.135-4.772 5.5v.797h3.302a.74.74 0 0 1 .747.74m-4.772-5.182c1.15 0 2.02-.877 2.02-2.04v-8.52c0-1.161-.87-2.039-2.02-2.039-1.151 0-2.02.878-2.02 2.04v8.52c0 1.162.869 2.039 2.02 2.039"
        })
    })) : h.match(/^o2/i) ? /* @__PURE__ */ e("svg", _object_spread_props(_object_spread({
        width: c,
        height: c,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, r), {
        children: /* @__PURE__ */ e("path", {
            fill: o,
            d: "M8.52 14.039v-8.52C8.52 3.545 10.05 2 12.005 2s3.485 1.546 3.485 3.518v8.52c0 1.973-1.531 3.52-3.485 3.52S8.52 16.01 8.52 14.037m8.257 7.221c0 .408-.33.74-.733.74H7.97a.737.737 0 0 1-.733-.74c0-.408.33-.74.733-.74h3.302v-.796c-2.687-.365-4.772-2.688-4.772-5.5 0-.408.329-.74.733-.74s.732.332.732.74c0 2.247 1.813 4.073 4.035 4.073s4.035-1.83 4.035-4.073c0-.408.328-.74.732-.74s.733.332.733.74c0 2.812-2.08 5.135-4.772 5.5v.797h3.302a.74.74 0 0 1 .747.74m-4.772-5.182c1.15 0 2.02-.877 2.02-2.04v-8.52c0-1.161-.87-2.039-2.02-2.039-1.151 0-2.02.878-2.02 2.04v8.52c0 1.162.869 2.039 2.02 2.039"
        })
    })) : /* @__PURE__ */ s("svg", _object_spread_props(_object_spread({
        width: c,
        height: c,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, r), {
        children: [
            /* @__PURE__ */ e("path", {
                fill: o,
                d: "M11.54 17.15h.921c2.223 0 4.026-1.842 4.026-4.114V6.365c0-2.272-1.803-4.115-4.026-4.115h-.92c-2.223 0-4.026 1.843-4.026 4.115v6.671c0 2.272 1.803 4.115 4.026 4.115M8.666 6.366c0-1.62 1.291-2.94 2.876-2.94h.92c1.585 0 2.876 1.32 2.876 2.94v6.671c0 1.62-1.291 2.939-2.876 2.939h-.92c-1.585 0-2.876-1.32-2.876-2.939z"
            }),
            /* @__PURE__ */ e("path", {
                fill: o,
                d: "M17.65 15.055a.57.57 0 0 0-.754.311q-.234.571-.607 1.061a4.6 4.6 0 0 1-3.69 1.852h-1.196a4.5 4.5 0 0 1-2.119-.52 4.74 4.74 0 0 1-2.18-2.393.57.57 0 0 0-.753-.311.59.59 0 0 0-.305.77A5.896 5.896 0 0 0 8.76 18.81c.822.429 1.71.646 2.643.646v1.117h-.829a.583.583 0 0 0-.575.588c0 .323.259.588.575.588h2.804a.583.583 0 0 0 .575-.588.583.583 0 0 0-.575-.588h-.828v-1.117h.046c.915 0 1.792-.211 2.605-.629a5.9 5.9 0 0 0 2.753-3.003.593.593 0 0 0-.305-.77"
            })
        ]
    }));
}, g = l;
export { g as default };
