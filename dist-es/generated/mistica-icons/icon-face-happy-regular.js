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
import { useTheme as s } from "../../hooks.js";
import { useIsInverseOrMediaVariant as l } from "../../theme-variant-context.js";
import { vars as i } from "../../skins/skin-contract.css-mistica.js";
const m = (_param)=>{
    var { color: o, size: e = 24 } = _param, c = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const n = l(), t = o !== null && o !== void 0 ? o : n ? i.colors.inverse : i.colors.neutralHigh, { skinName: r } = s();
    return r.match(/^vivo-new/i) ? /* @__PURE__ */ a("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, c), {
        children: /* @__PURE__ */ a("path", {
            fill: t,
            d: "M12 2c5.52 0 10.001 4.48 10.001 10s-4.48 10-10 10S2 17.52 2 12 6.482 2 12 2m0 1.336c-4.782 0-8.664 3.881-8.664 8.664s3.882 8.664 8.665 8.664 8.664-3.881 8.664-8.664S16.783 3.336 12 3.336m-4.01 5.34a1.337 1.337 0 1 1-.002 2.675 1.337 1.337 0 0 1 .003-2.675m8.021 0a1.337 1.337 0 1 1-.001 2.674 1.337 1.337 0 0 1 .001-2.674m-8.144 5.43a.667.667 0 1 1 1.258-.447s.595 1.476 2.888 1.476c2.297 0 2.858-1.463 2.858-1.463a.668.668 0 1 1 1.268.423s-.721 2.376-4.126 2.376c-3.376 0-4.146-2.365-4.146-2.365"
        })
    })) : r.match(/^blau/i) ? /* @__PURE__ */ a("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, c), {
        children: /* @__PURE__ */ a("path", {
            fill: t,
            d: "M12 2c5.52 0 10.001 4.48 10.001 10s-4.48 10-10 10S2 17.52 2 12 6.482 2 12 2m0 1.336c-4.782 0-8.664 3.881-8.664 8.664s3.882 8.664 8.665 8.664 8.664-3.881 8.664-8.664S16.783 3.336 12 3.336m-4.01 5.34a1.337 1.337 0 1 1-.002 2.675 1.337 1.337 0 0 1 .003-2.675m8.021 0a1.337 1.337 0 1 1-.001 2.674 1.337 1.337 0 0 1 .001-2.674m-8.144 5.43a.667.667 0 1 1 1.258-.447s.595 1.476 2.888 1.476c2.297 0 2.858-1.463 2.858-1.463a.668.668 0 1 1 1.268.423s-.721 2.376-4.126 2.376c-3.376 0-4.146-2.365-4.146-2.365"
        })
    })) : r.match(/^o2-new/i) ? /* @__PURE__ */ a("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, c), {
        children: /* @__PURE__ */ a("path", {
            fill: t,
            d: "M12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10m0-18.75c-4.825 0-8.75 3.925-8.75 8.75s3.925 8.75 8.75 8.75 8.75-3.925 8.75-8.75S16.825 3.25 12 3.25m4.057 11.65a.624.624 0 1 0-.968-.79c-.728.897-1.9 1.43-3.128 1.43s-2.397-.533-3.125-1.426a.624.624 0 1 0-.968.79c.978 1.196 2.471 1.882 4.093 1.882 1.625.007 3.118-.682 4.096-1.886m-7.45-6.65a.982.982 0 1 0-.001 1.963.982.982 0 0 0 .001-1.963m6.697 0a.982.982 0 1 0-.002 1.963.982.982 0 0 0 .002-1.963"
        })
    })) : r.match(/^o2/i) ? /* @__PURE__ */ a("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, c), {
        children: /* @__PURE__ */ a("path", {
            fill: t,
            d: "M12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10m0-18.75c-4.825 0-8.75 3.925-8.75 8.75s3.925 8.75 8.75 8.75 8.75-3.925 8.75-8.75S16.825 3.25 12 3.25m4.057 11.65a.624.624 0 1 0-.968-.79c-.728.897-1.9 1.43-3.128 1.43s-2.397-.533-3.125-1.426a.624.624 0 1 0-.968.79c.978 1.196 2.471 1.882 4.093 1.882 1.625.007 3.118-.682 4.096-1.886m-7.45-6.65a.982.982 0 1 0-.001 1.963.982.982 0 0 0 .001-1.963m6.697 0a.982.982 0 1 0-.002 1.963.982.982 0 0 0 .002-1.963"
        })
    })) : /* @__PURE__ */ a("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, c), {
        children: /* @__PURE__ */ a("path", {
            fill: t,
            d: "M21.841 12c0-6.705-3.627-9.845-9.846-9.845-6.218 0-9.84 3.14-9.84 9.846s3.622 9.84 9.84 9.84c6.219 0 9.846-3.134 9.846-9.84m-9.846 8.612c-5.792 0-8.61-2.818-8.61-8.611 0-5.796 2.818-8.613 8.61-8.613 5.799 0 8.617 2.817 8.617 8.613 0 5.793-2.821 8.61-8.617 8.61m5.16-6.844a.615.615 0 0 1 .913.824c-.092.1-2.269 2.473-6.003 2.515h-.021q-.039.003-.133.003c-.736 0-3.893-.143-5.983-2.482a.613.613 0 1 1 .916-.818c1.918 2.145 5.046 2.074 5.183 2.07h.005c3.143-.038 5.04-2.025 5.12-2.109zm-8.143-3.22c-.356 0-.652-.113-.86-.323-.204-.207-.305-.493-.305-.846 0-.723.448-1.17 1.165-1.17.72 0 1.165.447 1.165 1.17q-.001.535-.305.846c-.207.207-.504.322-.86.322m5.112-.323c.207.21.504.322.86.322s.653-.115.857-.322c.202-.207.306-.493.306-.846 0-.723-.446-1.17-1.166-1.17-.717 0-1.165.447-1.165 1.17 0 .353.104.639.308.846"
        })
    }));
}, f = m;
export { f as default };
