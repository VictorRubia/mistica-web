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
const s = (_param)=>{
    var { color: r, size: e = 24 } = _param, i = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const l = h(), t = r !== null && r !== void 0 ? r : l ? o.colors.inverse : o.colors.neutralHigh, { skinName: c } = n();
    return c.match(/^vivo-new/i) ? /* @__PURE__ */ a("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: /* @__PURE__ */ a("path", {
            fill: t,
            d: "M12 2c5.519 0 10 4.481 10 10s-4.481 10-10 10S2 17.52 2 12 6.481 2 12 2M7.99 8.677a1.337 1.337 0 1 0 .001 2.674 1.337 1.337 0 0 0 0-2.674m8.02 0a1.337 1.337 0 1 0 .001 2.671 1.337 1.337 0 0 0-.001-2.67m-8.144 5.429s.771 2.365 4.146 2.365c3.406 0 4.126-2.377 4.126-2.377a.668.668 0 1 0-1.267-.423s-.562 1.464-2.859 1.464c-2.293 0-2.887-1.476-2.887-1.476a.67.67 0 0 0-1.259.447"
        })
    })) : c.match(/^blau/i) ? /* @__PURE__ */ a("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: /* @__PURE__ */ a("path", {
            fill: t,
            d: "M12 2c5.519 0 10 4.481 10 10s-4.481 10-10 10S2 17.52 2 12 6.481 2 12 2M7.99 8.677a1.337 1.337 0 1 0 .001 2.674 1.337 1.337 0 0 0 0-2.674m8.02 0a1.337 1.337 0 1 0 .001 2.671 1.337 1.337 0 0 0-.001-2.67m-8.144 5.43s.771 2.364 4.146 2.364c3.406 0 4.126-2.377 4.126-2.377a.668.668 0 1 0-1.267-.423s-.562 1.464-2.859 1.464c-2.293 0-2.887-1.476-2.887-1.476a.669.669 0 0 0-1.259.447"
        })
    })) : c.match(/^o2-new/i) ? /* @__PURE__ */ a("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: /* @__PURE__ */ a("path", {
            fill: t,
            d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2M8.607 8.25a.982.982 0 1 1 .001 1.963.982.982 0 0 1 0-1.963m7.31 6.54c-.942 1.16-2.388 1.824-3.96 1.824-1.568 0-3.01-.66-3.953-1.818a.444.444 0 0 1 .064-.628.444.444 0 0 1 .628.064c.761.932 1.983 1.49 3.265 1.49 1.285 0 2.507-.561 3.268-1.497a.444.444 0 0 1 .628-.064c.19.157.218.435.06.628m-.613-4.576a.982.982 0 1 1-.002-1.963.982.982 0 0 1 .002 1.963"
        })
    })) : c.match(/^o2/i) ? /* @__PURE__ */ a("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: /* @__PURE__ */ a("path", {
            fill: t,
            d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2M8.607 8.25a.982.982 0 1 1 .001 1.963.982.982 0 0 1 0-1.963m7.31 6.54c-.942 1.16-2.388 1.824-3.96 1.824-1.568 0-3.01-.66-3.953-1.818a.444.444 0 0 1 .064-.628.444.444 0 0 1 .628.064c.761.932 1.983 1.49 3.265 1.49 1.285 0 2.507-.561 3.268-1.497a.444.444 0 0 1 .628-.064c.19.157.218.435.06.628m-.613-4.576a.982.982 0 1 1-.002-1.963.982.982 0 0 1 .002 1.963"
        })
    })) : /* @__PURE__ */ a("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: /* @__PURE__ */ a("path", {
            fill: t,
            d: "M21.841 12.001c0-6.706-3.627-9.846-9.846-9.846-6.218 0-9.84 3.14-9.84 9.846s3.622 9.84 9.84 9.84c6.219 0 9.846-3.134 9.846-9.84m-4.689 1.77.003-.003a.613.613 0 1 1 .913.821c-.09.101-2.269 2.474-6.003 2.516h-.021l-.133.002c-.736 0-3.893-.142-5.983-2.481a.613.613 0 1 1 .916-.818c1.918 2.146 5.044 2.073 5.183 2.07h.005c3.143-.033 5.04-2.022 5.12-2.107m-8.14-3.224c-.356 0-.652-.115-.86-.322-.201-.207-.305-.493-.305-.846 0-.723.445-1.17 1.165-1.17.717 0 1.165.447 1.165 1.17 0 .353-.1.639-.305.846-.207.21-.504.322-.86.322m6.832-.325c-.207.213-.504.325-.86.325s-.652-.115-.857-.325c-.205-.207-.308-.493-.308-.846 0-.722.445-1.17 1.165-1.17.717 0 1.165.448 1.165 1.17 0 .353-.103.639-.305.846"
        })
    }));
}, f = s;
export { f as default };
