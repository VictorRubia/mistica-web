"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return We;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _stack = /*#__PURE__*/ _interop_require_default(require("./stack.js"));
const _text = require("./text.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _iconbutton = require("./icon-button.js");
const _iconcloseregular = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-close-regular.js"));
const _box = /*#__PURE__*/ _interop_require_default(require("./box.js"));
const _drawercssmistica = require("./drawer.css-mistica.js");
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _portal = require("./portal.js");
const _hooks = require("./hooks.js");
const _focustrap = /*#__PURE__*/ _interop_require_default(require("./focus-trap.js"));
const _modalcontextprovider = require("./modal-context-provider.js");
const _buttonlayout = /*#__PURE__*/ _interop_require_default(require("./button-layout.js"));
const _button = require("./button.js");
const _divider = /*#__PURE__*/ _interop_require_default(require("./divider.js"));
const _dom = require("./utils/dom.js");
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
const P = 40, A = 32, fe = 16, R = 388, pe = R + P * 2, ve = R + A * 2, D = (param)=>{
    let { show: i } = param;
    return i ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_divider.default, {}) : /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        style: {
            borderBottom: "1px solid transparent"
        }
    });
}, he = ()=>{
    const i = _react.useRef(document.activeElement);
    _react.useEffect(()=>{
        const r = i.current;
        return ()=>{
            var l;
            (l = r == null ? void 0 : r.focus) == null || l.call(r);
        };
    }, []);
}, Ee = /*#__PURE__*/ _react.forwardRef((param, S)=>{
    let { width: i, children: r, onClose: l, onDismiss: d } = param;
    (0, _modalcontextprovider.useSetModalStateEffect)(), he();
    const { isMobile: p, isTablet: T } = (0, _hooks.useScreenSize)(), [u, v] = _react.useState(!1), a = p ? "none" : T ? ve : pe, s = p ? "auto" : i, n = _react.useCallback((o)=>{
        o && setTimeout(()=>{
            v(!0);
        }, 50);
    }, []), f = _react.useCallback(()=>(v(!1), new Promise((o)=>{
            setTimeout(o, _drawercssmistica.ANIMATION_DURATION_MS);
        }).then(l)), [
        l
    ]), c = _react.useCallback(()=>f().then(()=>d == null ? void 0 : d()), [
        d,
        f
    ]);
    return _react.useImperativeHandle(S, ()=>({
            close: f,
            dismiss: c
        })), _react.useEffect(()=>{
        const o = (h)=>{
            h.key === "Escape" && c();
        };
        return document.addEventListener("keydown", o), ()=>{
            document.removeEventListener("keydown", o);
        };
    }, [
        c
    ]), /* @__PURE__ */ (0, _jsxruntime.jsx)(_portal.Portal, {
        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_focustrap.default, {
            children: [
                /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    "data-testid": "drawerOverlay",
                    onClick: d ? c : void 0,
                    className: (0, _classnames.default)(_drawercssmistica.overlay, u ? _drawercssmistica.overlayOpen : _drawercssmistica.overlayClosed)
                }),
                /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    "data-testid": "drawerLayout",
                    ref: n,
                    style: {
                        width: s,
                        minWidth: a
                    },
                    className: (0, _classnames.default)(_drawercssmistica.container, u ? _drawercssmistica.open : _drawercssmistica.closed),
                    children: r
                })
            ]
        })
    });
}), ke = (param)=>{
    let { title: i, subtitle: r, description: l, titleAs: d = "h2", dismissLabel: S, width: p, onClose: T, onDismiss: u, children: v, button: a, secondaryButton: s, buttonLink: n, dataAttributes: f } = param;
    const c = _react.useRef(null), o = !!(a || s || n), [h, _] = _react.useState(null), g = _react.useRef(null), y = _react.useRef(null), { t: B, texts: C } = (0, _hooks.useTheme)(), w = {
        mobile: fe,
        tablet: A,
        desktop: P
    }, I = (m)=>{
        var b;
        (b = c.current) == null || b.close().then(()=>m == null ? void 0 : m());
    }, O = !(0, _hooks.useIsInViewport)(g, !0, {
        root: h
    }), M = !(0, _hooks.useIsInViewport)(y, !0, {
        rootMargin: "1px",
        // bottomScrollSignal div has 0px height so we need a 1px margin to trigger the intersection observer
        root: h
    });
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(Ee, {
        width: p,
        ref: c,
        onClose: T,
        onDismiss: u,
        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)("section", _object_spread_props(_object_spread({
            role: "dialog",
            "aria-modal": "true",
            className: _drawercssmistica.drawer,
            ref: _
        }, (0, _dom.getPrefixedDataAttributes)(f, "Drawer")), {
            children: [
                u && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: _drawercssmistica.closeButtonContainer,
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconbutton.IconButton, {
                        dataAttributes: {
                            testid: "dismissButton"
                        },
                        onPress: ()=>{
                            var m;
                            return (m = c.current) == null ? void 0 : m.dismiss();
                        },
                        Icon: _iconcloseregular.default,
                        "aria-label": S || C.modalClose || B(_texttokens.modalClose),
                        type: "neutral",
                        backgroundType: "transparent"
                    })
                }),
                i && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: _drawercssmistica.titleContainer,
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                        paddingX: w,
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text5, {
                            as: d,
                            dataAttributes: {
                                testid: "title"
                            },
                            children: i
                        })
                    })
                }),
                /* @__PURE__ */ (0, _jsxruntime.jsx)(D, {
                    show: O
                }),
                /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                    className: _drawercssmistica.scrollableSection,
                    children: [
                        /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                            ref: g
                        }),
                        /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                            paddingX: w,
                            children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
                                space: 16,
                                children: [
                                    r && /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text4, {
                                        regular: !0,
                                        dataAttributes: {
                                            testid: "subtitle"
                                        },
                                        children: r
                                    }),
                                    l && /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
                                        regular: !0,
                                        color: _skincontractcssmistica.vars.colors.textSecondary,
                                        dataAttributes: {
                                            testid: "description"
                                        },
                                        children: l
                                    }),
                                    v
                                ]
                            })
                        }),
                        !o && /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                            paddingBottom: {
                                mobile: 16,
                                desktop: 24
                            }
                        }),
                        /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                            ref: y
                        })
                    ]
                }),
                /* @__PURE__ */ (0, _jsxruntime.jsx)(D, {
                    show: o && M
                }),
                o && /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                    paddingX: w,
                    paddingY: {
                        mobile: 16,
                        desktop: 24
                    },
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_buttonlayout.default, {
                        primaryButton: a && /* @__PURE__ */ (0, _jsxruntime.jsx)(_button.ButtonPrimary, {
                            trackEvent: a.trackEvent,
                            trackingEvent: a.trackingEvent,
                            onPress: ()=>I(a.onPress),
                            disabled: a.disabled,
                            children: a.text
                        }),
                        secondaryButton: s && /* @__PURE__ */ (0, _jsxruntime.jsx)(_button.ButtonSecondary, {
                            trackEvent: s.trackEvent,
                            trackingEvent: s.trackingEvent,
                            onPress: ()=>I(s.onPress),
                            disabled: s.disabled,
                            children: s.text
                        }),
                        link: n && /* @__PURE__ */ (0, _jsxruntime.jsx)(_button.ButtonLink, {
                            trackEvent: n.trackEvent,
                            trackingEvent: n.trackingEvent,
                            onPress: ()=>I(n.onPress),
                            bleedY: !0,
                            disabled: n.disabled,
                            children: n.text
                        })
                    })
                })
            ]
        }))
    });
}, We = ke;
