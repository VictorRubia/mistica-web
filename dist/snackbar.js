"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Be;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _touchable = /*#__PURE__*/ _interop_require_wildcard(require("./touchable.js"));
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _webviewbridge = require("@tef-novum/webview-bridge");
const _hooks = require("./hooks.js");
const _text = require("./text.js");
const _snackbarcssmistica = require("./snackbar.css-mistica.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _dom = require("./utils/dom.js");
const _portal = require("./portal.js");
const _iconcloseregular = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-close-regular.js"));
const _texttokens = require("./text-tokens.js");
const _snackbarnative = require("./snackbar-native.js");
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
const ne = 5e3, se = 1e4, ce = /*#__PURE__*/ _react.forwardRef((param, v)=>{
    let { message: i, buttonText: t, buttonAccessibilityLabel: l, closeButtonLabel: T, duration: o, onClose: n, type: s, withDismiss: u = !1, dataAttributes: S } = param;
    const { texts: m, t: f } = (0, _hooks.useTheme)(), [c, p] = _react.useState(!1), { width: k, ref: _ } = (0, _hooks.useElementDimensions)(), { isDesktopOrBigger: w } = (0, _hooks.useScreenSize)(), d = k > (w ? 160 : 128), E = _react.useRef(null), B = o === "PERSISTENT" && !t || u, O = t ? se : ne, h = _react.useRef(n);
    _react.useEffect(()=>{
        h.current = n;
    }, [
        n
    ]);
    const a = _react.useCallback((g)=>{
        p(!1), setTimeout(()=>{
            var I;
            (I = h.current) == null || I.call(h, g);
        }, process.env.NODE_ENV === "test" ? 0 : _snackbarcssmistica.TRANSITION_TIME_IN_MS);
    }, []);
    return _react.useImperativeHandle(v, ()=>_object_spread_props(_object_spread({}, E), {
            close: a
        }), [
        a
    ]), _react.useEffect(()=>{
        const g = setTimeout(()=>{
            p(!0);
        }, 50), I = o !== "PERSISTENT" ? setTimeout(()=>a({
                action: "TIMEOUT"
            }), O) : void 0;
        return ()=>{
            clearTimeout(g), clearTimeout(I);
        };
    }, [
        a,
        o,
        O
    ]), /* @__PURE__ */ (0, _jsxruntime.jsx)(_portal.Portal, {
        className: _snackbarcssmistica.snackbarContainer,
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
            ref: E,
            className: (0, _classnames.default)(_snackbarcssmistica.snackbar, {
                [_snackbarcssmistica.snackbarOpen]: c
            }),
            children: /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", _object_spread_props(_object_spread({
                role: "alert",
                className: (0, _classnames.default)(_snackbarcssmistica.wrapper, s === "CRITICAL" ? _snackbarcssmistica.wrapperCritical : _snackbarcssmistica.wrapperInfo, {
                    [_snackbarcssmistica.wrapperOpen]: c
                })
            }, (0, _dom.getPrefixedDataAttributes)(S, "SnackBar")), {
                children: [
                    /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                        className: (0, _classnames.default)(d ? _snackbarcssmistica.contentWithLongButton : _snackbarcssmistica.contentWithoutLongButton),
                        style: B && !d ? {
                            paddingRight: 32
                        } : void 0,
                        children: [
                            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                style: B && d ? {
                                    paddingRight: 32
                                } : void 0,
                                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                                    regular: !0,
                                    color: _skincontractcssmistica.vars.colors.textPrimaryInverse,
                                    children: i
                                })
                            }),
                            t && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                className: (0, _classnames.default)(_snackbarcssmistica.button, {
                                    [_snackbarcssmistica.longButton]: d
                                }),
                                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_touchable.BaseTouchable, {
                                    className: _snackbarcssmistica.buttonTouchable,
                                    ref: _,
                                    onPress: ()=>{
                                        a({
                                            action: "BUTTON"
                                        });
                                    },
                                    "aria-label": l,
                                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
                                        medium: !0,
                                        forceMobileSizes: !0,
                                        truncate: !0,
                                        color: s === "CRITICAL" ? _skincontractcssmistica.vars.colors.textPrimaryInverse : _skincontractcssmistica.vars.colors.textLinkSnackbar,
                                        children: t
                                    })
                                })
                            })
                        ]
                    }),
                    B ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_touchable.default, {
                        onPress: ()=>{
                            a({
                                action: "DISMISS"
                            });
                        },
                        "aria-label": T || m.closeButtonLabel || f(_texttokens.closeButtonLabel),
                        className: _snackbarcssmistica.dismissButton[d ? "topRight" : "centered"],
                        style: {
                            display: "flex",
                            width: 32,
                            height: 32
                        },
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                            className: _snackbarcssmistica.dismissIcon,
                            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconcloseregular.default, {
                                color: _skincontractcssmistica.vars.colors.inverse,
                                size: 20
                            })
                        })
                    }) : null
                ]
            }))
        })
    });
}), ae = /*#__PURE__*/ _react.forwardRef((param, v)=>{
    let { message: i, buttonText: t, buttonAccessibilityLabel: l, closeButtonLabel: T, duration: o, onClose: n = ()=>{}, type: s = "INFORMATIVE", withDismiss: u, dataAttributes: S } = param;
    const m = (0, _webviewbridge.isWebViewBridgeAvailable)(), f = _react.useRef(n), c = _react.useRef(!1);
    return _react.useEffect(()=>{
        f.current = n;
    }, [
        n
    ]), _react.useEffect(()=>{
        m && !c.current && (c.current = !0, (0, _snackbarnative.showNativeSnackbar)({
            message: i,
            duration: o,
            buttonText: t,
            buttonAccessibilityLabel: l,
            type: s,
            withDismiss: u
        }).then((param)=>{
            let { action: p } = param;
            f.current({
                action: p
            });
        }).finally(()=>{
            c.current = !1;
        }));
    }, [
        l,
        T,
        t,
        o,
        i,
        m,
        s,
        u
    ]), m ? null : /* @__PURE__ */ (0, _jsxruntime.jsx)(ce, {
        ref: v,
        message: i,
        duration: o,
        buttonText: t,
        buttonAccessibilityLabel: l,
        closeButtonLabel: T,
        type: s,
        onClose: f.current,
        withDismiss: u,
        dataAttributes: S
    });
}), Be = ae;
