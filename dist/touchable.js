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
    BaseTouchable: function() {
        return ce;
    },
    default: function() {
        return oe;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _screenreaderonly = /*#__PURE__*/ _interop_require_default(require("./screen-reader-only.js"));
const _touchablecssmistica = require("./touchable.css-mistica.js");
const _hooks = require("./hooks.js");
const _platform = require("./utils/platform.js");
const _keys = require("./utils/keys.js");
const _dom = require("./utils/dom.js");
const _browser = require("./utils/browser.js");
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
const R = /*#__PURE__*/ _react.forwardRef((e, t)=>{
    var C;
    const { texts: d, analytics: x, platformOverrides: D, Link: A, useHrefDecorator: H, t: g } = (0, _hooks.useTheme)(), K = H(), s = _react.useRef(!1);
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
    }, (0, _dom.getPrefixedDataAttributes)(e.dataAttributes, "Touchable")), m = {
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
            T(()=>(0, _browser.redirect)(N(), l, v));
        }));
    }, j = (a)=>{
        b(a), e.to && e.onNavigate && e.onNavigate(), P();
    }, w = (a)=>{
        (a.key === _keys.ENTER || a.key === _keys.SPACE) && (a.preventDefault(), a.currentTarget.click());
    }, O = ()=>l ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_screenreaderonly.default, {
            children: /* @__PURE__ */ (0, _jsxruntime.jsx)("span", {
                children: d.linkOpensInNewTab || g(_texttokens.linkOpensInNewTab)
            })
        }) : S ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_screenreaderonly.default, {
            children: /* @__PURE__ */ (0, _jsxruntime.jsx)("span", {
                children: d.linkOpensInCurrentPage || g(_texttokens.linkOpensInCurrentPage)
            })
        }) : null;
    if (e.href || e.to && e.fullPageOnWebView && (0, _platform.isInsideNovumNativeApp)(D)) return /* @__PURE__ */ (0, _jsxruntime.jsxs)("a", _object_spread_props(_object_spread({}, i, m), {
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
    if (e.to) return /* @__PURE__ */ (0, _jsxruntime.jsxs)(A, _object_spread_props(_object_spread({}, i, m), {
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
        return /*#__PURE__*/ _react.createElement(a, _object_spread_props(_object_spread({}, i, m), {
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
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({}, i), {
        ref: t,
        className: (0, _classnames.default)(i.className, _touchablecssmistica.notTouchable),
        children: f
    }));
}), X = /*#__PURE__*/ _react.forwardRef((e, t)=>/* @__PURE__ */ (0, _jsxruntime.jsx)(R, _object_spread_props(_object_spread({}, e), {
        className: (0, _classnames.default)(_touchablecssmistica.touchable, e.className),
        ref: t
    }))), ce = /*#__PURE__*/ _react.forwardRef((_param, d)=>{
    var { resetMargin: e = !0 } = _param, t = _object_without_properties(_param, [
        "resetMargin"
    ]);
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(R, _object_spread_props(_object_spread({}, t), {
        className: (0, _classnames.default)(_touchablecssmistica.base, t.className, {
            [_touchablecssmistica.marginReset]: e
        }),
        ref: d
    }));
}), oe = X;
