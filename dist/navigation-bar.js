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
    FunnelNavigationBar: function() {
        return Tt;
    },
    MainNavigationBar: function() {
        return xt;
    },
    NavigationBar: function() {
        return Hn;
    },
    NavigationBarAction: function() {
        return yt;
    },
    NavigationBarActionGroup: function() {
        return Lt;
    },
    useMainNavigationBarDesktopMenuState: function() {
        return D;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacttransitiongroup = require("react-transition-group");
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _responsivelayout = /*#__PURE__*/ _interop_require_wildcard(require("./responsive-layout.js"));
const _inline = /*#__PURE__*/ _interop_require_default(require("./inline.js"));
const _touchable = /*#__PURE__*/ _interop_require_wildcard(require("./touchable.js"));
const _text = require("./text.js");
const _hooks = require("./hooks.js");
const _iconmenuregular = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-menu-regular.js"));
const _iconcloseregular = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-close-regular.js"));
const _iconchevronleftregular = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-chevron-left-regular.js"));
const _iconbutton = require("./icon-button.js");
const _list = require("./list.js");
const _themevariantcontext = require("./theme-variant-context.js");
const _focustrap = /*#__PURE__*/ _interop_require_default(require("./focus-trap.js"));
const _portal = require("./portal.js");
const _gridlayout = /*#__PURE__*/ _interop_require_default(require("./grid-layout.js"));
const _modalcontextprovider = require("./modal-context-provider.js");
const _logo = require("./logo.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _navigationbarcssmistica = require("./navigation-bar.css-mistica.js");
const _dom = require("./utils/dom.js");
const _stack = /*#__PURE__*/ _interop_require_default(require("./stack.js"));
const _box = /*#__PURE__*/ _interop_require_default(require("./box.js"));
const _platform = require("./utils/platform.js");
const _texttokens = require("./text-tokens.js");
const _theme = require("./theme.js");
const _textlink = /*#__PURE__*/ _interop_require_default(require("./text-link.js"));
const _title = require("./title.js");
const _button = require("./button.js");
const _grid = require("./grid.js");
const _keys = require("./utils/keys.js");
const _helpers = require("./utils/helpers.js");
const _negativebox = /*#__PURE__*/ _interop_require_default(require("./negative-box.js"));
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
const yn = 120, Dn = (param)=>{
    let { size: n = 24, color: t = _skincontractcssmistica.vars.colors.neutralHigh, style: i, className: r } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", {
        width: n,
        height: n,
        viewBox: "0 0 8 8",
        style: i,
        className: r,
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            d: "M6.32595 3.46071L3.03801 0.158595L3.03292 0.153747L3.032 0.152903L3.02931 0.150463L3.02848 0.149738L3.02248 0.144353C2.88533 0.021206 2.71386 -0.0126731 2.56343 0.00394249C2.41648 0.0201739 2.27272 0.0856702 2.16886 0.18711C2.06893 0.281844 2.01209 0.42816 2.00175 0.567065C1.99083 0.71377 2.02925 0.889583 2.16869 1.02392L5.24446 4.00145L2.15859 6.96199L2.15375 6.96708L2.1529 6.968L2.15046 6.97069L2.14974 6.97152L2.14435 6.97752C2.02121 7.11467 1.98733 7.28614 2.00394 7.43657C2.02017 7.58352 2.08567 7.72728 2.18711 7.83114C2.28184 7.93107 2.42816 7.98791 2.56706 7.99825C2.71377 8.00917 2.88958 7.97075 3.02392 7.83132L6.32595 4.5422V4.5422C6.6246 4.24355 6.6246 3.75935 6.32595 3.46071V3.46071Z",
            fill: t
        })
    });
}, Pn = (param)=>{
    let { isOpen: n } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
        className: _navigationbarcssmistica.burgerIconContainer,
        role: "presentation",
        "data-component-name": "BurgerMenuIcon",
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                className: n ? _navigationbarcssmistica.iconCloseOpen : _navigationbarcssmistica.iconCloseHidden,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconcloseregular.default, {})
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                className: n ? _navigationbarcssmistica.iconMenuHidden : _navigationbarcssmistica.iconMenuOpen,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconmenuregular.default, {})
            })
        ]
    });
}, oe = (param)=>{
    let { children: n, topFixed: t, withBorder: i, isBurgerMenuOpen: r, variant: a = "default", dataAttributes: p } = param;
    const { isDarkMode: c } = (0, _hooks.useTheme)(), d = ()=>a === "inverse" && !c || !i ? _navigationbarcssmistica.navbarBorderColorVariants.noBorder : r ? _navigationbarcssmistica.navbarBorderColorVariants.menuOpen : _navigationbarcssmistica.navbarBorderColorVariants.default, l = {
        default: _skincontractcssmistica.vars.colors.background,
        inverse: _skincontractcssmistica.vars.colors.navigationBarBackground,
        alternative: _skincontractcssmistica.vars.colors.backgroundAlternative,
        media: _skincontractcssmistica.vars.colors.navigationBarBackground
    };
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("header", _object_spread_props(_object_spread({
        className: (0, _classnames.default)(d(), {
            [_navigationbarcssmistica.topFixed]: t
        }),
        style: {
            background: l[a]
        }
    }, (0, _dom.getPrefixedDataAttributes)(p)), {
        children: n
    }));
}, G = /*#__PURE__*/ _react.forwardRef((param, a)=>{
    let { right: n, children: t, desktopOnly: i, expandRightContent: r } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
        ref: a,
        className: (0, _classnames.default)(_navigationbarcssmistica.navigationBarContent, {
            [_navigationbarcssmistica.desktopOnly]: i
        }),
        children: [
            t,
            n && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                className: r ? _navigationbarcssmistica.navigationBarContentRightExpanded : _navigationbarcssmistica.navigationBarContentRight,
                children: n
            })
        ]
    });
}), z = (param)=>{
    let { children: n, wide: t } = param;
    if (!t) return /* @__PURE__ */ (0, _jsxruntime.jsx)(_responsivelayout.default, {
        children: n
    });
    const i = {
        mobile: 16,
        tablet: 24,
        desktop: 24
    };
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
        width: "100%",
        paddingX: t === !0 ? i : typeof t.paddingX == "number" ? t.paddingX : _object_spread({}, i, t.paddingX),
        children: n
    });
}, Hn = (param)=>{
    let { onBack: n, title: t, titleAs: i, right: r, variant: a = "default", topFixed: p = !0, paddingX: c = 0, withBorder: d = !0, wide: l = !1 } = param;
    const { texts: u, t: f } = (0, _hooks.useTheme)(), m = /* @__PURE__ */ (0, _jsxruntime.jsx)(G, {
        right: r,
        expandRightContent: !0,
        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_inline.default, {
            space: 24,
            alignItems: "center",
            children: [
                n && /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconbutton.IconButton, {
                    "aria-label": u.backNavigationBar || f(_texttokens.backNavigationBar),
                    onPress: n,
                    Icon: _iconchevronleftregular.default,
                    bleedLeft: !0,
                    bleedRight: !0
                }),
                /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
                    regular: !0,
                    truncate: !0,
                    as: i,
                    children: t
                })
            ]
        })
    });
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)(_themevariantcontext.ThemeVariant, {
        variant: a,
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)(oe, {
                topFixed: p,
                withBorder: d,
                variant: a,
                dataAttributes: {
                    "component-name": "NavigationBar"
                },
                children: p ? /* @__PURE__ */ (0, _jsxruntime.jsx)(z, {
                    wide: l,
                    children: m
                }) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                    width: "100%",
                    paddingX: (()=>{
                        var _l_paddingX;
                        return l !== void 0 ? typeof l != "object" ? 0 : (_l_paddingX = l.paddingX) !== null && _l_paddingX !== void 0 ? _l_paddingX : 0 : c;
                    })(),
                    children: m
                })
            }),
            p && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                className: _navigationbarcssmistica.spacer
            })
        ]
    });
}, U = (n, t)=>n.href === void 0 && n.onPress === void 0 && n.to === void 0 ? {
        onPress: t
    } : n.onPress ? {
        onPress: ()=>{
            n.onPress(), t();
        }
    } : _object_spread_props(_object_spread({}, n), {
        onNavigate: ()=>t()
    }), Fn = {
    opening: {
        close: "closing",
        finishOpen: "opened"
    },
    opened: {
        close: "closing"
    },
    closing: {
        open: "opening",
        finishClose: "closed"
    },
    closed: {
        open: "opening"
    }
}, _n = (n, t)=>Fn[n][t] || n, wn = (param)=>{
    let { section: n, closeSubMenu: t, closeMenu: i } = param;
    const { texts: r, t: a } = (0, _hooks.useTheme)(), { title: p, menu: c } = n, d = _object_without_properties(n, [
        "title",
        "menu"
    ]), l = (c == null ? void 0 : c.columns) || [], u = c == null ? void 0 : c.content, f = d.href !== void 0 || d.onPress !== void 0 || d.to !== void 0;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_responsivelayout.default, {
        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
            space: 32,
            children: [
                /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
                    space: 16,
                    children: [
                        /* @__PURE__ */ (0, _jsxruntime.jsx)(Hn, {
                            title: r.backNavigationBar || a(_texttokens.backNavigationBar),
                            onBack: t,
                            topFixed: !1,
                            withBorder: !1
                        }),
                        /* @__PURE__ */ (0, _jsxruntime.jsx)(_title.Title3, {
                            right: f ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_button.ButtonLink, _object_spread_props(_object_spread({
                                small: !0,
                                bleedY: !0,
                                bleedRight: !0,
                                withChevron: !0
                            }, U(d, i)), {
                                children: r.mainNavigationBarSectionSeeAll || a(_texttokens.mainNavigationBarSectionSeeAll)
                            })) : void 0,
                            children: p
                        })
                    ]
                }),
                u ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                    paddingBottom: 16,
                    children: typeof u == "function" ? u({
                        closeMenu: i
                    }) : u
                }) : l.map((m, s)=>/* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
                        space: 8,
                        children: [
                            /* @__PURE__ */ (0, _jsxruntime.jsxs)(_title.Title1, {
                                children: [
                                    " ",
                                    m.title
                                ]
                            }),
                            /* @__PURE__ */ (0, _jsxruntime.jsx)(_negativebox.default, {
                                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_list.RowList, {
                                    children: m.items.map((_param, M)=>{
                                        var { title: g } = _param, v = _object_without_properties(_param, [
                                            "title"
                                        ]);
                                        return /* @__PURE__ */ (0, _jsxruntime.jsx)(_list.Row, _object_spread({
                                            title: g
                                        }, U(v, i)), M);
                                    })
                                })
                            })
                        ]
                    }, s))
            ]
        })
    });
}, $n = (param)=>{
    let { sections: n, extra: t, closeMenu: i, open: r, id: a, disableFocusTrap: p, setDisableFocusTrap: c } = param;
    const { isDarkMode: d, texts: l, t: u } = (0, _hooks.useTheme)(), [f, m] = _react.useState(-1), [s, g] = _react.useState(!1), [v, M] = _react.useReducer(_n, "closed"), O = _react.useRef(null), B = d ? 1 : 0.2, N = (0, _platform.isRunningAcceptanceTest)() ? 0 : _navigationbarcssmistica.BURGER_MENU_ANIMATION_DURATION_MS;
    _react.useEffect(()=>{
        let b;
        return s ? (M("open"), b = setTimeout(()=>M("finishOpen"), N)) : (M("close"), b = setTimeout(()=>M("finishClose"), N)), ()=>clearTimeout(b);
    }, [
        s,
        N
    ]);
    const k = _react.useRef(null);
    return _react.useEffect(()=>{
        var b;
        if (v === "opening") {
            const I = (b = k.current) == null ? void 0 : b.querySelector(`button[aria-label="${l.backNavigationBar || u(_texttokens.backNavigationBar)}"]`);
            I == null || I.focus();
        }
    }, [
        v,
        u,
        l
    ]), /* @__PURE__ */ (0, _jsxruntime.jsx)(_portal.Portal, {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_focustrap.default, {
            disabled: p,
            group: "burger-menu-lock",
            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_reacttransitiongroup.CSSTransition, {
                onEntered: ()=>c(!1),
                onExiting: ()=>c(!0),
                onExited: ()=>{
                    g(!1), m(-1);
                },
                classNames: _navigationbarcssmistica.burgerMenuTransition,
                in: r,
                nodeRef: O,
                timeout: N,
                mountOnEnter: !0,
                unmountOnExit: !0,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)("nav", {
                    className: _navigationbarcssmistica.burgerMenu,
                    style: {
                        boxShadow: `6px 0 4px -4px rgba(0, 0, 0, ${B})`
                    },
                    id: a,
                    ref: O,
                    children: /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                        className: _navigationbarcssmistica.burgerMenuContainer,
                        children: [
                            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                className: _navigationbarcssmistica.burgerMenuContentContainer,
                                style: {
                                    transform: `translate(${s ? "-100vw" : "0"})`
                                },
                                children: v !== "opened" && /* @__PURE__ */ (0, _jsxruntime.jsxs)(_responsivelayout.default, {
                                    children: [
                                        /* @__PURE__ */ (0, _jsxruntime.jsx)(_responsivelayout.ResetResponsiveLayout, {
                                            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_list.RowList, {
                                                children: n.map((_param, R)=>{
                                                    var { title: b, menu: I } = _param, h = _object_without_properties(_param, [
                                                        "title",
                                                        "menu"
                                                    ]);
                                                    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_list.Row, _object_spread({
                                                        title: b
                                                    }, I ? {
                                                        onPress: ()=>{
                                                            g(!0), m(R);
                                                        }
                                                    } : U(h, i)), R);
                                                })
                                            })
                                        }),
                                        t && /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                                            paddingY: 16,
                                            children: t
                                        })
                                    ]
                                })
                            }),
                            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                className: _navigationbarcssmistica.burgerMenuContentContainer,
                                ref: k,
                                style: {
                                    transform: `translate(${s ? "0" : "100vw"})`
                                },
                                children: v !== "closed" && f !== -1 && /* @__PURE__ */ (0, _jsxruntime.jsx)(wn, {
                                    section: n[f],
                                    closeMenu: i,
                                    closeSubMenu: ()=>g(!1)
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
}, Wn = {
    opening: {
        close: "closing",
        finishOpen: "opened"
    },
    opened: {
        close: "closing"
    },
    closing: {
        // If a section was opened while the menu was closing, the menu should be considered as
        // already open. This is useful for example to avoid the new content's fade-in animation
        open: "opened",
        finishClose: "closed"
    },
    closed: {
        open: "opening"
    }
}, Vn = (n, t)=>Wn[n][t] || n, ke = /*#__PURE__*/ _react.createContext({
    isMenuOpen: !1,
    openedSection: -1,
    menuHeight: "0px",
    menuStatus: "closed",
    openSectionMenu: ()=>{},
    closeMenu: ()=>{},
    setMenuHeight: ()=>{},
    setIsMenuHovered: ()=>{},
    setFocusedItem: ()=>{},
    debouncedOpenSectionMenu: ()=>{},
    cancelDebouncedOpenSectionMenu: ()=>{}
}), Gn = (param)=>{
    let { children: n, sections: t, isLargeMenu: i } = param;
    const { isTabletOrSmaller: r } = (0, _hooks.useScreenSize)(), [a, p] = _react.useState(!1), [c, d] = _react.useState("0px"), [l, u] = _react.useReducer(Vn, "closed"), [f, m] = _react.useState(-1), [s, g] = _react.useState(), [v, M] = _react.useState(!1), [O, B] = _react.useState(!1), [N, k] = _react.useState(-1), b = _react.useCallback((S)=>{
        var E;
        m(-1), (E = t == null ? void 0 : t[S]) != null && E.menu ? (B(!0), k(S)) : (M(!1), B(!1));
    }, [
        t
    ]), I = _react.useMemo(()=>(0, _helpers.debounce)(b, yn), [
        b
    ]), h = _react.useCallback(()=>{
        M(!1), B(!1), I.cancel(), m(-1);
    }, [
        I
    ]);
    _react.useEffect(()=>{
        r && h();
    }, [
        r,
        h
    ]), _react.useEffect(()=>{
        !O && !v ? (p(!1), d("0px")) : p(!0);
    }, [
        v,
        O
    ]), _react.useEffect(()=>{
        const S = (0, _platform.isRunningAcceptanceTest)() || !i ? 0 : _navigationbarcssmistica.DESKTOP_MENU_ANIMATION_DURATION_MS;
        let E;
        return a ? (u("open"), E = setTimeout(()=>u("finishOpen"), S)) : (u("close"), E = setTimeout(()=>u("finishClose"), S)), ()=>clearTimeout(E);
    }, [
        a,
        i
    ]), _react.useEffect(()=>{
        l === "closed" && k(-1);
    }, [
        l
    ]);
    const R = _react.useCallback((S)=>{
        (0, _helpers.isEqual)(s, S) || g(S);
    }, [
        s
    ]);
    return _react.useEffect(()=>{
        const S = (A)=>{
            if (s) {
                const x = document.querySelector("[data-navigation-bar-menu-items]"), T = Array.from((x == null ? void 0 : x.querySelectorAll("a,button")) || []), P = T.findIndex((L)=>L.hasAttribute(`data-navigation-bar-menu-item-${s.column}-${s.index}`)), Y = A ? P - 1 : P + 1;
                T[(Y + T.length) % T.length].focus();
            }
        }, E = (A)=>{
            switch(A.key){
                case _keys.DOWN:
                    s && ((0, _dom.cancelEvent)(A), S());
                    break;
                case _keys.UP:
                    s && ((0, _dom.cancelEvent)(A), S(!0));
                    break;
                case _keys.ESC:
                    h();
                    break;
            }
        };
        return document.addEventListener("keydown", E, !1), ()=>{
            document.removeEventListener("keydown", E, !1);
        };
    }, [
        h,
        s
    ]), _react.useEffect(()=>{
        g(void 0);
    }, [
        N
    ]), /* @__PURE__ */ (0, _jsxruntime.jsx)(ke.Provider, {
        value: {
            isMenuOpen: a,
            openedSection: N,
            menuHeight: c,
            menuStatus: l,
            openSectionMenu: b,
            debouncedOpenSectionMenu: (S)=>{
                m(S), I(S);
            },
            cancelDebouncedOpenSectionMenu: (S)=>{
                S === f && (I.cancel(), m(-1));
            },
            closeMenu: h,
            setMenuHeight: d,
            setIsMenuHovered: M,
            setFocusedItem: R
        },
        children: n
    });
}, D = ()=>_react.useContext(ke), Ie = (param)=>{
    let { column: n, columnIndex: t } = param;
    const { setFocusedItem: i, closeMenu: r } = D();
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
        space: 24,
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                medium: !0,
                color: _skincontractcssmistica.vars.colors.textSecondary,
                transform: "uppercase",
                children: n.title
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_stack.default, {
                space: 16,
                role: "list",
                children: n.items.map((_param, c)=>{
                    var { title: a } = _param, p = _object_without_properties(_param, [
                        "title"
                    ]);
                    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        onFocus: ()=>i({
                                column: t,
                                index: c
                            }),
                        onBlur: ()=>i(void 0),
                        role: "listitem",
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_textlink.default, _object_spread_props(_object_spread({
                            underline: "on hover",
                            className: _navigationbarcssmistica.desktopMenuColumnItem,
                            dataAttributes: {
                                [`navigation-bar-menu-item-${t}-${c}`]: "true"
                            }
                        }, U(p, r)), {
                            children: a
                        }))
                    }, c);
                })
            })
        ]
    });
}, Un = (param)=>{
    let { section: n, index: t, isLargeNavigationBar: i, wide: r } = param;
    var b, I;
    const a = _react.useRef(null), [p, c] = _react.useState(!1), d = (0, _platform.isRunningAcceptanceTest)() ? 0 : _navigationbarcssmistica.DESKTOP_MENU_ANIMATION_DURATION_MS, l = i ? _theme.NAVBAR_HEIGHT_DESKTOP_LARGE : _theme.NAVBAR_HEIGHT_DESKTOP, u = 40, { menuStatus: f, isMenuOpen: m, openedSection: s, closeMenu: g, setIsMenuHovered: v, setMenuHeight: M } = D();
    _react.useEffect(()=>{
        if (a.current && m && (a.current.scrollTop = 0), c(!1), m) {
            const h = setTimeout(()=>c(!0), d);
            return ()=>clearTimeout(h);
        }
    }, [
        m,
        s,
        d
    ]);
    const [O, B] = _react.useState(!0);
    _react.useEffect(()=>{
        if (s === t) if (f === "opening") {
            B(!1);
            const h = requestAnimationFrame(()=>B(!0));
            return ()=>cancelAnimationFrame(h);
        } else B(!0);
    }, [
        f,
        s,
        t
    ]), _react.useEffect(()=>{
        f === "closing" && c(!1);
    }, [
        f
    ]);
    const N = ((b = n.menu) == null ? void 0 : b.columns) || [], k = (I = n == null ? void 0 : n.menu) == null ? void 0 : I.content;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        className: _navigationbarcssmistica.desktopOnly,
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_themevariantcontext.ThemeVariant, {
            variant: "default",
            children: s === t && /* @__PURE__ */ (0, _jsxruntime.jsx)(_responsivelayout.ResetResponsiveLayout, {
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: _navigationbarcssmistica.desktopMenuContainer,
                    onMouseEnter: ()=>v(!0),
                    onMouseLeave: ()=>v(!1),
                    style: {
                        // disable pointer events when menu is closing
                        pointerEvents: f === "closed" || f === "closing" ? "none" : void 0,
                        top: l,
                        maxHeight: `calc(100vh - ${l}px - ${u}px)`,
                        overflowY: p ? "auto" : "hidden"
                    },
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)(z, {
                        wide: r,
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                            className: (0, _classnames.default)(_navigationbarcssmistica.desktopMenu, {
                                [_navigationbarcssmistica.desktopMenuContentFadeIn]: O
                            }),
                            ref: (h)=>{
                                h && m && M(`min(${h.scrollHeight}px, calc(100vh - ${l}px - ${u}px))`);
                            },
                            children: k ? typeof k == "function" ? k({
                                closeMenu: g
                            }) : k : /* @__PURE__ */ (0, _jsxruntime.jsx)(_grid.Grid, {
                                rows: 1,
                                columns: 12,
                                gap: [
                                    24,
                                    40
                                ],
                                dataAttributes: {
                                    "navigation-bar-menu-items": "true"
                                },
                                children: N.map((h, R)=>/* @__PURE__ */ (0, _jsxruntime.jsx)(_grid.GridItem, {
                                        columnSpan: 2,
                                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(Ie, {
                                            column: h,
                                            columnIndex: R
                                        })
                                    }, R))
                            })
                        })
                    })
                })
            })
        })
    });
}, Xn = (param)=>{
    let { isLargeNavigationBar: n } = param;
    const t = n ? _theme.NAVBAR_HEIGHT_DESKTOP_LARGE : _theme.NAVBAR_HEIGHT_DESKTOP, { menuHeight: i } = D();
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        className: _navigationbarcssmistica.desktopOnly,
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
            className: _navigationbarcssmistica.desktopMenuWrapper,
            style: {
                top: t
            },
            children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                className: _navigationbarcssmistica.desktopMenuBackgroundContainer,
                style: {
                    height: i
                }
            })
        })
    });
}, Kn = (param)=>{
    let { section: n, isLargeNavigationBar: t, leftPosition: i, index: r } = param;
    var s, g;
    const a = t ? _theme.NAVBAR_HEIGHT_DESKTOP_LARGE : _theme.NAVBAR_HEIGHT_DESKTOP, p = 40, c = ((s = n.menu) == null ? void 0 : s.columns) || [], d = (g = n == null ? void 0 : n.menu) == null ? void 0 : g.content, { openedSection: l, menuStatus: u, setIsMenuHovered: f, closeMenu: m } = D();
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        className: _navigationbarcssmistica.desktopOnly,
        children: r === l && /* @__PURE__ */ (0, _jsxruntime.jsx)(_themevariantcontext.ThemeVariant, {
            variant: "default",
            children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                className: _navigationbarcssmistica.desktopSmallMenuContainer,
                onMouseEnter: ()=>f(!0),
                onMouseLeave: ()=>f(!1),
                style: {
                    // disable pointer events when menu is closing
                    pointerEvents: u === "closed" || u === "closing" ? "none" : void 0,
                    top: a,
                    left: i,
                    maxHeight: `calc(100vh - ${a}px - ${p}px)`
                },
                children: d ? typeof d == "function" ? d({
                    closeMenu: m
                }) : d : /* @__PURE__ */ (0, _jsxruntime.jsx)(_stack.default, {
                    space: 40,
                    dataAttributes: {
                        "navigation-bar-menu-items": "true"
                    },
                    children: c.map((v, M)=>/* @__PURE__ */ (0, _jsxruntime.jsx)(Ie, {
                            column: v,
                            columnIndex: M
                        }, M))
                })
            })
        })
    });
}, qn = (param)=>{
    let { section: n, index: t, selectedIndex: i, isFirstSection: r, isLastSection: a, navigationBarRef: p, variant: c, isLargeNavigationBar: d, desktopLargeMenu: l, wide: u } = param;
    const { texts: f, t: m } = (0, _hooks.useTheme)(), { title: s, menu: g } = n, v = _object_without_properties(n, [
        "title",
        "menu"
    ]), M = _react.useRef(null), [O, B] = _react.useState(0), [N, k] = _react.useState(!1), { isMenuOpen: b, openedSection: I, openSectionMenu: h, debouncedOpenSectionMenu: R, cancelDebouncedOpenSectionMenu: S, closeMenu: E } = D(), A = v.href !== void 0 || v.onPress !== void 0 || v.to !== void 0, x = _react.useCallback((L)=>{
        l || B((()=>{
            var re, ae;
            const { left: ie, right: Oe } = ((re = M.current) == null ? void 0 : re.getBoundingClientRect()) || {
                left: 0,
                right: 0
            }, Ee = (((ae = p.current) == null ? void 0 : ae.getBoundingClientRect().right) || 0) - _navigationbarcssmistica.DESKTOP_SMALL_MENU_WIDTH;
            return ie <= Ee ? ie : Oe - _navigationbarcssmistica.DESKTOP_SMALL_MENU_WIDTH;
        })()), L ? R(t) : h(t);
    }, [
        l,
        t,
        h,
        R,
        p
    ]);
    _react.useEffect(()=>{
        const L = (W)=>{
            switch(W.key){
                case _keys.DOWN:
                    N && ((0, _dom.cancelEvent)(W), x());
                    break;
                case _keys.UP:
                    N && ((0, _dom.cancelEvent)(W), E());
                    break;
            }
        };
        return document.addEventListener("keydown", L, !1), ()=>{
            document.removeEventListener("keydown", L, !1);
        };
    }, [
        t,
        N,
        x,
        E,
        g,
        A
    ]);
    const T = b && I === t, P = _react.useCallback(()=>{
        T ? E() : x();
    }, [
        T,
        x,
        E
    ]), Y = _react.useCallback((L)=>A ? L : {
            onPress: P
        }, [
        A,
        P
    ]);
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
        className: _navigationbarcssmistica.desktopMenuSectionWithArrowWrapper,
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                ref: M,
                className: (0, _classnames.default)(_navigationbarcssmistica.desktopMenuSectionContainer, {
                    [_navigationbarcssmistica.desktopMenuFirstSection]: r,
                    [_navigationbarcssmistica.desktopMenuLastSection]: a
                }),
                onMouseEnter: ()=>x(!0),
                onMouseLeave: ()=>S(t),
                onFocus: ()=>{
                    g && !A && k(!0);
                },
                onBlur: ()=>{
                    g && !A && k(!1);
                },
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_touchable.BaseTouchable, _object_spread_props(_object_spread({}, Y(v)), {
                    "aria-label": A ? void 0 : `${n.title}, ${f.mainNavigationBarOpenSectionMenu || m(_texttokens.mainNavigationBarOpenSectionMenu)}`,
                    "aria-haspopup": !A,
                    "aria-expanded": A ? void 0 : T,
                    className: (0, _classnames.default)(_navigationbarcssmistica.section, {
                        [_navigationbarcssmistica.selectedSectionVariantes[c === "inverse" ? "inverse" : "default"]]: t === i
                    }, _navigationbarcssmistica.textWrapperVariants[c === "inverse" ? "inverse" : "default"]),
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
                        regular: !0,
                        color: "inherit",
                        children: s
                    })
                }))
            }),
            g && /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    A && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        className: _navigationbarcssmistica.desktopMenuSectionArrowContainer,
                        onFocus: ()=>k(!0),
                        onBlur: ()=>k(!1),
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_touchable.BaseTouchable, {
                            className: _navigationbarcssmistica.desktopMenuSectionArrow,
                            "aria-label": `${n.title}, ${f.mainNavigationBarOpenSectionMenu || m(_texttokens.mainNavigationBarOpenSectionMenu)}`,
                            "aria-haspopup": !0,
                            "aria-expanded": T,
                            onPress: ()=>{
                                N && P();
                            },
                            style: {
                                pointerEvents: N ? "auto" : "none",
                                opacity: N ? 1 : 0,
                                // We are using the same chevron as in ButtonLink, and that svg has
                                // some extra space on the left that we want to ignore in this case
                                marginTop: -2
                            },
                            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(Dn, {
                                size: 8,
                                style: {
                                    transform: `rotate(${T ? -90 : 90}deg)`
                                }
                            })
                        })
                    }),
                    l ? /* @__PURE__ */ (0, _jsxruntime.jsx)(Un, {
                        section: n,
                        isLargeNavigationBar: d,
                        index: t,
                        wide: u
                    }) : /* @__PURE__ */ (0, _jsxruntime.jsx)(Kn, {
                        section: n,
                        isLargeNavigationBar: d,
                        leftPosition: O,
                        index: t
                    })
                ]
            })
        ]
    });
}, jn = (param)=>{
    let { sections: n, selectedIndex: t, navigationBarRef: i, variant: r, isLargeNavigationBar: a, hasRightContent: p, desktopLargeMenu: c, wide: d } = param;
    const { openSectionMenu: l, openedSection: u, closeMenu: f } = D();
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("nav", {
        className: (0, _classnames.default)(_navigationbarcssmistica.desktopOnly, _navigationbarcssmistica.mainNavBarSectionsContainer),
        style: {
            paddingLeft: a ? 0 : 48,
            paddingRight: !a && p ? 136 : 0
        },
        onMouseEnter: ()=>{
            u !== -1 && l(u);
        },
        onMouseLeave: f,
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_inline.default, {
            space: 32,
            children: n.map((m, s)=>/* @__PURE__ */ (0, _jsxruntime.jsx)(qn, {
                    index: s,
                    selectedIndex: t,
                    navigationBarRef: i,
                    isFirstSection: s === 0,
                    isLastSection: s === n.length - 1,
                    variant: r,
                    section: m,
                    isLargeNavigationBar: a,
                    desktopLargeMenu: c,
                    wide: d
                }, s))
        })
    });
}, zn = (param)=>{
    let { children: n, isLargeNavigationBar: t, desktopLargeMenu: i } = param;
    const { menuHeight: r } = D(), a = t ? _theme.NAVBAR_HEIGHT_DESKTOP_LARGE : _theme.NAVBAR_HEIGHT_DESKTOP;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        className: _navigationbarcssmistica.mainNavigationBarContentWrapper,
        style: i ? {
            clipPath: `rect(0 100% calc(${a}px + ${r}) 0)`,
            WebkitClipPath: `rect(0 100% calc(${a}px + ${r}) 0)`
        } : void 0,
        children: n
    });
}, xt = (param)=>{
    let { sections: n = [], selectedIndex: t, right: i, variant: r = "default", topFixed: a = !0, withBorder: p = !0, burgerMenuExtra: c, logo: d, large: l = !1, desktopLargeMenu: u = !1, wide: f = !1 } = param;
    const { texts: m, t: s } = (0, _hooks.useTheme)(), g = _react.useId(), { isTabletOrSmaller: v } = (0, _hooks.useScreenSize)(), M = d || /* @__PURE__ */ (0, _jsxruntime.jsx)(_logo.Logo, {
        size: {
            mobile: 40,
            desktop: 48
        }
    }), O = l && n.length > 0, [B, N] = _react.useState(!1), [k, b] = _react.useState(!0), I = _react.useRef(null), h = (0, _modalcontextprovider.useSetModalState)(), R = /* @__PURE__ */ (0, _jsxruntime.jsx)(jn, {
        sections: n,
        selectedIndex: t,
        navigationBarRef: I,
        variant: r,
        hasRightContent: !!i,
        isLargeNavigationBar: O,
        desktopLargeMenu: u,
        wide: f
    }), S = ()=>{
        N(!0), h({
            isModalOpen: !0
        });
    }, E = ()=>{
        N(!1), h({
            isModalOpen: !1
        });
    }, A = n.length > 1, x = /* @__PURE__ */ (0, _jsxruntime.jsxs)(_themevariantcontext.ThemeVariant, {
        variant: r,
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsxs)(oe, {
                topFixed: a,
                withBorder: p,
                isBurgerMenuOpen: B,
                variant: r,
                dataAttributes: {
                    "component-name": "MainNavigationBar"
                },
                children: [
                    u && /* @__PURE__ */ (0, _jsxruntime.jsx)(Xn, {
                        isLargeNavigationBar: O
                    }),
                    /* @__PURE__ */ (0, _jsxruntime.jsx)(zn, {
                        isLargeNavigationBar: O,
                        desktopLargeMenu: u,
                        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(z, {
                            wide: f,
                            children: [
                                /* @__PURE__ */ (0, _jsxruntime.jsxs)(G, {
                                    ref: I,
                                    right: i,
                                    expandRightContent: O,
                                    children: [
                                        A && /* @__PURE__ */ (0, _jsxruntime.jsx)(_touchable.default, {
                                            className: _navigationbarcssmistica.burgerMenuButton,
                                            "aria-live": "polite",
                                            "aria-label": B ? m.closeNavigationMenu || s(_texttokens.closeNavigationMenu) : m.openNavigationMenu || s(_texttokens.openNavigationMenu),
                                            "aria-expanded": B,
                                            "aria-controls": g,
                                            onPress: B ? E : S,
                                            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(Pn, {
                                                isOpen: B
                                            })
                                        }),
                                        /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                            className: _navigationbarcssmistica.logoContainer,
                                            children: M
                                        }),
                                        !O && R
                                    ]
                                }),
                                O && /* @__PURE__ */ (0, _jsxruntime.jsx)(G, {
                                    desktopOnly: !0,
                                    children: R
                                })
                            ]
                        })
                    })
                ]
            }),
            a && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                className: O ? _navigationbarcssmistica.spacerLarge : _navigationbarcssmistica.spacer
            })
        ]
    });
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(Gn, {
        sections: n,
        isLargeMenu: u,
        children: v ? /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                /* @__PURE__ */ (0, _jsxruntime.jsx)(_focustrap.default, {
                    disabled: k,
                    group: "burger-menu-lock",
                    children: x
                }),
                /* @__PURE__ */ (0, _jsxruntime.jsx)($n, {
                    open: B,
                    id: g,
                    sections: n,
                    extra: c,
                    closeMenu: E,
                    disableFocusTrap: k,
                    setDisableFocusTrap: b
                })
            ]
        }) : x
    });
}, Tt = (param)=>{
    let { logo: n, right: t, variant: i = "default", topFixed: r = !0, withBorder: a = !0, wide: p = !1 } = param;
    return n = n !== null && n !== void 0 ? n : /* @__PURE__ */ (0, _jsxruntime.jsx)(_logo.Logo, {
        size: {
            mobile: 40,
            desktop: 48
        }
    }), /* @__PURE__ */ (0, _jsxruntime.jsxs)(_themevariantcontext.ThemeVariant, {
        variant: i,
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)(oe, {
                topFixed: r,
                withBorder: a,
                variant: i,
                dataAttributes: {
                    "component-name": "FunnelNavigationBar"
                },
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(z, {
                    wide: p,
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_gridlayout.default, {
                        template: "10",
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(G, {
                            right: t,
                            expandRightContent: !0,
                            children: n
                        })
                    })
                })
            }),
            r && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                className: _navigationbarcssmistica.spacer
            })
        ]
    });
}, Lt = (param)=>{
    let { children: n } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        className: _navigationbarcssmistica.lineHeightFix,
        "data-component-name": "NavigationBarActionGroup",
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_inline.default, {
            space: 24,
            alignItems: "center",
            children: n
        })
    });
}, yt = (_param)=>{
    var { children: n } = _param, t = _object_without_properties(_param, [
        "children"
    ]);
    const i = (0, _themevariantcontext.useIsInverseOrMediaVariant)();
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_touchable.BaseTouchable, _object_spread_props(_object_spread({}, t), {
        className: (0, _classnames.default)(_navigationbarcssmistica.navigationBarAction, _navigationbarcssmistica.lineHeightFix, _navigationbarcssmistica.textWrapperVariants[i ? "inverse" : "default"]),
        dataAttributes: {
            "component-name": "NavigationBarAction"
        },
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_inline.default, {
            space: 16,
            alignItems: "center",
            children: _react.Children.map(n, (r)=>typeof r == "string" ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                    regular: !0,
                    color: "inherit",
                    children: r
                }) : r)
        })
    }));
};
