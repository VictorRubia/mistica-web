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
    Menu: function() {
        return Je;
    },
    MenuItem: function() {
        return qe;
    },
    MenuSection: function() {
        return Ve;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _keys = require("./utils/keys.js");
const _dom = require("./utils/dom.js");
const _overlay = /*#__PURE__*/ _interop_require_default(require("./overlay.js"));
const _menucssmistica = require("./menu.css-mistica.js");
const _hooks = require("./hooks.js");
const _portal = require("./portal.js");
const _box = /*#__PURE__*/ _interop_require_default(require("./box.js"));
const _inline = /*#__PURE__*/ _interop_require_default(require("./inline.js"));
const _touchable = /*#__PURE__*/ _interop_require_default(require("./touchable.js"));
const _text = require("./text.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _divider = /*#__PURE__*/ _interop_require_default(require("./divider.js"));
const _checkbox = /*#__PURE__*/ _interop_require_default(require("./checkbox.js"));
const _reacttransitiongroup = require("react-transition-group");
const _common = require("./utils/common.js");
const _css = require("./utils/css.js");
const _platform = require("./utils/platform.js");
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
const ke = 120, Z = /*#__PURE__*/ _react.createContext({
    focusedItem: null,
    isMenuOpen: !1,
    setFocusedItem: ()=>{},
    closeMenu: ()=>{}
}), Ne = ()=>_react.useContext(Z), y = (i)=>i ? Array.from(i.querySelectorAll("[role=menuitem],[role=menuitemcheckbox]")) : [], Ae = (i, d)=>{
    if (!d) return null;
    const f = y(i).indexOf(d);
    return f < 0 ? null : f;
}, qe = (param)=>{
    let { label: i, Icon: d, destructive: f, disabled: a, onPress: C, controlType: r, checked: p, dataAttributes: o } = param;
    const { focusedItem: k, setFocusedItem: c, closeMenu: N, isMenuOpen: u } = Ne(), m = _react.useRef(null), x = f ? _skincontractcssmistica.vars.colors.textLinkDanger : _skincontractcssmistica.vars.colors.neutralHigh, h = m == null ? void 0 : m.current, A = (h == null ? void 0 : h.closest("[role=menu]")) || null, t = Ae(A, h), M = _object_spread({
        testid: "MenuItem"
    }, o), I = ()=>r === "checkbox" ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_checkbox.default, {
            ref: m,
            name: i,
            checked: p,
            onChange: ()=>{
                u && t !== null && (C(t), N());
            },
            disabled: a,
            role: "menuitemcheckbox",
            dataAttributes: M,
            render: (param)=>{
                let { controlElement: D } = param;
                return /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                    paddingX: 8,
                    paddingY: 12,
                    children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_inline.default, {
                        space: "between",
                        alignItems: "center",
                        children: [
                            /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                                className: _menucssmistica.itemContent,
                                children: [
                                    d && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                        className: _menucssmistica.iconContainer,
                                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(d, {
                                            size: 24,
                                            color: x
                                        })
                                    }),
                                    /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
                                        regular: !0,
                                        color: x,
                                        children: i
                                    })
                                ]
                            }),
                            /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                                paddingLeft: 16,
                                children: D
                            })
                        ]
                    })
                });
            }
        }) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_touchable.default, {
            ref: m,
            onPress: ()=>{
                u && t !== null && (C(t), N());
            },
            disabled: a,
            role: "menuitem",
            dataAttributes: M,
            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                paddingX: 8,
                paddingY: 12,
                children: /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                    className: _menucssmistica.itemContent,
                    children: [
                        d && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                            className: _menucssmistica.iconContainer,
                            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(d, {
                                size: 24,
                                color: x
                            })
                        }),
                        /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
                            regular: !0,
                            color: x,
                            children: i
                        })
                    ]
                })
            })
        });
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        className: (0, _classnames.default)(_menucssmistica.menuItem, {
            [_menucssmistica.menuItemEnabled]: !a,
            [_menucssmistica.menuItemDisabled]: a,
            [_menucssmistica.menuItemHovered]: !a && t !== null && k === t
        }),
        onMouseMove: ()=>c(a ? null : t),
        onMouseLeave: ()=>c(null),
        children: I()
    });
}, Ve = (param)=>{
    let { children: i } = param;
    return i ? /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            i,
            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                className: _menucssmistica.menuSectionDivider,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_divider.default, {})
            })
        ]
    }) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {});
}, J = 12, Q = 8, Je = (param)=>{
    let { renderTarget: i, renderMenu: d, width: f, position: a = "left", dataAttributes: C } = param;
    const [r, p] = _react.useState(!1), [o, k] = _react.useState(null), [c, N] = _react.useState(null), [u, m] = _react.useState(null), [x, h] = _react.useState(!1), A = _react.useRef(null), [t, M] = _react.useState(null), I = (0, _hooks.useWindowSize)();
    _react.useEffect(()=>{
        const l = o == null ? void 0 : o.getBoundingClientRect();
        if (!c || !l || !r) return;
        const { top: n, right: O, left: g, bottom: R } = l, T = c.scrollHeight, v = a === "left" ? g : void 0, F = a === "right" ? I.width - O : void 0, $ = n - Q, B = R + Q, H = I.height - B - J, P = $ - J, z = H > T, U = P > T, te = z || !U && H > P;
        M(te ? {
            left: v,
            right: F,
            top: `${B}px`,
            bottom: "auto",
            maxHeight: z ? void 0 : H,
            transformOrigin: "center top"
        } : {
            left: v,
            right: F,
            top: "auto",
            bottom: `${I.height - $}px`,
            maxHeight: U ? void 0 : P,
            transformOrigin: "center bottom"
        });
    }, [
        a,
        r,
        c,
        o,
        f,
        I
    ]);
    const D = _react.useMemo(()=>({
            ref: k,
            onPress: ()=>{
                p(!r);
            }
        }), [
        k,
        r
    ]), ee = {
        ref: (0, _common.combineRefs)(N, A),
        className: _menucssmistica.menuContainer,
        close: ()=>p(!1)
    }, _ = _react.useCallback(()=>{
        const n = y(c).findIndex((O)=>!O.getAttribute("aria-disabled"));
        m(n < 0 ? null : n);
    }, [
        c
    ]), L = _react.useCallback((l)=>{
        var T;
        const n = y(c);
        l && n.reverse();
        const O = u === null ? -1 : l ? n.length - 1 - u : u;
        let g = n.findIndex((v, F)=>!v.getAttribute("aria-disabled") && F > O);
        g === -1 && (g = n.findIndex((v)=>!v.getAttribute("aria-disabled")));
        const R = l && g !== -1 ? n.length - 1 - g : g;
        m(R < 0 ? null : R), (T = n[g]) == null || T.focus();
    }, [
        u,
        c
    ]);
    return _react.useEffect(()=>{
        r ? x && c && (_(), h(!1)) : m(null);
    }, [
        r,
        _,
        x,
        c
    ]), _react.useEffect(()=>{
        const l = (n)=>{
            if (r) switch(n.key){
                case _keys.RIGHT:
                case _keys.DOWN:
                    (0, _dom.cancelEvent)(n), L();
                    break;
                case _keys.LEFT:
                case _keys.UP:
                    (0, _dom.cancelEvent)(n), L(!0);
                    break;
                case _keys.ESC:
                    p(!1);
                    break;
                case _keys.SPACE:
                case _keys.ENTER:
                    (0, _dom.cancelEvent)(n), u !== null && y(c)[u].click();
                    break;
                case _keys.TAB:
                    (0, _dom.cancelEvent)(n);
                    break;
            }
            else switch(n.key){
                case _keys.ENTER:
                case _keys.SPACE:
                    h(!0);
                    break;
                case _keys.DOWN:
                    o === document.activeElement && (h(!0), p(!0));
                    break;
            }
        };
        return document.addEventListener("keydown", l, !1), ()=>{
            document.removeEventListener("keydown", l, !1);
        };
    }), _react.useEffect(()=>{
        o == null || o.setAttribute("aria-haspopup", "menu"), o == null || o.setAttribute("aria-expanded", String(r));
    }, [
        o,
        r
    ]), /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", _object_spread_props(_object_spread({}, (0, _dom.getPrefixedDataAttributes)(C, "Menu")), {
        children: [
            i(_object_spread_props(_object_spread({}, D), {
                isMenuOpen: r
            })),
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_portal.Portal, {
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_reacttransitiongroup.CSSTransition, {
                    in: r,
                    nodeRef: A,
                    timeout: (0, _platform.isRunningAcceptanceTest)() ? 0 : ke,
                    classNames: _menucssmistica.menuTransitionClasses,
                    mountOnEnter: !0,
                    unmountOnExit: !0,
                    onExit: ()=>o == null ? void 0 : o.focus(),
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_overlay.default, {
                        onPress: (l)=>{
                            (0, _dom.cancelEvent)(l), p(!1);
                        },
                        disableScroll: !0,
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                            style: _object_spread({}, (0, _css.applyCssVars)(_object_spread({}, t ? _object_spread({
                                [_menucssmistica.vars.top]: t.top,
                                [_menucssmistica.vars.bottom]: t.bottom,
                                [_menucssmistica.vars.transformOrigin]: t.transformOrigin
                            }, t.left !== void 0 && {
                                [_menucssmistica.vars.left]: `${t.left}px`
                            }, t.right !== void 0 && {
                                [_menucssmistica.vars.right]: `${t.right}px`
                            }, t.maxHeight !== void 0 && {
                                [_menucssmistica.vars.maxHeight]: `${t.maxHeight}px`
                            }, f !== void 0 && {
                                [_menucssmistica.vars.width]: f ? `${f}px` : ""
                            }) : {}))),
                            role: "menu",
                            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(Z.Provider, {
                                value: {
                                    isMenuOpen: r,
                                    focusedItem: u,
                                    setFocusedItem: m,
                                    closeMenu: ()=>p(!1)
                                },
                                children: d(ee)
                            })
                        })
                    })
                })
            })
        ]
    }));
};
