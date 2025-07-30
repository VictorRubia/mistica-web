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
import { jsx as o, jsxs as n } from "react/jsx-runtime";
import { useTheme as l } from "../../hooks.js";
import { useIsInverseOrMediaVariant as s } from "../../theme-variant-context.js";
import { vars as t } from "../../skins/skin-contract.css-mistica.js";
const v = (_param)=>{
    var { color: a, size: e = 24 } = _param, c = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const h = s(), r = a !== null && a !== void 0 ? a : h ? t.colors.inverse : t.colors.neutralHigh, { skinName: i } = l();
    return i.match(/^o2-new/i) ? /* @__PURE__ */ o("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, c), {
        children: /* @__PURE__ */ o("path", {
            fill: r,
            d: "M8.52 5.518v8.52c0 1.973 1.53 3.52 3.485 3.52s3.485-1.547 3.485-3.52v-8.52C15.49 3.546 13.959 2 12.005 2S8.52 3.546 8.52 5.518M16.044 22a.74.74 0 0 0-.014-1.48h-3.302v-.796c2.691-.365 4.772-2.688 4.772-5.5a.737.737 0 0 0-.733-.74.737.737 0 0 0-.732.74c0 2.243-1.813 4.073-4.035 4.073s-4.035-1.826-4.035-4.073a.737.737 0 0 0-.732-.74.737.737 0 0 0-.733.74c0 2.812 2.085 5.135 4.772 5.5v.797H7.97a.737.737 0 0 0-.733.74c0 .407.33.739.733.739z"
        })
    })) : i.match(/^o2/i) ? /* @__PURE__ */ o("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, c), {
        children: /* @__PURE__ */ o("path", {
            fill: r,
            d: "M8.52 5.518v8.52c0 1.973 1.53 3.52 3.485 3.52s3.485-1.547 3.485-3.52v-8.52C15.49 3.546 13.959 2 12.005 2S8.52 3.546 8.52 5.518M16.044 22a.74.74 0 0 0-.014-1.48h-3.302v-.796c2.691-.365 4.772-2.688 4.772-5.5a.737.737 0 0 0-.733-.74.737.737 0 0 0-.732.74c0 2.243-1.813 4.073-4.035 4.073s-4.035-1.826-4.035-4.073a.737.737 0 0 0-.732-.74.737.737 0 0 0-.733.74c0 2.812 2.085 5.135 4.772 5.5v.797H7.97a.737.737 0 0 0-.733.74c0 .407.33.739.733.739z"
        })
    })) : /* @__PURE__ */ n("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, c), {
        children: [
            /* @__PURE__ */ o("path", {
                fill: r,
                d: "M12.44 2.25h-.921c-2.224 0-4.026 1.842-4.026 4.115v6.671c0 2.272 1.802 4.115 4.026 4.115h.92c2.224 0 4.026-1.843 4.026-4.115V6.365c0-2.273-1.802-4.115-4.026-4.115"
            }),
            /* @__PURE__ */ o("path", {
                fill: r,
                d: "M17.65 15.055a.57.57 0 0 0-.754.311q-.234.571-.607 1.061a4.6 4.6 0 0 1-3.69 1.852h-1.196a4.5 4.5 0 0 1-2.119-.52 4.74 4.74 0 0 1-2.18-2.393.57.57 0 0 0-.753-.311.59.59 0 0 0-.305.77A5.896 5.896 0 0 0 8.76 18.81c.822.429 1.71.646 2.643.646v1.117h-.829a.583.583 0 0 0-.575.588c0 .323.259.588.575.588h2.804a.583.583 0 0 0 .575-.588.583.583 0 0 0-.575-.588h-.828v-1.117h.046c.915 0 1.792-.211 2.605-.629a5.9 5.9 0 0 0 2.753-3.003.593.593 0 0 0-.305-.77"
            })
        ]
    }));
}, M = v;
export { M as default };
