"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return p;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _hooks = require("../../hooks.js");
const _themevariantcontext = require("../../theme-variant-context.js");
const _skincontractcssmistica = require("../../skins/skin-contract.css-mistica.js");
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
const s = (_param)=>{
    var { color: h, size: l = 24 } = _param, e = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const i = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), t = h !== null && h !== void 0 ? h : i ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh, { skinName: o } = (0, _hooks.useTheme)();
    return o.match(/^o2-new/i) ? /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: l,
        height: l,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, e), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: t,
            d: "m15.998 14.971 5.79 5.79a.716.716 0 0 1 0 1.02.7.7 0 0 1-.513.214.72.72 0 0 1-.512-.214l-4.756-4.757v4.245a.73.73 0 0 1-.73.731.74.74 0 0 1-.368-.098l-9.466-5.539h-2.35a.727.727 0 0 1-.727-.726V8.73c0-.4.326-.727.726-.727h2.546a.727.727 0 0 1 0 1.453h-1.82v5.455h1.82c.13 0 .256.033.368.098l8.54 4.999v-4.431L2.213 3.241A.728.728 0 0 1 3.24 2.213L7.7 6.677l7.2-4.213a.73.73 0 0 1 1.098.628zM14.546 4.364 8.77 7.743l5.776 5.776z"
        })
    })) : o.match(/^o2/i) ? /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: l,
        height: l,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, e), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: t,
            d: "M15.53 15.182V2.372a.38.38 0 0 0-.175-.322.34.34 0 0 0-.353 0l-7.51 4.59q-.016.012-.03.026-.007.01-.02.02L3.082 2.111a.335.335 0 0 0-.497 0 .38.38 0 0 0 0 .522l12.242 12.853v5.5l-9.171-5.6a.33.33 0 0 0-.177-.052H3.184V8.668h2.294a.4.4 0 0 0 .177-.047l.555-.337a.387.387 0 0 0 .131-.507.35.35 0 0 0-.483-.138l-.47.285H2.832a.36.36 0 0 0-.352.37v7.405c0 .204.158.37.352.37h2.552l9.618 5.874a.34.34 0 0 0 .352.005.38.38 0 0 0 .177-.323v-5.404l3.454 3.627a.34.34 0 0 0 .249.109c.09 0 .18-.038.248-.11a.376.376 0 0 0 0-.52zM7.945 7.218l6.882-4.201v11.426zM20.824 22c.387 0 .704-.332.704-.74 0-.407-.316-.74-.705-.74s-.704.333-.704.74c0 .408.316.74.704.74"
        })
    })) : /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: l,
        height: l,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, e), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: t,
            d: "M12.76 20.167c.09.052.192.08.292.08l.003.003a.569.569 0 0 0 .563-.568V5.066a.56.56 0 0 0-.277-.487.56.56 0 0 0-.561-.008L5.173 8.839H2.805a.557.557 0 0 0-.555.557v5.954c0 .306.25.557.555.557h2.368zM2.805 15.35V9.4H5.17a.55.55 0 0 0 .273-.073l7.603-4.268h.009q.006.005.005.008v14.616c0 .003 0 .009-.005.009q-.005.005-.009-.003h-.005l-7.596-4.265a.55.55 0 0 0-.272-.073zM22.177 9.584l-2.781 2.788h.005l2.782 2.788a.277.277 0 1 1-.394.393l-2.782-2.788-2.782 2.788a.28.28 0 0 1-.197.08.277.277 0 0 1-.197-.473l2.782-2.788-2.782-2.788a.277.277 0 0 1 .392-.392l2.781 2.788 2.782-2.788a.277.277 0 0 1 .391.392"
        })
    }));
}, p = s;
