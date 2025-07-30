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
    Accordion: function() {
        return Ie;
    },
    AccordionItem: function() {
        return pe;
    },
    BoxedAccordion: function() {
        return he;
    },
    BoxedAccordionItem: function() {
        return xe;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _list = require("./list.js");
const _iconchevron = /*#__PURE__*/ _interop_require_default(require("./icons/icon-chevron.js"));
const _box = /*#__PURE__*/ _interop_require_default(require("./box.js"));
const _accordioncssmistica = require("./accordion.css-mistica.js");
const _stack = /*#__PURE__*/ _interop_require_default(require("./stack.js"));
const _touchable = require("./touchable.js");
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _dom = require("./utils/dom.js");
const _divider = /*#__PURE__*/ _interop_require_default(require("./divider.js"));
const _boxed = require("./boxed.js");
const _themevariantcontext = require("./theme-variant-context.js");
const _reacttransitiongroup = require("react-transition-group");
const _platform = require("./utils/platform.js");
const _inline = /*#__PURE__*/ _interop_require_default(require("./inline.js"));
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
const N = 400, b = /*#__PURE__*/ _react.createContext({
    index: [],
    toggle: ()=>{}
}), W = ()=>_react.useContext(b), B = (param)=>{
    let { value: n, defaultValue: r, onChange: t, singleOpen: c } = param;
    const s = n !== void 0, d = (e)=>e === void 0 ? [] : typeof e == "number" ? [
            e
        ] : e, [a, m] = _react.useState(d(r));
    _react.useEffect(()=>{
        if (a.length > 1 && c) {
            const e = [
                ...a
            ];
            e.splice(1), m(e);
        }
    }, [
        c,
        a
    ]);
    const u = (e, l)=>{
        if (!l) return [
            e
        ];
        const p = l.indexOf(e);
        let I = [
            ...l
        ];
        return p === -1 ? c ? I = [
            e
        ] : I.push(e) : I.splice(p, 1), I;
    }, f = (e)=>{
        if (s || m(u(e, a)), t) {
            const l = (s ? d(n) : a).includes(e);
            t(e, !l);
        }
    };
    return s ? [
        d(n),
        f
    ] : [
        a,
        f
    ];
}, Y = (n)=>{
    const r = n == null ? void 0 : n.closest("[data-accordion]");
    if (r) return Array.from(r.querySelectorAll("[data-accordion-item]")).filter((t)=>t.closest("[data-accordion]") === r).findIndex((t)=>t === n);
}, S = /*#__PURE__*/ _react.forwardRef((_param, m)=>{
    var { content: n, dataAttributes: r, trackingEvent: t, right: c, "aria-label": s, "aria-labelledby": d } = _param, a = _object_without_properties(_param, [
        "content",
        "dataAttributes",
        "trackingEvent",
        "right",
        "aria-label",
        "aria-labelledby"
    ]);
    const u = _react.useRef(null), f = _react.useRef(null), { index: e, toggle: l } = W(), p = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), I = _react.useId(), C = _react.useId(), [x, y] = _react.useState(), h = x !== void 0 && (e == null ? void 0 : e.includes(x));
    return _react.useEffect(()=>{
        y(Y(f.current));
    }, []), /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", _object_spread_props(_object_spread({
        ref: f
    }, (0, _dom.getPrefixedDataAttributes)(_object_spread_props(_object_spread({}, r), {
        "accordion-item": !0
    }))), {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_touchable.BaseTouchable, {
                ref: m,
                className: (0, _classnames.default)(_accordioncssmistica.itemContent, p ? _accordioncssmistica.touchableBackgroundInverse : _accordioncssmistica.touchableBackground),
                onPress: ()=>{
                    x !== void 0 && l(x);
                },
                trackingEvent: t,
                "aria-expanded": h,
                "aria-controls": C,
                "aria-label": s,
                "aria-labelledby": d,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                    paddingX: 16,
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_list.Content, _object_spread_props(_object_spread({
                        labelId: I
                    }, a), {
                        right: (param)=>{
                            let { centerY: O } = param;
                            return /* @__PURE__ */ (0, _jsxruntime.jsxs)(_inline.default, {
                                space: 4,
                                alignItems: O ? "center" : void 0,
                                className: _accordioncssmistica.rightContentContainer,
                                children: [
                                    c,
                                    /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                        className: _accordioncssmistica.chevronContainer,
                                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconchevron.default, {
                                            size: 20,
                                            transitionDuration: N,
                                            direction: h ? "up" : "down",
                                            color: p ? _skincontractcssmistica.vars.colors.inverse : h ? _skincontractcssmistica.vars.colors.neutralHigh : _skincontractcssmistica.vars.colors.neutralMedium
                                        })
                                    })
                                ]
                            });
                        }
                    }))
                })
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_reacttransitiongroup.CSSTransition, {
                in: h,
                timeout: (0, _platform.isRunningAcceptanceTest)() ? 0 : N,
                nodeRef: u,
                classNames: _accordioncssmistica.panelTransitionClasses,
                mountOnEnter: !0,
                unmountOnExit: !0,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: _accordioncssmistica.panelContainer,
                    ref: u,
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        className: _accordioncssmistica.panel,
                        role: "region",
                        "aria-labelledby": I,
                        id: C,
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                            paddingX: 16,
                            paddingBottom: 16,
                            children: n
                        })
                    })
                })
            })
        ]
    }));
}), pe = /*#__PURE__*/ _react.forwardRef((_param, c)=>{
    var { dataAttributes: n, role: r } = _param, t = _object_without_properties(_param, [
        "dataAttributes",
        "role"
    ]);
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        role: r,
        className: _accordioncssmistica.accordionItem,
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(S, _object_spread_props(_object_spread({}, t), {
            ref: c,
            dataAttributes: _object_spread({
                "component-name": "AccordionItem"
            }, n)
        }))
    });
}), Ie = (param)=>{
    let { children: n, dataAttributes: r, index: t, defaultIndex: c, onChange: s, singleOpen: d, role: a } = param;
    const [m, u] = B({
        value: t,
        defaultValue: c,
        onChange: s,
        singleOpen: d
    }), f = _react.Children.toArray(n).filter(Boolean), e = f.length - 1;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(b.Provider, {
        value: {
            index: m,
            toggle: u
        },
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({
            role: a
        }, (0, _dom.getPrefixedDataAttributes)(_object_spread_props(_object_spread({}, r), {
            accordion: !0
        }), "Accordion")), {
            children: f.map((l, p)=>/* @__PURE__ */ (0, _jsxruntime.jsxs)(_react.Fragment, {
                    children: [
                        l,
                        p < e && /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                            paddingX: 16,
                            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_divider.default, {})
                        })
                    ]
                }, p))
        }))
    });
}, xe = /*#__PURE__*/ _react.forwardRef((_param, c)=>{
    var { dataAttributes: n, isInverse: r } = _param, t = _object_without_properties(_param, [
        "dataAttributes",
        "isInverse"
    ]);
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_boxed.InternalBoxed, {
        overflow: "visible",
        className: _accordioncssmistica.boxed,
        variant: r ? "inverse" : "default",
        ref: c,
        dataAttributes: _object_spread({
            "component-name": "BoxedAccordionItem"
        }, n),
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(S, _object_spread({}, t))
    });
}), he = (param)=>{
    let { children: n, dataAttributes: r, index: t, defaultIndex: c, onChange: s, singleOpen: d, role: a } = param;
    const [m, u] = B({
        value: t,
        defaultValue: c,
        onChange: s,
        singleOpen: d
    });
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(b.Provider, {
        value: {
            index: m,
            toggle: u
        },
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_stack.default, {
            space: 16,
            role: a,
            dataAttributes: _object_spread({
                "component-name": "BoxedAccordion",
                accordion: !0
            }, r),
            children: n
        })
    });
};
