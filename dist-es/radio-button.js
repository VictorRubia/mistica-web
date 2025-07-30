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
import { jsx as i, jsxs as F } from "react/jsx-runtime";
import * as r from "react";
import { UP as O, LEFT as T, DOWN as w, RIGHT as G, SPACE as $ } from "./utils/keys.js";
import { useControlProps as j } from "./form-context.js";
import { combineRefs as K } from "./utils/common.js";
import { Text3 as A } from "./text.js";
import H from "./inline.js";
import U from "classnames";
import { useTheme as W } from "./hooks.js";
import { getPrefixedDataAttributes as E } from "./utils/dom.js";
import { inverseOuterCircleVariants as z, outerCircleVariants as J, disabled as B, inverseInnerCircleVariant as L, innerCircleVariant as M, radioButtonContainerDisabled as Q, radioButton as X } from "./radio-button.css-mistica.js";
import { useIsInverseVariant as Y } from "./theme-variant-context.js";
const q = /*#__PURE__*/ r.createContext({
    id: "",
    disabled: !1,
    selectedValue: null,
    focusableValue: null,
    select: ()=>{},
    selectNext: ()=>{},
    selectPrev: ()=>{}
}), Z = ()=>r.useContext(q), _ = (_param)=>{
    var { value: e, id: s, dataAttributes: R, "aria-labelledby": p, "aria-label": C } = _param, m = _object_without_properties(_param, [
        "value",
        "id",
        "dataAttributes",
        "aria-labelledby",
        "aria-label"
    ]);
    const { id: b, disabled: n, selectedValue: h, focusableValue: g, select: u, selectNext: y, selectPrev: V } = Z(), [o, I] = r.useState(!1), k = r.useId(), v = p || k, a = r.useRef(null), t = e === h, { isIos: x } = W(), f = Y(), c = n ? void 0 : g === e || o && !h ? 0 : -1;
    r.useEffect(()=>{
        var D;
        const l = (D = document.getElementById(b)) == null ? void 0 : D.querySelector("[role=radio]");
        I(l === a.current);
    }, [
        b
    ]);
    const d = (l)=>{
        switch(l.key){
            case $:
                u(e), l.preventDefault(), l.stopPropagation();
                break;
            case G:
            case w:
                y(), l.preventDefault(), l.stopPropagation();
                break;
            case T:
            case O:
                V(), l.preventDefault(), l.stopPropagation();
                break;
        }
    }, P = x ? t ? "checkedIos" : "ios" : t ? "checked" : "default", S = t ? "checked" : "default", N = /* @__PURE__ */ i("div", {
        className: U(f ? z[P] : J[P], {
            [B]: n
        }),
        children: !x && /* @__PURE__ */ i("div", {
            className: f ? L[S] : M[S]
        })
    });
    return /* @__PURE__ */ i("span", _object_spread_props(_object_spread({
        ref: a,
        id: s,
        tabIndex: c,
        role: "radio",
        "data-value": e,
        "aria-checked": t,
        "aria-disabled": n,
        "aria-label": C,
        "aria-labelledby": C ? void 0 : v,
        onClick: (l)=>{
            l.stopPropagation(), n || u(e);
        },
        onKeyDown: n ? void 0 : d,
        className: n ? Q : X
    }, E(R, "RadioButton")), {
        children: m.render ? m.render({
            controlElement: N,
            disabled: !!n,
            checked: t,
            labelId: v
        }) : /* @__PURE__ */ F(H, {
            space: 16,
            children: [
                /* @__PURE__ */ i(A, {
                    regular: !0,
                    as: "div",
                    children: /* @__PURE__ */ i("div", {
                        style: {
                            position: "relative",
                            top: -2
                        },
                        children: N
                    })
                }),
                /* @__PURE__ */ i(A, {
                    regular: !0,
                    as: "div",
                    id: v,
                    children: /* @__PURE__ */ i("span", {
                        className: n ? B : "",
                        children: m.children
                    })
                })
            ]
        })
    }));
}, ue = (e)=>{
    var _ref;
    const { value: s, defaultValue: R, onChange: p, focusableRef: C, disabled: m } = j({
        name: e.name,
        value: e.value,
        defaultValue: e.defaultValue,
        onChange: e.onChange,
        disabled: e.disabled
    }), b = r.useId(), n = typeof s < "u", [h, g] = r.useState((_ref = s !== null && s !== void 0 ? s : R) !== null && _ref !== void 0 ? _ref : "");
    r.useEffect(()=>{
        s !== void 0 && g(s);
    }, [
        s
    ]);
    const u = (a)=>{
        n || g(a), p(a);
    }, [y, V] = r.useState(null), o = r.useRef(null), I = ()=>{
        if (o.current) {
            const a = o.current.querySelector("[role=radio][aria-checked=true]"), t = Array.from(o.current.querySelectorAll("[role=radio]"));
            if (t.length === 0) return;
            const f = ((a ? t.indexOf(a) : 0) + 1) % t.length, c = t[f], d = c.dataset.value;
            d && (c.focus(), u(d));
        }
    }, k = ()=>{
        if (o.current) {
            const a = o.current.querySelector("[role=radio][aria-checked=true]"), t = Array.from(o.current.querySelectorAll("[role=radio]"));
            if (t.length === 0) return;
            const x = a ? t.indexOf(a) : 0, f = (t.length + x - 1) % t.length, c = t[f], d = c.dataset.value;
            d && (c.focus(), u(d));
        }
    };
    r.useEffect(()=>{
        if (o.current) {
            const a = o.current.querySelector("[role=radio]");
            var _a_dataset_value;
            a && V((_a_dataset_value = a.dataset.value) !== null && _a_dataset_value !== void 0 ? _a_dataset_value : null);
        }
    }, []);
    var _ref1;
    const v = (_ref1 = h !== null && h !== void 0 ? h : y) !== null && _ref1 !== void 0 ? _ref1 : null;
    return /* @__PURE__ */ i("div", _object_spread_props(_object_spread({
        ref: K(o, C),
        id: b,
        role: "radiogroup",
        "aria-label": e["aria-label"],
        "aria-labelledby": e["aria-label"] ? void 0 : e["aria-labelledby"]
    }, E(e.dataAttributes, "RadioGroup")), {
        children: /* @__PURE__ */ i(q.Provider, {
            value: {
                id: b,
                disabled: m,
                selectedValue: h !== null && h !== void 0 ? h : R,
                focusableValue: v,
                select: u,
                selectNext: I,
                selectPrev: k
            },
            children: e.children
        })
    }));
}, fe = _;
export { ue as RadioGroup, fe as default, Z as useRadioContext };
