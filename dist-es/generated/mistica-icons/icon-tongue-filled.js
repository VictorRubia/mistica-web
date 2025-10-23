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
import { useIsInverseOrMediaVariant as t } from "../../theme-variant-context.js";
import { vars as e } from "../../skins/skin-contract.css-mistica.js";
const i = (_param)=>{
    var { color: l, size: o = 24 } = _param, a = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const c = t(), n = l !== null && l !== void 0 ? l : c ? e.colors.inverse : e.colors.neutralHigh;
    return /* @__PURE__ */ r("svg", _object_spread_props(_object_spread({
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, a), {
        children: /* @__PURE__ */ r("path", {
            fill: n,
            d: "M21.843 4.394a.57.57 0 0 1-.09.347l-.005.011a9 9 0 0 1-.723.925q-.076.082-.157.16-.054.052-.106.106-.277.287-.577.549-.178.147-.364.285c-.183.14-.37.278-.566.404q-.237.15-.482.288-.059.032-.114.068-.055.035-.113.067c.008.014.008.022.008.039.065.801.098 1.68.098 2.706 0 5.174-.865 8.837-4.77 9.672-.24.05-.496.084-.759.115l-.049.009q-.035.007-.074.01-.47.044-.986.045c-2.065 0-3.516-.551-4.521-1.557-1.678-1.675-2.118-4.6-2.118-8.294 0-1.025.031-1.924.098-2.74a4 4 0 0 1-.246-.147q-.072-.046-.146-.09-.066-.041-.133-.08-.15-.087-.293-.181c-.16-.106-.31-.223-.46-.34L4.09 6.69c-.118-.089-.236-.177-.347-.274-.185-.162-.356-.339-.527-.515l-.1-.099q-.085-.08-.163-.167a9 9 0 0 1-.703-.9.61.61 0 0 1 .04-.703.6.6 0 0 1 .142-.14.62.62 0 0 1 .72.04c.05.039.098.078.137.131a6 6 0 0 0 .423.55 7.64 7.64 0 0 0 2.675 2.089c1.513.717 3.404 1.081 5.622 1.081 2.77 0 4.989-.577 6.658-1.692a7.4 7.4 0 0 0 2.054-2.02.4.4 0 0 1 .067-.067l.025-.022a.62.62 0 0 1 .765-.081q.106.07.173.17c.068.096.09.208.093.323m-9.801 12.235a.61.61 0 0 0 .613-.608l-.036-7.05-.252.012a6 6 0 0 1-.356.013q-.187-.002-.363-.015a7 7 0 0 0-.264-.013l.039 7.059a.61.61 0 0 0 .616.602z"
        })
    }));
}, q = i;
export { q as default };
