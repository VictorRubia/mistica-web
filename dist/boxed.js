"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Boxed: function() {
        return K;
    },
    InternalBoxed: function() {
        return P;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _themevariantcontext = require("./theme-variant-context.js");
const _dom = require("./utils/dom.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _boxedcssmistica = require("./boxed.css-mistica.js");
const _css = require("./utils/css.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
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
const M = (r, e)=>r || e ? _boxedcssmistica.noBorder : _boxedcssmistica.boxBorder, s = (r)=>typeof r == "number" ? `${r}px` : r !== null && r !== void 0 ? r : "initial", t = (r, e)=>{
    if (typeof e == "number" || typeof e == "string" || typeof e > "u") return {
        [_boxedcssmistica.vars[r]]: s(e)
    };
    const i = {
        [_boxedcssmistica.vars.mobile[r]]: s(e.mobile),
        [_boxedcssmistica.vars.desktop[r]]: s(e.desktop)
    };
    return e.tablet && (i[_boxedcssmistica.vars.tablet[r]] = s(e.tablet)), i;
}, P = /*#__PURE__*/ _react.forwardRef((param, R)=>{
    let { children: r, isInverse: e = !1, className: i, role: c, dataAttributes: p, "aria-label": y, "aria-labelledby": u, width: x, maxWidth: g, minWidth: h, height: k, minHeight: B, borderRadius: I = _skincontractcssmistica.vars.borderRadii.container, background: f, desktopOnly: C, variant: a, overflow: O } = param;
    const l = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), d = e || a === "inverse" || a === "media";
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({
        ref: R,
        style: _object_spread_props(_object_spread({}, (0, _css.applyCssVars)(_object_spread_props(_object_spread({}, t("width", x), t("maxWidth", g), t("minWidth", h), t("height", k), t("minHeight", B)), {
            [_boxedcssmistica.vars.background]: (f !== null && f !== void 0 ? f : d) ? l ? _skincontractcssmistica.vars.colors.backgroundContainerBrandOverInverse : _skincontractcssmistica.vars.colors.backgroundContainerBrand : _skincontractcssmistica.vars.colors.backgroundContainer,
            [_boxedcssmistica.vars.borderRadius]: I
        }))), {
            background: f
        }),
        className: (0, _classnames.default)(i, _boxedcssmistica.boxed, M(l, d), {
            [_boxedcssmistica.desktopOnly]: C,
            [_boxedcssmistica.overflowHidden]: O !== "visible"
        }),
        role: c,
        "aria-label": y,
        "aria-labelledby": u
    }, (0, _dom.getPrefixedDataAttributes)(p)), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_themevariantcontext.ThemeVariant, {
            variant: a !== null && a !== void 0 ? a : d ? "inverse" : void 0,
            children: r
        })
    }));
}), K = /*#__PURE__*/ _react.forwardRef((r, e)=>/* @__PURE__ */ (0, _jsxruntime.jsx)(P, _object_spread_props(_object_spread({}, r), {
        ref: e
    })));
