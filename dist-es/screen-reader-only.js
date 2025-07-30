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
import { jsx as i } from "react/jsx-runtime";
import * as e from "react";
import { screenReaderOnly as o } from "./screen-reader-only.css-mistica.js";
import { getPrefixedDataAttributes as l } from "./utils/dom.js";
import s from "classnames";
const c = (param)=>{
    let { children: r, className: n, dataAttributes: m } = param;
    const a = l(m, "ScreenReaderOnly");
    if (e.Children.count(r) === 1) {
        const t = e.Children.only(r);
        if (/*#__PURE__*/ e.isValidElement(t)) return /*#__PURE__*/ e.cloneElement(t, _object_spread({
            className: s(t.props.className, o, n)
        }, a));
    }
    return /* @__PURE__ */ i("div", _object_spread_props(_object_spread({
        className: s(o, n)
    }, a), {
        children: r
    }));
}, y = c;
export { y as default };
