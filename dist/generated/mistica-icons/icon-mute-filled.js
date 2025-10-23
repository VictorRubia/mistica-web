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
const m = (_param)=>{
    var { color: i, size: e = 24 } = _param, l = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const n = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), o = i !== null && i !== void 0 ? i : n ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh, { skinName: t } = (0, _hooks.useTheme)();
    return t.match(/^o2-new/i) ? /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, l), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: o,
            d: "m15.696 14.987 5.666 5.89a.566.566 0 0 1 0 .78.516.516 0 0 1-.75 0L2.627 2.942a.566.566 0 0 1 0-.78.514.514 0 0 1 .75 0L7.754 6.72l7.413-4.486a.34.34 0 0 1 .352 0 .37.37 0 0 1 .176.319zm0 3.02L5.917 7.832l-.365.226H3a.36.36 0 0 0-.352.366v7.338a.36.36 0 0 0 .352.366h2.55l9.617 5.82a.34.34 0 0 0 .352.005.37.37 0 0 0 .176-.32z"
        })
    })) : t.match(/^o2/i) ? /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, l), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: o,
            d: "m15.696 14.987 5.666 5.89a.566.566 0 0 1 0 .78.516.516 0 0 1-.75 0L2.627 2.942a.566.566 0 0 1 0-.78.514.514 0 0 1 .75 0L7.754 6.72l7.413-4.486a.34.34 0 0 1 .352 0 .37.37 0 0 1 .176.319zm0 3.02L5.917 7.832l-.365.226H3a.36.36 0 0 0-.352.366v7.338a.36.36 0 0 0 .352.366h2.55l9.617 5.82a.34.34 0 0 0 .352.005.37.37 0 0 0 .176-.32z"
        })
    })) : /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, l), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: o,
            d: "M12.448 4.603a.807.807 0 0 1 1.194.713v14.117a.816.816 0 0 1-.803.817.8.8 0 0 1-.413-.115L5.24 16.058H3.045a.8.8 0 0 1-.795-.806V9.5c0-.443.357-.805.795-.805H5.24zM22.616 9.758l-2.582 2.617 2.582 2.617a.556.556 0 0 1 0 .78.533.533 0 0 1-.77 0l-2.583-2.617-2.583 2.617a.533.533 0 0 1-.77 0 .556.556 0 0 1 0-.78l2.583-2.617-2.583-2.617a.556.556 0 0 1 0-.78.54.54 0 0 1 .77 0l2.583 2.616 2.583-2.616a.54.54 0 0 1 .77 0 .556.556 0 0 1 0 .78"
        })
    }));
}, p = m;
