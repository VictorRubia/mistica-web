"use client";
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
import { jsxs as v, jsx as o } from "react/jsx-runtime";
import * as i from "react";
import { Content as T } from "./list.js";
import w from "./icons/icon-chevron.js";
import A from "./box.js";
import { itemContent as D, touchableBackgroundInverse as P, touchableBackground as V, rightContentContainer as E, chevronContainer as _, panelTransitionClasses as k, panelContainer as L, panel as M, accordionItem as X, boxed as j } from "./accordion.css-mistica.js";
import q from "./stack.js";
import { BaseTouchable as z } from "./touchable.js";
import F from "classnames";
import { vars as g } from "./skins/skin-contract.css-mistica.js";
import { getPrefixedDataAttributes as R } from "./utils/dom.js";
import H from "./divider.js";
import { InternalBoxed as U } from "./boxed.js";
import { useIsInverseOrMediaVariant as G } from "./theme-variant-context.js";
import { CSSTransition as J } from "react-transition-group";
import { isRunningAcceptanceTest as K } from "./utils/platform.js";
import Q from "./inline.js";
const N = 400, b = /*#__PURE__*/ i.createContext({
    index: [],
    toggle: ()=>{}
}), W = ()=>i.useContext(b), B = (param)=>{
    let { value: n, defaultValue: r, onChange: t, singleOpen: c } = param;
    const s = n !== void 0, d = (e)=>e === void 0 ? [] : typeof e == "number" ? [
            e
        ] : e, [a, m] = i.useState(d(r));
    i.useEffect(()=>{
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
}, S = /*#__PURE__*/ i.forwardRef((_param, m)=>{
    var { content: n, dataAttributes: r, trackingEvent: t, right: c, "aria-label": s, "aria-labelledby": d } = _param, a = _object_without_properties(_param, [
        "content",
        "dataAttributes",
        "trackingEvent",
        "right",
        "aria-label",
        "aria-labelledby"
    ]);
    const u = i.useRef(null), f = i.useRef(null), { index: e, toggle: l } = W(), p = G(), I = i.useId(), C = i.useId(), [x, y] = i.useState(), h = x !== void 0 && (e == null ? void 0 : e.includes(x));
    return i.useEffect(()=>{
        y(Y(f.current));
    }, []), /* @__PURE__ */ v("div", _object_spread_props(_object_spread({
        ref: f
    }, R(_object_spread_props(_object_spread({}, r), {
        "accordion-item": !0
    }))), {
        children: [
            /* @__PURE__ */ o(z, {
                ref: m,
                className: F(D, p ? P : V),
                onPress: ()=>{
                    x !== void 0 && l(x);
                },
                trackingEvent: t,
                "aria-expanded": h,
                "aria-controls": C,
                "aria-label": s,
                "aria-labelledby": d,
                children: /* @__PURE__ */ o(A, {
                    paddingX: 16,
                    children: /* @__PURE__ */ o(T, _object_spread_props(_object_spread({
                        labelId: I
                    }, a), {
                        right: (param)=>{
                            let { centerY: O } = param;
                            return /* @__PURE__ */ v(Q, {
                                space: 4,
                                alignItems: O ? "center" : void 0,
                                className: E,
                                children: [
                                    c,
                                    /* @__PURE__ */ o("div", {
                                        className: _,
                                        children: /* @__PURE__ */ o(w, {
                                            size: 20,
                                            transitionDuration: N,
                                            direction: h ? "up" : "down",
                                            color: p ? g.colors.inverse : h ? g.colors.neutralHigh : g.colors.neutralMedium
                                        })
                                    })
                                ]
                            });
                        }
                    }))
                })
            }),
            /* @__PURE__ */ o(J, {
                in: h,
                timeout: K() ? 0 : N,
                nodeRef: u,
                classNames: k,
                mountOnEnter: !0,
                unmountOnExit: !0,
                children: /* @__PURE__ */ o("div", {
                    className: L,
                    ref: u,
                    children: /* @__PURE__ */ o("div", {
                        className: M,
                        role: "region",
                        "aria-labelledby": I,
                        id: C,
                        children: /* @__PURE__ */ o(A, {
                            paddingX: 16,
                            paddingBottom: 16,
                            children: n
                        })
                    })
                })
            })
        ]
    }));
}), pe = /*#__PURE__*/ i.forwardRef((_param, c)=>{
    var { dataAttributes: n, role: r } = _param, t = _object_without_properties(_param, [
        "dataAttributes",
        "role"
    ]);
    return /* @__PURE__ */ o("div", {
        role: r,
        className: X,
        children: /* @__PURE__ */ o(S, _object_spread_props(_object_spread({}, t), {
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
    }), f = i.Children.toArray(n).filter(Boolean), e = f.length - 1;
    return /* @__PURE__ */ o(b.Provider, {
        value: {
            index: m,
            toggle: u
        },
        children: /* @__PURE__ */ o("div", _object_spread_props(_object_spread({
            role: a
        }, R(_object_spread_props(_object_spread({}, r), {
            accordion: !0
        }), "Accordion")), {
            children: f.map((l, p)=>/* @__PURE__ */ v(i.Fragment, {
                    children: [
                        l,
                        p < e && /* @__PURE__ */ o(A, {
                            paddingX: 16,
                            children: /* @__PURE__ */ o(H, {})
                        })
                    ]
                }, p))
        }))
    });
}, xe = /*#__PURE__*/ i.forwardRef((_param, c)=>{
    var { dataAttributes: n, isInverse: r } = _param, t = _object_without_properties(_param, [
        "dataAttributes",
        "isInverse"
    ]);
    return /* @__PURE__ */ o(U, {
        overflow: "visible",
        className: j,
        variant: r ? "inverse" : "default",
        ref: c,
        dataAttributes: _object_spread({
            "component-name": "BoxedAccordionItem"
        }, n),
        children: /* @__PURE__ */ o(S, _object_spread({}, t))
    });
}), he = (param)=>{
    let { children: n, dataAttributes: r, index: t, defaultIndex: c, onChange: s, singleOpen: d, role: a } = param;
    const [m, u] = B({
        value: t,
        defaultValue: c,
        onChange: s,
        singleOpen: d
    });
    return /* @__PURE__ */ o(b.Provider, {
        value: {
            index: m,
            toggle: u
        },
        children: /* @__PURE__ */ o(q, {
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
export { Ie as Accordion, pe as AccordionItem, he as BoxedAccordion, xe as BoxedAccordionItem };
