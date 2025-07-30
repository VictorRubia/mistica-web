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
import { jsx as t, jsxs as c } from "react/jsx-runtime";
import a, { Text1 as p, Text6 as h, Text2 as d } from "./text.js";
import { text3 as x } from "./text-props.js";
import T from "./inline.js";
import g from "./box.js";
import { vars as f } from "./skins/skin-contract.css-mistica.js";
import { useTheme as l } from "./hooks.js";
import { getPrefixedDataAttributes as u } from "./utils/dom.js";
const m = (param)=>{
    let { title: e, right: i, dataAttributes: o } = param;
    const { textPresets: r } = l();
    return i ? /* @__PURE__ */ c(T, {
        space: "between",
        alignItems: "baseline",
        dataAttributes: o,
        children: [
            e,
            /* @__PURE__ */ t(g, {
                paddingLeft: 16,
                children: /* @__PURE__ */ t(d, {
                    weight: r.link.weight,
                    children: i
                })
            })
        ]
    }) : /* @__PURE__ */ t("div", _object_spread_props(_object_spread({}, u(o)), {
        children: e
    }));
}, S = (param)=>{
    let { children: e, as: i = "h3", id: o, right: r, dataAttributes: s } = param;
    const { textPresets: n } = l();
    return /* @__PURE__ */ t(m, {
        title: /* @__PURE__ */ t(p, {
            color: f.colors.textSecondary,
            transform: "uppercase",
            weight: n.title1.weight,
            as: i,
            id: o,
            wordBreak: !1,
            children: e
        }),
        right: r,
        dataAttributes: _object_spread({
            "component-name": "Title1"
        }, s)
    });
}, j = (param)=>{
    let { children: e, as: i = "h3", id: o, right: r, dataAttributes: s } = param;
    const { textPresets: n } = l();
    return /* @__PURE__ */ t(m, {
        title: /* @__PURE__ */ t(a, _object_spread_props(_object_spread({
            as: i,
            id: o
        }, x), {
            weight: n.title2.weight,
            children: e
        })),
        right: r,
        dataAttributes: _object_spread({
            "component-name": "Title2"
        }, s)
    });
}, v = (param)=>{
    let { children: e, as: i = "h3", id: o, right: r, dataAttributes: s } = param;
    const { textPresets: n } = l();
    return /* @__PURE__ */ t(m, {
        title: /* @__PURE__ */ t(a, {
            as: i,
            id: o,
            mobileSize: n.title3.size.mobile,
            desktopSize: n.title3.size.desktop,
            weight: n.title3.weight,
            mobileLineHeight: n.title3.lineHeight.mobile,
            desktopLineHeight: n.title3.lineHeight.desktop,
            children: e
        }),
        right: r,
        dataAttributes: _object_spread({
            "component-name": "Title3"
        }, s)
    });
}, y = (param)=>{
    let { children: e, as: i = "h3", id: o, right: r, dataAttributes: s } = param;
    return /* @__PURE__ */ t(m, {
        title: /* @__PURE__ */ t(h, {
            as: i,
            id: o,
            children: e
        }),
        right: r,
        dataAttributes: _object_spread({
            "component-name": "Title4"
        }, s)
    });
};
export { S as Title1, j as Title2, v as Title3, y as Title4 };
