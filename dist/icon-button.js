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
    IconButton: function() {
        return re;
    },
    InternalIconButton: function() {
        return Z;
    },
    InternalToggleIconButton: function() {
        return _;
    },
    RawIconButton: function() {
        return h;
    },
    ToggleIconButton: function() {
        return se;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _touchable = require("./touchable.js");
const _iconbuttoncssmistica = require("./icon-button.css-mistica.js");
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _spinner = /*#__PURE__*/ _interop_require_default(require("./spinner.js"));
const _themevariantcontext = require("./theme-variant-context.js");
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
const h = /*#__PURE__*/ _react.forwardRef((_param, N)=>{
    var { disabled: e, trackingEvent: o, role: p, dataAttributes: I, type: r = "neutral", backgroundType: S = "transparent", hasOverlay: v = !0, small: R, Icon: d, bleedLeft: a, bleedRight: m, bleedY: c, showSpinner: l } = _param, u = _object_without_properties(_param, [
        "disabled",
        "trackingEvent",
        "role",
        "dataAttributes",
        "type",
        "backgroundType",
        "hasOverlay",
        "small",
        "Icon",
        "bleedLeft",
        "bleedRight",
        "bleedY",
        "showSpinner"
    ]);
    const B = (0, _themevariantcontext.useThemeVariant)(), [y, T] = _react.useState(!1), t = l || y, [f, b] = _react.useState(!!t);
    _react.useEffect(()=>{
        t && !f && b(!0);
    }, [
        t,
        f
    ]);
    const i = R ? "small" : "default", z = B === "media" ? `${r}-media` : `${r}-${S}-${B}`, x = {
        disabled: e || t,
        ref: N,
        trackingEvent: o,
        role: p,
        dataAttributes: _object_spread({
            "component-name": "IconButton",
            testid: "IconButton"
        }, I),
        className: (0, _classnames.default)(_iconbuttoncssmistica.buttonContainer[i], _iconbuttoncssmistica.iconButtonTokens[z], _iconbuttoncssmistica.minimumInteractiveArea, {
            [_iconbuttoncssmistica.disabled]: e,
            [_iconbuttoncssmistica.overlayContainer]: !e && !t,
            [_iconbuttoncssmistica.bleedLeft[i]]: a,
            [_iconbuttoncssmistica.bleedRight[i]]: m,
            [_iconbuttoncssmistica.bleedY[i]]: c
        }),
        resetMargin: !a && !m && !c
    }, A = /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
        className: (0, _classnames.default)(_iconbuttoncssmistica.iconContainer[i], {
            [_iconbuttoncssmistica.isLoading]: t
        }),
        children: [
            v && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                className: _iconbuttoncssmistica.overlay
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                "aria-hidden": t ? !0 : void 0,
                className: _iconbuttoncssmistica.icon,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(d, {
                    size: _iconbuttoncssmistica.iconSize[i],
                    color: "currentColor"
                })
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                "aria-hidden": t ? void 0 : !0,
                className: _iconbuttoncssmistica.spinner,
                onTransitionEnd: ()=>{
                    t !== f && b(t);
                },
                children: f && /* @__PURE__ */ (0, _jsxruntime.jsx)(_spinner.default, {
                    size: _iconbuttoncssmistica.iconSize[i],
                    color: "currentColor",
                    delay: "0s"
                })
            })
        ]
    });
    if (u.onPress) {
        const O = u.onPress;
        u.onPress = (j)=>{
            const w = O(j);
            w && (T(!0), w.finally(()=>T(!1)));
        };
    }
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_touchable.BaseTouchable, _object_spread_props(_object_spread({}, x, u), {
        maybe: !0,
        children: A
    }));
}), Z = /*#__PURE__*/ _react.forwardRef((e, o)=>/* @__PURE__ */ (0, _jsxruntime.jsx)(h, _object_spread({
        ref: o
    }, e))), re = /*#__PURE__*/ _react.forwardRef((e, o)=>/* @__PURE__ */ (0, _jsxruntime.jsx)(Z, _object_spread({
        ref: o
    }, e))), _ = /*#__PURE__*/ _react.forwardRef((_param, R)=>{
    var { checked: e, defaultChecked: o, checkedProps: p, uncheckedProps: I, onChange: r, dataAttributes: S } = _param, v = _object_without_properties(_param, [
        "checked",
        "defaultChecked",
        "checkedProps",
        "uncheckedProps",
        "onChange",
        "dataAttributes"
    ]);
    const [d, a] = _react.useState(!!o), m = ()=>{
        if (e === void 0) {
            const c = r == null ? void 0 : r(!d);
            if (c) return c.then(()=>a((l)=>!l)).catch(()=>{});
            a((l)=>!l);
        } else return r == null ? void 0 : r(!e);
    };
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(h, _object_spread_props(_object_spread({
        ref: R
    }, v, (e !== null && e !== void 0 ? e : d) ? p : I), {
        dataAttributes: _object_spread({
            "component-name": "ToggleIconButton",
            testid: "ToggleIconButton"
        }, S),
        onPress: m
    }));
}), se = /*#__PURE__*/ _react.forwardRef((e, o)=>/* @__PURE__ */ (0, _jsxruntime.jsx)(_, _object_spread({
        ref: o
    }, e)));
