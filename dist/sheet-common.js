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
    SheetBody: function() {
        return Ye;
    },
    default: function() {
        return _e;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _sheetcommoncssmistica = require("./sheet-common.css-mistica.js");
const _focustrap = /*#__PURE__*/ _interop_require_default(require("./focus-trap.js"));
const _hooks = require("./hooks.js");
const _modalcontextprovider = require("./modal-context-provider.js");
const _portal = require("./portal.js");
const _text = require("./text.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _stack = /*#__PURE__*/ _interop_require_default(require("./stack.js"));
const _box = /*#__PURE__*/ _interop_require_default(require("./box.js"));
const _divider = /*#__PURE__*/ _interop_require_default(require("./divider.js"));
const _dom = require("./utils/dom.js");
const _iconcloseregular = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-close-regular.js"));
const _iconbutton = require("./icon-button.js");
const _buttonlayout = /*#__PURE__*/ _interop_require_default(require("./button-layout.js"));
const _css = require("./utils/css.js");
const _responsivelayoutcssmistica = require("./responsive-layout.css-mistica.js");
const _texttokens = require("./text-tokens.js");
const _touchable = /*#__PURE__*/ _interop_require_default(require("./touchable.js"));
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
const ue = process.env.NODE_ENV === "test" ? 0 : _sheetcommoncssmistica.transitionDuration, w = (n)=>"touches" in n ? n.touches[0].clientY : n.clientY, me = (param)=>{
    let { closeModal: n } = param;
    const [o, s] = _react.useState(0), d = _react.useRef(!1), u = _react.useRef(0), f = _react.useRef(0), r = _react.useRef(0), a = _react.useRef(0), { isDesktopOrBigger: m } = (0, _hooks.useScreenSize)(), l = _react.useCallback((c)=>{
        d.current = !0, u.current = 0, f.current = Date.now(), r.current = w(c);
    }, []), g = _react.useCallback(()=>{
        d.current = !1, s(0);
    }, []);
    return _react.useEffect(()=>{
        if (m) return;
        const c = (h)=>{
            if (d.current) {
                if (u.current < 3) {
                    u.current++;
                    return;
                }
                a.current = w(h), s(a.current - r.current);
            }
        }, i = ()=>{
            if (!d.current) return;
            const h = Date.now() - f.current, v = a.current - r.current, S = v / h;
            d.current = !1, s(0), v > 50 && (a.current > window.innerHeight * 0.75 || S > 0.5) && n();
        };
        return document.addEventListener("touchmove", c), document.addEventListener("touchend", i), document.addEventListener("mousemove", c), document.addEventListener("mouseup", i), ()=>{
            document.removeEventListener("touchmove", c), document.removeEventListener("touchend", i), document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", i);
        };
    }, [
        n,
        m
    ]), m ? {} : {
        onTouchStart: l,
        onMouseDown: l,
        style: o ? {
            transform: `translateY(${o}px)`,
            transition: "none"
        } : void 0,
        onScroll: g,
        overlayStyle: o ? {
            // decrease opacity when dragging down the sheet
            opacity: 0.25 + 1 - o / (window.innerHeight - r.current),
            transition: "none"
        } : void 0
    };
}, fe = {
    closed: {
        open: "opening"
    },
    opening: {
        close: "closed",
        transitionEnd: "open"
    },
    open: {
        close: "closing"
    },
    closing: {
        transitionEnd: "closed"
    }
}, he = (n, o)=>fe[n][o] || n, pe = /*#__PURE__*/ _react.forwardRef((param, d)=>{
    let { onClose: n, children: o, dataAttributes: s } = param;
    const { texts: u, t: f } = (0, _hooks.useTheme)(), [r, a] = _react.useReducer(he, "closed"), m = _react.useRef(!1), l = _react.useId(), g = (0, _hooks.useIsWithinIFrame)(), c = _react.useCallback((E)=>{
        E.target === E.currentTarget && a("transitionEnd");
    }, []), i = ()=>{
        r === "open" && a("close");
    };
    _react.useEffect(()=>{
        if (r === "opening" || r === "closing") {
            const E = setTimeout(()=>{
                a("transitionEnd");
            }, ue);
            return ()=>clearTimeout(E);
        }
    }, [
        r
    ]), _react.useEffect(()=>{
        r === "closed" ? m.current ? n == null || n() : a("open") : m.current = !0;
    }, [
        r,
        n
    ]);
    const _me = me({
        closeModal: i
    }), { onScroll: h, overlayStyle: v } = _me, S = _object_without_properties(_me, [
        "onScroll",
        "overlayStyle"
    ]);
    return (0, _modalcontextprovider.useSetModalStateEffect)(), (0, _hooks.useDisableBodyScroll)(r !== "closed"), r === "closed" ? null : /* @__PURE__ */ (0, _jsxruntime.jsx)(_portal.Portal, {
        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_focustrap.default, {
            disabled: g,
            children: [
                /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: (0, _classnames.default)(_sheetcommoncssmistica.overlay, {
                        [_sheetcommoncssmistica.closingOverlay]: r === "closing"
                    }),
                    style: v,
                    onClick: i
                }),
                /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({
                    className: (0, _classnames.default)(_sheetcommoncssmistica.SheetContainer, {
                        [_sheetcommoncssmistica.closingSheet]: r === "closing"
                    }),
                    onTransitionEnd: c,
                    onAnimationEnd: c
                }, S, (0, _dom.getPrefixedDataAttributes)(s, "Sheet")), {
                    ref: d,
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        className: _sheetcommoncssmistica.Sheet,
                        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                            className: _sheetcommoncssmistica.SheetContent,
                            children: [
                                /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                    className: _sheetcommoncssmistica.sheetTopDraggingArea
                                }),
                                /* @__PURE__ */ (0, _jsxruntime.jsxs)("section", {
                                    role: "dialog",
                                    "aria-modal": "true",
                                    "aria-labelledby": l,
                                    onScroll: h,
                                    className: _sheetcommoncssmistica.children,
                                    style: {
                                        paddingBottom: _css.safeAreaInsetBottom
                                    },
                                    children: [
                                        typeof o == "function" ? o({
                                            closeModal: i,
                                            modalTitleId: l
                                        }) : o,
                                        /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                            className: _sheetcommoncssmistica.modalCloseButton,
                                            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconbutton.InternalIconButton, {
                                                onPress: i,
                                                "aria-label": u.modalClose || f(_texttokens.modalClose),
                                                Icon: _iconcloseregular.default,
                                                bleedLeft: !0,
                                                bleedRight: !0,
                                                bleedY: !0
                                            })
                                        }),
                                        /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                            className: _sheetcommoncssmistica.handleContainer,
                                            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_touchable.default, {
                                                onPress: i,
                                                className: _sheetcommoncssmistica.handleTouchable,
                                                "aria-label": u.modalClose || f(_texttokens.modalClose),
                                                children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                                    className: _sheetcommoncssmistica.handleBar
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }))
            ]
        })
    });
}), b = {
    mobile: _responsivelayoutcssmistica.MOBILE_SIDE_MARGIN,
    tablet: _responsivelayoutcssmistica.TABLET_SIDE_MARGIN,
    desktop: 40
}, Ye = (param)=>{
    let { title: n, subtitle: o, description: s, modalTitleId: d, button: u, secondaryButton: f, link: r, children: a } = param;
    const m = _react.useRef(null), l = _react.useRef(null), g = _react.useRef(null);
    _react.useEffect(()=>{
        l.current && (g.current = (0, _dom.getScrollableParentElement)(l.current));
    }, []);
    const c = !(0, _hooks.useIsInViewport)(m, !0, {
        root: g.current
    }), i = !(0, _hooks.useIsInViewport)(l, !0, {
        rootMargin: "1px",
        // bottomScrollSignal div has 0px height so we need a 1px margin to trigger the intersection observer
        root: g.current
    }), h = !!u || !!f || !!r;
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                ref: m
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                className: _sheetcommoncssmistica.stickyTitle,
                children: [
                    n ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                        paddingBottom: 8,
                        paddingTop: {
                            mobile: 0,
                            desktop: 40
                        },
                        paddingX: b,
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text5, {
                            as: "h2",
                            id: d,
                            truncate: !0,
                            children: n
                        })
                    }) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                        paddingTop: {
                            mobile: 0,
                            desktop: 40
                        }
                    }),
                    c && /* @__PURE__ */ (0, _jsxruntime.jsx)(_divider.default, {})
                ]
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                className: _sheetcommoncssmistica.bodyContent,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                    paddingBottom: h ? 0 : {
                        desktop: 40,
                        mobile: 0
                    },
                    paddingX: b,
                    children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
                        space: 8,
                        children: [
                            o || s ? /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
                                space: {
                                    mobile: 8,
                                    desktop: 16
                                },
                                children: [
                                    o && /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
                                        as: "p",
                                        regular: !0,
                                        children: o
                                    }),
                                    s && (Array.isArray(s) ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                                        as: "div",
                                        regular: !0,
                                        color: _skincontractcssmistica.vars.colors.textSecondary,
                                        children: s.map((v, S)=>/* @__PURE__ */ (0, _jsxruntime.jsx)("p", {
                                                style: {
                                                    margin: 0,
                                                    marginBottom: S < s.length - 1 ? "1em" : void 0
                                                },
                                                children: v
                                            }, S))
                                    }) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                                        as: "p",
                                        regular: !0,
                                        color: _skincontractcssmistica.vars.colors.textSecondary,
                                        children: s
                                    }))
                                ]
                            }) : null,
                            a
                        ]
                    })
                })
            }),
            h && /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                className: _sheetcommoncssmistica.stickyButtons,
                children: [
                    i && /* @__PURE__ */ (0, _jsxruntime.jsx)(_divider.default, {}),
                    /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                        paddingY: {
                            mobile: 16,
                            desktop: 40
                        },
                        paddingX: b,
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_buttonlayout.default, {
                            align: "full-width",
                            link: r,
                            primaryButton: u,
                            secondaryButton: f
                        })
                    })
                ]
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                ref: l
            })
        ]
    });
}, _e = pe;
