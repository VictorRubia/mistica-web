"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return V;
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
const v = (_param)=>{
    var { color: c, size: e = 24 } = _param, r = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const l = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), a = c !== null && c !== void 0 ? c : l ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh, { skinName: t } = (0, _hooks.useTheme)();
    return t.match(/^o2-new/i) ? /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, r), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: a,
            d: "M21.554 6.062a.71.71 0 0 0-.806.16l-4.672 4.857V7.2c0-.66-.498-1.198-1.11-1.198H3.11c-.612 0-1.11.537-1.11 1.198v9.598c0 .66.498 1.198 1.11 1.198h11.856c.612 0 1.11-.538 1.11-1.198v-3.88l4.672 4.858a.71.71 0 0 0 .801.164.8.8 0 0 0 .45-.738V6.794a.78.78 0 0 0-.445-.732m-6.957 10.33H3.48V7.599h11.117zm2.736-4.397 3.192-3.317v6.634z"
        })
    })) : t.match(/^o2/i) ? /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, r), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: a,
            d: "M21.772 6.028a.37.37 0 0 0-.403.083l-5.308 5.457V6.57a.366.366 0 0 0-.36-.371H2.36c-.2 0-.361.166-.361.37v10.67c0 .205.161.37.36.37h8.895c.2 0 .36-.165.36-.37a.365.365 0 0 0-.36-.37H2.716V6.94H15.34v10.3c0 .204.16.37.36.37s.36-.166.36-.37v-5l5.31 5.458a.365.365 0 0 0 .402.083.38.38 0 0 0 .228-.351V6.38a.38.38 0 0 0-.228-.352m-.512 10.48-4.478-4.603L21.26 7.3zM13.48 18c.408 0 .74-.341.74-.76a.75.75 0 0 0-.74-.761.75.75 0 0 0-.74.76c0 .42.332.761.74.761"
        })
    })) : /* @__PURE__ */ (0, _jsxruntime.jsxs)("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, r), {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
                fill: a,
                d: "M6.993 9.437a.74.74 0 0 1-.731.73.71.71 0 0 1-.704-.73.74.74 0 0 1 .732-.732c.396 0 .71.328.703.732"
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
                fill: a,
                d: "M21.301 7.247a.46.46 0 0 1 .467.006h.003a.48.48 0 0 1 .229.415v8.707a.48.48 0 0 1-.241.421.4.4 0 0 1-.226.062.44.44 0 0 1-.241-.068l-3.968-2.284v2.136c0 1.451-1.148 2.63-2.561 2.63H4.56C3.148 19.273 2 18.094 2 16.643V7.358c0-1.451 1.148-2.63 2.561-2.63H14.76c1.413 0 2.56 1.179 2.56 2.63v2.18zm-6.538 11.41c1.079 0 1.958-.904 1.958-2.012V7.358c0-1.108-.88-2.012-1.958-2.012H4.56c-1.079 0-1.958.904-1.958 2.012v9.287c0 1.108.88 2.012 1.958 2.012zm2.57-4.854 4.065 2.34v-8.24l-4.065 2.34z"
            })
        ]
    }));
}, V = v;
