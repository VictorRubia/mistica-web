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
import { jsxs as k, jsx as n } from "react/jsx-runtime";
import * as s from "react";
import { BaseTouchable as E } from "./touchable.js";
import { buttonContainer as L, iconButtonTokens as V, minimumInteractiveArea as K, disabled as M, overlayContainer as Y, bleedLeft as q, bleedRight as D, bleedY as F, iconContainer as G, isLoading as H, overlay as J, icon as Q, iconSize as P, spinner as U } from "./icon-button.css-mistica.js";
import g from "classnames";
import W from "./spinner.js";
import { useThemeVariant as X } from "./theme-variant-context.js";
const h = /*#__PURE__*/ s.forwardRef((_param, N)=>{
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
    const B = X(), [y, T] = s.useState(!1), t = l || y, [f, b] = s.useState(!!t);
    s.useEffect(()=>{
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
        className: g(L[i], V[z], K, {
            [M]: e,
            [Y]: !e && !t,
            [q[i]]: a,
            [D[i]]: m,
            [F[i]]: c
        }),
        resetMargin: !a && !m && !c
    }, A = /* @__PURE__ */ k("div", {
        className: g(G[i], {
            [H]: t
        }),
        children: [
            v && /* @__PURE__ */ n("div", {
                className: J
            }),
            /* @__PURE__ */ n("div", {
                "aria-hidden": t ? !0 : void 0,
                className: Q,
                children: /* @__PURE__ */ n(d, {
                    size: P[i],
                    color: "currentColor"
                })
            }),
            /* @__PURE__ */ n("div", {
                "aria-hidden": t ? void 0 : !0,
                className: U,
                onTransitionEnd: ()=>{
                    t !== f && b(t);
                },
                children: f && /* @__PURE__ */ n(W, {
                    size: P[i],
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
    return /* @__PURE__ */ n(E, _object_spread_props(_object_spread({}, x, u), {
        maybe: !0,
        children: A
    }));
}), Z = /*#__PURE__*/ s.forwardRef((e, o)=>/* @__PURE__ */ n(h, _object_spread({
        ref: o
    }, e))), re = /*#__PURE__*/ s.forwardRef((e, o)=>/* @__PURE__ */ n(Z, _object_spread({
        ref: o
    }, e))), _ = /*#__PURE__*/ s.forwardRef((_param, R)=>{
    var { checked: e, defaultChecked: o, checkedProps: p, uncheckedProps: I, onChange: r, dataAttributes: S } = _param, v = _object_without_properties(_param, [
        "checked",
        "defaultChecked",
        "checkedProps",
        "uncheckedProps",
        "onChange",
        "dataAttributes"
    ]);
    const [d, a] = s.useState(!!o), m = ()=>{
        if (e === void 0) {
            const c = r == null ? void 0 : r(!d);
            if (c) return c.then(()=>a((l)=>!l)).catch(()=>{});
            a((l)=>!l);
        } else return r == null ? void 0 : r(!e);
    };
    return /* @__PURE__ */ n(h, _object_spread_props(_object_spread({
        ref: R
    }, v, (e !== null && e !== void 0 ? e : d) ? p : I), {
        dataAttributes: _object_spread({
            "component-name": "ToggleIconButton",
            testid: "ToggleIconButton"
        }, S),
        onPress: m
    }));
}), se = /*#__PURE__*/ s.forwardRef((e, o)=>/* @__PURE__ */ n(_, _object_spread({
        ref: o
    }, e)));
export { re as IconButton, Z as InternalIconButton, _ as InternalToggleIconButton, h as RawIconButton, se as ToggleIconButton };
