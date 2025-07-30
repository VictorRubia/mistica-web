"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return f;
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
const m = (_param)=>{
    var { color: l, size: e = 24 } = _param, i = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const n = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), t = l !== null && l !== void 0 ? l : n ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh, { skinName: r } = (0, _hooks.useTheme)();
    return r.match(/^vivo-new/i) ? /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: t,
            d: "M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m4.005 6.54a1.335 1.335 0 1 0 0 2.67 1.335 1.335 0 0 0 0-2.67m-8.01 0a1.334 1.334 0 1 0 0 2.668 1.334 1.334 0 0 0 0-2.669m9.565 4.571a.67.67 0 0 0-.667-.686H7.107a.67.67 0 0 0-.666.674s.043 5.468 5.519 5.439c5.46-.03 5.6-5.427 5.6-5.427"
        })
    })) : r.match(/^blau/i) ? /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: t,
            d: "M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m4.005 6.54a1.335 1.335 0 1 0 0 2.67 1.335 1.335 0 0 0 0-2.67m-8.01 0a1.334 1.334 0 1 0 0 2.668 1.334 1.334 0 0 0 0-2.669m9.565 4.571a.67.67 0 0 0-.667-.686H7.107a.67.67 0 0 0-.666.674s.043 5.468 5.519 5.439c5.46-.03 5.6-5.427 5.6-5.427"
        })
    })) : r.match(/^o2-new/i) ? /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: t,
            d: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10m-4.63.627c.126.13.195.304.19.484 0 0-.14 5.398-5.6 5.427-5.476.03-5.52-5.44-5.52-5.44a.67.67 0 0 1 .667-.673h9.786c.18 0 .352.073.478.202M8.608 8.25a.982.982 0 1 1 .001 1.963.982.982 0 0 1 0-1.963m6.697 0a.982.982 0 1 1 0 1.963.982.982 0 0 1 0-1.963"
        })
    })) : r.match(/^o2/i) ? /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: t,
            d: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10m-4.63.627c.126.13.195.304.19.484 0 0-.14 5.398-5.6 5.427-5.476.03-5.52-5.44-5.52-5.44a.67.67 0 0 1 .667-.673h9.786c.18 0 .352.073.478.202M8.608 8.25a.982.982 0 1 1 .001 1.963.982.982 0 0 1 0-1.963m6.697 0a.982.982 0 1 1 0 1.963.982.982 0 0 1 0-1.963"
        })
    })) : /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: t,
            d: "M22 12.003C22 18.815 18.314 22 11.997 22S2 18.815 2 12.003C2 5.19 5.68 2 11.997 2S22 5.19 22 12.003m-3.553.326a.57.57 0 0 0-.571-.587H6.127a.573.573 0 0 0-.571.576s.03 2.968 2.23 4.74c.937.754 2.267 1.303 4.166 1.294 1.894-.01 3.23-.564 4.179-1.318 2.23-1.772 2.316-4.704 2.316-4.704m-9.48-1.803c.36 0 .662-.114.873-.328.205-.21.31-.5.31-.859 0-.734-.452-1.19-1.184-1.19-.728 0-1.183.456-1.183 1.19 0 .359.102.65.31.86.21.213.512.327.873.327m5.193-.328c.21.214.512.328.874.328.36 0 .662-.114.87-.328.208-.21.314-.5.314-.859 0-.734-.453-1.19-1.184-1.19-.729 0-1.184.456-1.184 1.19 0 .356.103.646.31.86"
        })
    }));
}, f = m;
