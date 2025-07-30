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
import { jsx as a } from "react/jsx-runtime";
import { useTheme as h } from "../../hooks.js";
import { useIsInverseOrMediaVariant as c } from "../../theme-variant-context.js";
import { vars as r } from "../../skins/skin-contract.css-mistica.js";
const s = (_param)=>{
    var { color: o, size: e = 24 } = _param, t = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const n = c(), l = o !== null && o !== void 0 ? o : n ? r.colors.inverse : r.colors.neutralHigh, { skinName: i } = h();
    return i.match(/^vivo-new/i) ? /* @__PURE__ */ a("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, t), {
        children: /* @__PURE__ */ a("path", {
            fill: l,
            d: "M12 2c5.52 0 10.001 4.48 10.001 10s-4.482 10-10 10C6.48 22 2 17.52 2 12S6.48 2 12 2M8.006 14.405l7.998-.04a.67.67 0 0 0 .663-.67.67.67 0 0 0-.67-.664l-7.999.04a.667.667 0 0 0 .008 1.334m-.006-5.742a1.334 1.334 0 1 0 0 2.665 1.334 1.334 0 0 0 0-2.665m8.004 0a1.334 1.334 0 1 0 0 2.665 1.334 1.334 0 0 0 0-2.665"
        })
    })) : i.match(/^blau/i) ? /* @__PURE__ */ a("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, t), {
        children: /* @__PURE__ */ a("path", {
            fill: l,
            d: "M12 2c5.52 0 10.001 4.48 10.001 10s-4.482 10-10 10C6.48 22 2 17.52 2 12S6.48 2 12 2M8.006 14.405l7.998-.04a.67.67 0 0 0 .663-.67.67.67 0 0 0-.67-.664l-7.999.04a.667.667 0 0 0 .008 1.334m-.006-5.742a1.334 1.334 0 1 0 0 2.665 1.334 1.334 0 0 0 0-2.665m8.004 0a1.334 1.334 0 1 0 0 2.665 1.334 1.334 0 0 0 0-2.665"
        })
    })) : i.match(/^o2-new/i) ? /* @__PURE__ */ a("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, t), {
        children: /* @__PURE__ */ a("path", {
            fill: l,
            d: "M22.001 12c0-5.52-4.482-10-10-10C6.48 2 2 6.48 2 12s4.48 10 10 10 10.001-4.48 10.001-10M7.625 9.481a.982.982 0 1 1 1.963-.001.982.982 0 0 1-1.963.001m6.696 0a.982.982 0 1 1 1.964 0 .982.982 0 0 1-1.964 0M8 13.5h8a.5.5 0 0 1 0 1H8a.5.5 0 0 1 0-1"
        })
    })) : i.match(/^o2/i) ? /* @__PURE__ */ a("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, t), {
        children: /* @__PURE__ */ a("path", {
            fill: l,
            d: "M22.001 12c0-5.52-4.482-10-10-10C6.48 2 2 6.48 2 12s4.48 10 10 10 10.001-4.48 10.001-10M7.625 9.481a.982.982 0 1 1 1.963-.001.982.982 0 0 1-1.963.001m6.696 0a.982.982 0 1 1 1.964 0 .982.982 0 0 1-1.964 0M8 13.5h8a.5.5 0 0 1 0 1H8a.5.5 0 0 1 0-1"
        })
    })) : /* @__PURE__ */ a("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, t), {
        children: /* @__PURE__ */ a("path", {
            fill: l,
            d: "M22 12.003C22 18.815 18.313 22 11.996 22S2 18.815 2 12.003C2 5.19 5.68 2 11.997 2s10.002 3.19 10.002 10.003M7.6 14.206l9.047-.007a.572.572 0 1 0 0-1.143l-9.048.007a.57.57 0 1 0 .001 1.143m1.366-3.68c.362 0 .663-.114.874-.328.204-.21.31-.5.31-.86 0-.733-.452-1.188-1.184-1.188-.728 0-1.184.455-1.184 1.189 0 .359.103.65.31.86.211.213.513.327.874.327m5.194-.328c.21.214.512.328.874.328.36 0 .662-.114.87-.328.208-.21.313-.5.313-.86 0-.733-.453-1.188-1.183-1.188s-1.184.455-1.184 1.189c0 .356.102.646.31.86"
        })
    }));
}, p = s;
export { p as default };
