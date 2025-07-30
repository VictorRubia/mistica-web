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
import { useTheme as n } from "../../hooks.js";
import { useIsInverseOrMediaVariant as c } from "../../theme-variant-context.js";
import { vars as t } from "../../skins/skin-contract.css-mistica.js";
const s = (_param)=>{
    var { color: h, size: l = 24 } = _param, a = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const i = c(), r = h !== null && h !== void 0 ? h : i ? t.colors.inverse : t.colors.neutralHigh, { skinName: o } = n();
    return o.match(/^o2-new/i) ? /* @__PURE__ */ e("svg", _object_spread_props(_object_spread({
        width: l,
        height: l,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, a), {
        children: /* @__PURE__ */ e("path", {
            fill: r,
            d: "m15.998 14.971 5.79 5.79a.716.716 0 0 1 0 1.02.7.7 0 0 1-.513.214.72.72 0 0 1-.512-.214l-4.756-4.757v4.245a.73.73 0 0 1-.73.731.74.74 0 0 1-.368-.098l-9.466-5.539h-2.35a.727.727 0 0 1-.727-.726V8.73c0-.4.326-.727.726-.727h2.546a.727.727 0 0 1 0 1.453h-1.82v5.455h1.82c.13 0 .256.033.368.098l8.54 4.999v-4.431L2.213 3.241A.728.728 0 0 1 3.24 2.213L7.7 6.677l7.2-4.213a.73.73 0 0 1 1.098.628zM14.546 4.364 8.77 7.743l5.776 5.776z"
        })
    })) : o.match(/^o2/i) ? /* @__PURE__ */ e("svg", _object_spread_props(_object_spread({
        width: l,
        height: l,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, a), {
        children: /* @__PURE__ */ e("path", {
            fill: r,
            d: "m15.998 14.971 5.79 5.79a.716.716 0 0 1 0 1.02.7.7 0 0 1-.513.214.72.72 0 0 1-.512-.214l-4.756-4.757v4.245a.73.73 0 0 1-.73.731.74.74 0 0 1-.368-.098l-9.466-5.539h-2.35a.727.727 0 0 1-.727-.726V8.73c0-.4.326-.727.726-.727h2.546a.727.727 0 0 1 0 1.453h-1.82v5.455h1.82c.13 0 .256.033.368.098l8.54 4.999v-4.431L2.213 3.241A.728.728 0 0 1 3.24 2.213L7.7 6.677l7.2-4.213a.73.73 0 0 1 1.098.628zM14.546 4.364 8.77 7.743l5.776 5.776z"
        })
    })) : /* @__PURE__ */ e("svg", _object_spread_props(_object_spread({
        width: l,
        height: l,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, a), {
        children: /* @__PURE__ */ e("path", {
            fill: r,
            d: "M12.411 20.135c.125.076.27.115.411.115h-.002a.804.804 0 0 0 .805-.814V5.315a.81.81 0 0 0-.394-.702.79.79 0 0 0-.797-.01l-7.199 4.09h-2.19a.8.8 0 0 0-.795.806v5.753a.8.8 0 0 0 .794.806h2.191zm-7.109-5.15H3.305V9.771h1.997c.136 0 .27-.036.389-.104l6.873-3.908v13.234l-6.873-3.905a.8.8 0 0 0-.389-.105M22.631 9.75l-2.588 2.625 2.588 2.626a.56.56 0 0 1 0 .784.534.534 0 0 1-.772 0l-2.588-2.626-2.589 2.625a.534.534 0 0 1-.772 0 .56.56 0 0 1 0-.783l2.589-2.626L15.91 9.75a.56.56 0 0 1 0-.784.54.54 0 0 1 .772 0l2.589 2.626 2.588-2.626a.54.54 0 0 1 .772 0 .56.56 0 0 1 0 .784"
        })
    }));
}, p = s;
export { p as default };
