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
import { useTheme as n } from "../../hooks.js";
import { useIsInverseOrMediaVariant as h } from "../../theme-variant-context.js";
import { vars as o } from "../../skins/skin-contract.css-mistica.js";
const m = (_param)=>{
    var { color: r, size: e = 24 } = _param, i = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const c = h(), t = r !== null && r !== void 0 ? r : c ? o.colors.inverse : o.colors.neutralHigh, { skinName: l } = n();
    return l.match(/^vivo-new/i) ? /* @__PURE__ */ a("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: /* @__PURE__ */ a("path", {
            fill: t,
            d: "M12 2c5.52 0 10.001 4.48 10.001 10s-4.482 10-10 10C6.48 22 2 17.52 2 12S6.48 2 12 2m4.003 6.533a1.334 1.334 0 1 0 0 2.669 1.334 1.334 0 0 0 0-2.669m-8.004 0a1.334 1.334 0 1 0 0 2.669 1.334 1.334 0 0 0 0-2.669m.997 6.33s.767-1.121 3.008-1.113c2.225.008 3.006 1.12 3.006 1.12a.668.668 0 0 0 1.125-.714s-1.02-1.728-4.125-1.74c-3.149-.012-4.15 1.748-4.15 1.748a.668.668 0 0 0 1.136.698"
        })
    })) : l.match(/^blau/i) ? /* @__PURE__ */ a("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: /* @__PURE__ */ a("path", {
            fill: t,
            d: "M12 2c5.52 0 10.001 4.48 10.001 10s-4.482 10-10 10C6.48 22 2 17.52 2 12S6.48 2 12 2m4.003 6.533a1.334 1.334 0 1 0 0 2.669 1.334 1.334 0 0 0 0-2.669m-8.004 0a1.334 1.334 0 1 0 0 2.669 1.334 1.334 0 0 0 0-2.669m.997 6.33s.767-1.121 3.008-1.113c2.225.008 3.006 1.12 3.006 1.12a.668.668 0 0 0 1.125-.714s-1.02-1.728-4.125-1.74c-3.149-.012-4.15 1.748-4.15 1.748a.668.668 0 0 0 1.136.698"
        })
    })) : l.match(/^o2-new/i) ? /* @__PURE__ */ a("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: /* @__PURE__ */ a("path", {
            fill: t,
            d: "M12 2c5.52 0 10.001 4.48 10.001 10s-4.482 10-10 10C6.48 22 2 17.52 2 12S6.48 2 12 2m-.035 10.5c-1.572 0-3.018.664-3.961 1.825a.444.444 0 1 0 .69.564c.76-.935 1.981-1.496 3.267-1.496 1.282 0 2.503.557 3.264 1.49a.444.444 0 0 0 .629.063.444.444 0 0 0 .064-.628c-.943-1.157-2.386-1.818-3.953-1.818m-3.358-4a.982.982 0 1 0-.001 1.963.982.982 0 0 0 .001-1.963m6.697 0a.982.982 0 1 0-.002 1.963.982.982 0 0 0 .002-1.963"
        })
    })) : l.match(/^o2/i) ? /* @__PURE__ */ a("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: /* @__PURE__ */ a("path", {
            fill: t,
            d: "M12 2c5.52 0 10.001 4.48 10.001 10s-4.482 10-10 10C6.48 22 2 17.52 2 12S6.48 2 12 2m-.035 10.5c-1.572 0-3.018.664-3.961 1.825a.444.444 0 1 0 .69.564c.76-.935 1.981-1.496 3.267-1.496 1.282 0 2.503.557 3.264 1.49a.444.444 0 0 0 .629.063.444.444 0 0 0 .064-.628c-.943-1.157-2.386-1.818-3.953-1.818m-3.358-4a.982.982 0 1 0-.001 1.963.982.982 0 0 0 .001-1.963m6.697 0a.982.982 0 1 0-.002 1.963.982.982 0 0 0 .002-1.963"
        })
    })) : /* @__PURE__ */ a("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: /* @__PURE__ */ a("path", {
            fill: t,
            d: "M22 12.003C22 18.815 18.314 22 11.997 22S2 18.815 2 12.003C2 5.19 5.68 2 11.997 2S22 5.19 22 12.003M8.035 14.74s1.46-1.108 4.067-1.019c1.233.042 2.357.096 4.086 1.01a.573.573 0 0 0 .534-1.011c-1.939-1.025-3.199-1.094-4.581-1.14-3.09-.107-4.807 1.258-4.807 1.258a.571.571 0 0 0 .7.902m6.125-4.543c.21.214.512.328.874.328.36 0 .662-.114.87-.328.208-.21.314-.5.314-.859 0-.734-.453-1.19-1.184-1.19-.729 0-1.184.456-1.184 1.19 0 .356.103.646.31.86m-5.194.328c.362 0 .663-.114.874-.328.205-.21.31-.5.31-.859 0-.734-.452-1.19-1.184-1.19-.728 0-1.183.456-1.183 1.19 0 .359.102.65.31.86.21.213.512.327.873.327"
        })
    }));
}, p = m;
export { p as default };
