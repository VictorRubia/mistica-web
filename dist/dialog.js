"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Me;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _button = require("./button.js");
const _portal = require("./portal.js");
const _focustrap = /*#__PURE__*/ _interop_require_default(require("./focus-trap.js"));
const _iconcloseregular = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-close-regular.js"));
const _iconbutton = require("./icon-button.js");
const _webviewbridge = require("@tef-novum/webview-bridge");
const _hooks = require("./hooks.js");
const _buttonlayout = /*#__PURE__*/ _interop_require_default(require("./button-layout.js"));
const _text = require("./text.js");
const _keys = require("./utils/keys.js");
const _box = /*#__PURE__*/ _interop_require_default(require("./box.js"));
const _platform = require("./utils/platform.js");
const _modalcontextprovider = require("./modal-context-provider.js");
const _stack = /*#__PURE__*/ _interop_require_default(require("./stack.js"));
const _dialogcssmistica = require("./dialog.css-mistica.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _texttokens = require("./text-tokens.js");
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
const fe = ()=>process.env.NODE_ENV !== "test" && !(0, _platform.isRunningAcceptanceTest)(), ge = (t)=>{
    const { texts: r, t: u } = (0, _hooks.useTheme)(), { className: f, title: i, message: h, asset: n, extra: d, showCancelButton: s, showAcceptButton: l, cancelText: g = r.dialogCancelButton || u(_texttokens.dialogCancelButton), acceptText: p = r.dialogAcceptButton || u(_texttokens.dialogAcceptButton), onCancel: c, onAccept: y, destructive: R = !1 } = t, m = t.type === "dialog", C = m && !!t.link || l || s, B = {
        onPress: y || (()=>{}),
        children: p,
        // @deprecated - testid should be removed but many webapp tests depend on this
        dataAttributes: {
            testid: "dialog-accept-button"
        }
    };
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
        className: (0, _classnames.default)(_dialogcssmistica.variants[m ? "dialog" : "default"], f),
        children: [
            n && /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                paddingBottom: 24,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: _dialogcssmistica.iconContainer,
                    children: /*#__PURE__*/ _react.cloneElement(n, {
                        size: "100%"
                    })
                })
            }),
            i && /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                paddingBottom: 16,
                children: m ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text5, {
                    as: "h2",
                    children: i
                }) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text4, {
                    regular: !0,
                    as: "h2",
                    children: i
                })
            }),
            t.subtitle && /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                paddingBottom: 16,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text4, {
                    regular: !0,
                    as: "h2",
                    children: t.subtitle
                })
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                className: _dialogcssmistica.dialogContent,
                children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
                    space: 16,
                    children: [
                        /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
                            color: _skincontractcssmistica.vars.colors.textSecondary,
                            regular: !0,
                            children: h
                        }),
                        d
                    ]
                })
            }),
            C && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                className: _dialogcssmistica.dialogActions,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_buttonlayout.default, {
                    link: m ? t.link : void 0,
                    primaryButton: l ? R ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_button.ButtonDanger, _object_spread({
                        tabIndex: 1
                    }, B)) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_button.ButtonPrimary, _object_spread({
                        tabIndex: 1
                    }, B)) : void 0,
                    secondaryButton: s ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_button.ButtonSecondary, {
                        tabIndex: 2,
                        onPress: c || (()=>{}),
                        dataAttributes: {
                            testid: "dialog-cancel-button"
                        },
                        children: g
                    }) : void 0
                })
            })
        ]
    });
}, he = (param)=>{
    let { type: t, message: r, title: u, acceptText: f, cancelText: i, destructive: h, onAccept: n, onCancel: d, onDestroy: s } = param;
    return t === "confirm" ? (0, _webviewbridge.nativeConfirm)({
        message: r,
        title: u,
        cancelText: i,
        acceptText: f,
        destructive: h
    }).then((l)=>{
        l ? n == null || n() : d == null || d(), s();
    }) : (0, _webviewbridge.nativeAlert)({
        message: r,
        title: u,
        buttonText: f
    }).then(()=>{
        n == null || n(), s();
    });
}, pe = (param)=>{
    let { type: t, onAccept: r, onCancel: u, onDestroy: f, acceptText: i, cancelText: h, message: n, title: d, destructive: s } = param;
    const { texts: l, t: g } = (0, _hooks.useTheme)(), p = _react.useRef({
        type: t,
        onAccept: r,
        onCancel: u,
        onDestroy: f,
        acceptText: i || l.dialogAcceptButton || g(_texttokens.dialogAcceptButton),
        cancelText: h || l.dialogCancelButton || g(_texttokens.dialogCancelButton),
        message: n,
        title: d,
        destructive: s
    }), c = _react.useRef(!1);
    return _react.useEffect(()=>{
        c.current || (c.current = !0, he(p.current).finally(()=>{
            c.current = !1;
        }));
    }, []), /* @__PURE__ */ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {});
}, Me = (t)=>{
    (0, _modalcontextprovider.useSetModalStateEffect)();
    const r = _react.useRef(null), { texts: u, t: f } = (0, _hooks.useTheme)(), [i, h] = _react.useState(!1), n = _react.useRef(!1), d = _react.useRef(!1), [s, l] = _react.useState(!1), g = _react.useRef(!1), p = _react.useRef(fe() ? _dialogcssmistica.ANIMATION_DURATION_MS : 0), c = t.type !== "dialog" && (0, _webviewbridge.isWebViewBridgeAvailable)(), y = t.type === "dialog", R = t.type === "alert", { onAccept: m, onCancel: C, onDestroy: B } = t, L = _object_without_properties(t, [
        "onAccept",
        "onCancel",
        "onDestroy"
    ]);
    _react.useEffect(()=>{
        const a = setTimeout(()=>{
            n.current || l(!0);
        }, p.current);
        return ()=>{
            clearTimeout(a);
        };
    }, []);
    const N = _react.useCallback(()=>{
        d.current || (d.current = !0, g.current ? m == null || m() : C == null || C(), B());
    }, [
        m,
        C,
        B
    ]), x = _react.useCallback(()=>{
        let a;
        return !n.current && s && (n.current = !0, l(!1), h(!0), a = setTimeout(N, p.current)), ()=>{
            a && clearTimeout(a);
        };
    }, [
        N,
        s
    ]), T = _react.useCallback(()=>{
        g.current = !0, x();
    }, [
        x
    ]), b = _react.useCallback(()=>{
        g.current = !1, x();
    }, [
        x
    ]), v = _react.useCallback(()=>{
        n.current || (R ? T() : b());
    }, [
        T,
        b,
        R
    ]), k = _react.useCallback((a)=>{
        a.key === _keys.ESC && (a.stopPropagation(), a.preventDefault(), v());
    }, [
        v
    ]);
    _react.useEffect(()=>{
        if (!c) return document.addEventListener("keydown", k), ()=>{
            document.removeEventListener("keydown", k);
        };
    }, [
        k,
        c
    ]), _react.useEffect(()=>{
        if (!c) return window.addEventListener("popstate", v), ()=>{
            window.removeEventListener("popstate", v);
        };
    }, [
        v,
        c
    ]);
    const S = _react.useCallback((a)=>{
        a.stopPropagation(), y && b();
    }, [
        y,
        b
    ]);
    return c ? /* @__PURE__ */ (0, _jsxruntime.jsx)(pe, _object_spread({}, t)) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_portal.Portal, {
        className: _dialogcssmistica.wrapper,
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_focustrap.default, {
            children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                onClick: S,
                className: (0, _classnames.default)(_dialogcssmistica.modalOpacityLayer, {
                    [_dialogcssmistica.closedOpactityLayer]: i
                }),
                "data-testid": "dialog-overlay",
                "aria-hidden": i || !s,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    role: "dialog",
                    onClick: (a)=>a.stopPropagation(),
                    "data-component-name": "Dialog",
                    children: /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                        ref: r,
                        onAnimationEnd: (a)=>{
                            a.target === r.current && (n.current || l(!0));
                        },
                        onTransitionEnd: (a)=>{
                            a.target === r.current && n.current && N();
                        },
                        className: (0, _classnames.default)(_dialogcssmistica.modalContent, {
                            [_dialogcssmistica.closedModalContent]: i
                        }),
                        children: [
                            y && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                className: _dialogcssmistica.modalCloseButtonContainer,
                                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconbutton.InternalIconButton, {
                                    onPress: v,
                                    "aria-label": t.closeButtonLabel || u.modalClose || f(_texttokens.modalClose),
                                    bleedLeft: !0,
                                    bleedRight: !0,
                                    bleedY: !0,
                                    Icon: _iconcloseregular.default
                                })
                            }),
                            /* @__PURE__ */ (0, _jsxruntime.jsx)(ge, _object_spread_props(_object_spread({}, L), {
                                showAcceptButton: t.type !== "dialog" || !!t.onAccept,
                                showCancelButton: t.type === "confirm" || t.type === "dialog" && !!t.onCancel,
                                onCancel: b,
                                onAccept: T
                            }))
                        ]
                    })
                })
            })
        })
    });
};
