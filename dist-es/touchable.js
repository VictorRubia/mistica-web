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
import { jsxs as E, jsx as n } from "react/jsx-runtime";
import * as o from "react";
import h from "classnames";
import I from "./screen-reader-only.js";
import { notTouchable as B, touchable as V, base as L, marginReset as $ } from "./touchable.css-mistica.js";
import { useTheme as q } from "./hooks.js";
import { isInsideNovumNativeApp as z } from "./utils/platform.js";
import { ENTER as F, SPACE as G } from "./utils/keys.js";
import { getPrefixedDataAttributes as J } from "./utils/dom.js";
import { redirect as M } from "./utils/browser.js";
import { linkOpensInNewTab as Q, linkOpensInCurrentPage as U } from "./text-tokens.js";
const R = /*#__PURE__*/ o.forwardRef((e, t)=>{
    var C;
    const { texts: d, analytics: x, platformOverrides: D, Link: A, useHrefDecorator: H, t: g } = q(), K = H(), s = o.useRef(!1);
    let r = [];
    e.trackingEvent && (Array.isArray(e.trackingEvent) ? r = e.trackingEvent : r = [
        e.trackingEvent
    ]);
    const f = e.children, i = _object_spread({
        className: e.className,
        id: e.id,
        disabled: e.disabled,
        style: e.style,
        role: e.role,
        tabIndex: e.tabIndex,
        "aria-hidden": e["aria-hidden"],
        "aria-live": e["aria-live"]
    }, J(e.dataAttributes, "Touchable")), m = {
        "aria-checked": e["aria-checked"],
        "aria-disabled": e.disabled ? !0 : void 0,
        "aria-controls": e["aria-controls"],
        "aria-expanded": e["aria-expanded"],
        "aria-haspopup": e["aria-haspopup"],
        "aria-selected": e["aria-selected"],
        "aria-current": e["aria-current"],
        "aria-label": e["aria-label"],
        "aria-labelledby": e["aria-labelledby"],
        "aria-description": e["aria-description"],
        "aria-describedby": e["aria-describedby"]
    }, k = e.type ? e.type : "button", l = !!e.newTab, S = (C = e.href) == null ? void 0 : C.startsWith("#"), v = !l && !!e.href && !!e.loadOnTop, b = (a)=>{
        e.stopPropagation && a.stopPropagation();
    }, y = (a)=>{
        e.onPress && e.onPress(a);
    }, N = ()=>{
        var _e_to_pathname;
        return e.href ? K(e.href) : e.to && e.fullPageOnWebView ? typeof e.to == "string" ? e.to : (_e_to_pathname = e.to.pathname) !== null && _e_to_pathname !== void 0 ? _e_to_pathname : "" : "";
    }, P = ()=>Promise.all(r.map((a)=>x.logEvent(a))), T = (a)=>{
        s.current || (s.current = !0, P().finally(()=>{
            s.current = !1, a();
        }));
    }, W = (a)=>{
        if (b(a), !r.length) {
            y(a);
            return;
        }
        T(()=>y(a));
    }, _ = (a)=>{
        var c;
        b(a);
        const u = !!(e.href && e.onNavigate);
        !r.length && !u || (a.preventDefault(), Promise.resolve(u ? (c = e.onNavigate) == null ? void 0 : c.call(e) : void 0).finally(()=>{
            T(()=>M(N(), l, v));
        }));
    }, j = (a)=>{
        b(a), e.to && e.onNavigate && e.onNavigate(), P();
    }, w = (a)=>{
        (a.key === F || a.key === G) && (a.preventDefault(), a.currentTarget.click());
    }, O = ()=>l ? /* @__PURE__ */ n(I, {
            children: /* @__PURE__ */ n("span", {
                children: d.linkOpensInNewTab || g(Q)
            })
        }) : S ? /* @__PURE__ */ n(I, {
            children: /* @__PURE__ */ n("span", {
                children: d.linkOpensInCurrentPage || g(U)
            })
        }) : null;
    if (e.href || e.to && e.fullPageOnWebView && z(D)) return /* @__PURE__ */ E("a", _object_spread_props(_object_spread({}, i, m), {
        onClick: _,
        onKeyDown: w,
        href: e.disabled ? void 0 : N(),
        target: (()=>{
            if (l) return "_blank";
            if (v) return "_top";
        })(),
        rel: l ? "noopener noreferrer" : void 0,
        ref: t,
        children: [
            f,
            O()
        ]
    }));
    if (e.to) return /* @__PURE__ */ E(A, _object_spread_props(_object_spread({}, i, m), {
        target: e.newTab ? "_blank" : void 0,
        innerRef: t,
        to: e.disabled ? "" : e.to,
        replace: e.replace,
        onClick: j,
        onKeyDown: w,
        children: [
            f,
            O()
        ]
    }));
    if (e.onPress) {
        var _e_as, _i_role;
        const a = (_e_as = e.as) !== null && _e_as !== void 0 ? _e_as : "button", u = (_i_role = i.role) !== null && _i_role !== void 0 ? _i_role : e.as === "a" ? "button" : void 0;
        return /*#__PURE__*/ o.createElement(a, _object_spread_props(_object_spread({}, i, m), {
            role: u,
            // When an <a/> is rendered without an href value, the element is not accesible
            // by keyboard (using tab key). We add a fictional href to "#" to avoid this.
            href: a === "a" ? "#" : void 0,
            // this "form" attribute is useful when the form's submit button
            // is located outside the <form> element, for example if you use
            // a ButtonFixedFooter layout inside a form with the submit
            // button located at the footer, which is redered using a Portal
            form: k === "submit" && e.formId ? e.formId : void 0,
            type: k,
            ref: t,
            onClick: (c)=>{
                a === "a" && c.preventDefault(), W(c);
            },
            children: f
        }));
    }
    return /* @__PURE__ */ n("div", _object_spread_props(_object_spread({}, i), {
        ref: t,
        className: h(i.className, B),
        children: f
    }));
}), X = /*#__PURE__*/ o.forwardRef((e, t)=>/* @__PURE__ */ n(R, _object_spread_props(_object_spread({}, e), {
        className: h(V, e.className),
        ref: t
    }))), ce = /*#__PURE__*/ o.forwardRef((_param, d)=>{
    var { resetMargin: e = !0 } = _param, t = _object_without_properties(_param, [
        "resetMargin"
    ]);
    return /* @__PURE__ */ n(R, _object_spread_props(_object_spread({}, t), {
        className: h(L, t.className, {
            [$]: e
        }),
        ref: d
    }));
}), oe = X;
export { ce as BaseTouchable, oe as default };
