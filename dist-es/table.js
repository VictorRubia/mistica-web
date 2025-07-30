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
import { jsxs as y, jsx as e } from "react/jsx-runtime";
import * as E from "react";
import { getPrefixedDataAttributes as X } from "./utils/dom.js";
import { table as W, boxed as ee, collapsedRowsInMobile as M, fullWidth as _, hiddenHeadersInDesktop as te, hiddenHeadersInMobile as le, cellTextAlign as H, verticalAlign as I, rowFirstItem as L, rowLastItem as R, rowLastCollapsedItem as Y, collapsedRowHeaderItem as re, mobileCellHeading as oe, collapsedRowTitle as ae, actionsTableCell as j, topActions as se, scrollContainer as ne, scrollOverResponsiveLayout as ie, vars as ce } from "./table.css-mistica.js";
import { vars as F } from "./skins/skin-contract.css-mistica.js";
import me, { Text1 as x, Text2 as pe } from "./text.js";
import { text2 as f, text4 as G } from "./text-props.js";
import { InternalBoxed as de } from "./boxed.js";
import c from "classnames";
import he from "./box.js";
import { applyCssVars as be } from "./utils/css.js";
import ue from "./inline.js";
import { IconButton as ge, ToggleIconButton as ye } from "./icon-button.js";
import { iconContainerSize as Z, iconSize as fe } from "./icon-button.css-mistica.js";
import { TableActionsHeader as ke } from "./table-actions-header.js";
const $ = {
    default: "8px",
    boxed: "16px"
}, q = "1px", ve = (o)=>o.Icon ? /* @__PURE__ */ e(ge, _object_spread_props(_object_spread({}, o), {
        "aria-label": o.label,
        small: !0,
        type: "neutral",
        backgroundType: "transparent",
        bleedY: !0
    })) : /* @__PURE__ */ e(ye, _object_spread_props(_object_spread({}, o), {
        checkedProps: _object_spread_props(_object_spread({}, o.checkedProps), {
            "aria-label": o.checkedProps.label,
            type: "brand",
            backgroundType: "solid"
        }),
        uncheckedProps: _object_spread_props(_object_spread({}, o.uncheckedProps), {
            "aria-label": o.uncheckedProps.label,
            type: "neutral",
            backgroundType: "transparent"
        }),
        small: !0,
        bleedY: !0
    })), J = "left", Ee = /*#__PURE__*/ E.forwardRef((_param, z)=>{
    var { dataAttributes: o, heading: m = [], content: k = [], boxed: h, responsive: K, fullWidth: b = !0, maxHeight: v, emptyCase: A, columnTextAlign: T = J, rowVerticalAlign: C = "middle", columnWidth: p, hideHeaders: u, scrollOverResponsiveLayout: Q, rowHeaderIndex: s } = _param, N = _object_without_properties(_param, [
        "dataAttributes",
        "heading",
        "content",
        "boxed",
        "responsive",
        "fullWidth",
        "maxHeight",
        "emptyCase",
        "columnTextAlign",
        "rowVerticalAlign",
        "columnWidth",
        "hideHeaders",
        "scrollOverResponsiveLayout",
        "rowHeaderIndex"
    ]);
    const B = (l)=>{
        var _T_l;
        return Array.isArray(T) ? (_T_l = T[l]) !== null && _T_l !== void 0 ? _T_l : J : T;
    }, r = K === "collapse-rows", P = u === !0 || u === "mobile", U = u === !0 || u === "desktop", g = k.some((l)=>!Array.isArray(l) && l.actions.length > 0), D = /* @__PURE__ */ y("table", {
        className: c(W, {
            [ee]: h,
            [M]: r,
            [_]: b,
            [te]: U,
            [le]: P || r
        }),
        "aria-label": N["aria-label"],
        "aria-labelledby": N["aria-labelledby"],
        "aria-describedby": N["aria-describedby"],
        children: [
            m.length > 0 && /* @__PURE__ */ e("thead", {
                children: /* @__PURE__ */ y(x, {
                    as: "tr",
                    medium: !0,
                    transform: "uppercase",
                    color: F.colors.textSecondary,
                    wordBreak: !1,
                    children: [
                        m.map((l, a)=>/* @__PURE__ */ e("th", {
                                scope: "col",
                                className: c(H[B(a)], I[C], {
                                    [L]: a === 0,
                                    [R]: a === m.length - 1 && !g
                                }),
                                style: {
                                    minWidth: p == null ? void 0 : p[a],
                                    width: p == null ? void 0 : p[a]
                                },
                                children: l
                            }, a)),
                        g && /* @__PURE__ */ e(ke, {})
                    ]
                })
            }),
            /* @__PURE__ */ e("tbody", {
                children: k.length > 0 ? k.map((l, a)=>{
                    var _l_actions;
                    const n = Array.isArray(l) ? l : l.cells, i = Array.isArray(l) ? [] : (_l_actions = l.actions) !== null && _l_actions !== void 0 ? _l_actions : [], w = /* @__PURE__ */ e(ue, {
                        space: 16,
                        children: i.map((d, t)=>"Icon" in d || "checkedProps" in d ? /* @__PURE__ */ e(ve, _object_spread({}, d), t) : /* @__PURE__ */ e(E.Fragment, {
                                children: d
                            }, t))
                    }), S = i.length ? `calc(${Z.small} * ${i.length} + 16px * ${i.length - 1})` : "0px";
                    return(// Add position relative because in collapse-rows mode, actions are positioned absolutely in the row
                    /* @__PURE__ */ y("tr", {
                        style: {
                            position: "relative"
                        },
                        children: [
                            n.map((d, t)=>{
                                const V = s === n.length - 1 ? t === n.length - 2 || n.length === 1 : t === n.length - 1;
                                return /* @__PURE__ */ y(t === s ? "th" : "td", {
                                    className: c(I[C], {
                                        [L]: t === 0,
                                        [R]: t === n.length - 1 && !g,
                                        [Y]: V && r,
                                        [re]: t === s && r
                                    }),
                                    style: {
                                        // add space between top actions and content
                                        marginRight: r && i.length ? `calc(${S} + 8px)` : void 0
                                    },
                                    scope: t === s ? "row" : void 0,
                                    children: [
                                        t !== s && r && m[t] && !P && // this is aria-hidden because screen readers already read the column heading from the th
                                        /* @__PURE__ */ e("div", {
                                            className: oe,
                                            "aria-hidden": !0,
                                            children: /* @__PURE__ */ e(x, {
                                                medium: !0,
                                                color: F.colors.textSecondary,
                                                children: m[t]
                                            })
                                        }),
                                        /* @__PURE__ */ e(me, _object_spread_props(_object_spread({
                                            desktopSize: f.desktopSize,
                                            desktopLineHeight: f.desktopLineHeight
                                        }, t === s && r ? {
                                            mobileSize: G.mobileSize,
                                            mobileLineHeight: G.mobileLineHeight
                                        } : {
                                            mobileSize: f.mobileSize,
                                            mobileLineHeight: f.mobileLineHeight
                                        }), {
                                            as: "div",
                                            wordBreak: !1,
                                            children: /* @__PURE__ */ e("div", {
                                                className: c(H[B(t)], {
                                                    [ae]: t === s && r
                                                }),
                                                children: d
                                            })
                                        }))
                                    ]
                                }, t);
                            }),
                            i.length > 0 ? /* @__PURE__ */ e("td", {
                                className: c(I[C], j, R, {
                                    [L]: n.length === 0
                                }),
                                align: "right",
                                style: {
                                    width: `calc(${S} + 12px)`
                                },
                                children: w
                            }) : g && /* @__PURE__ */ e("td", {
                                className: j
                            }),
                            process.env.NODE_ENV !== "test" && r && i.length > 0 && /* @__PURE__ */ e("td", {
                                className: se,
                                style: {
                                    position: "absolute",
                                    top: `calc(${h ? $.boxed : $.default} - ${q} + (${Z.small} - ${fe.small}) / 2)`,
                                    right: h ? `calc(${$.boxed} - ${q})` : 0,
                                    width: S
                                },
                                children: w
                            })
                        ]
                    }, a));
                }) : /* @__PURE__ */ e("tr", {
                    children: /* @__PURE__ */ e("td", {
                        colSpan: m.length,
                        className: c({
                            [Y]: r
                        }),
                        children: typeof A == "string" ? /* @__PURE__ */ e(he, {
                            paddingY: 56,
                            children: /* @__PURE__ */ e(pe, {
                                regular: !0,
                                textAlign: "center",
                                as: "div",
                                children: A
                            })
                        }) : A
                    })
                })
            })
        ]
    }), O = function() {
        let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
        return {
            className: c(ne, {
                [ie]: l,
                [M]: r,
                [_]: b
            }),
            style: be({
                [ce.maxHeight]: typeof v == "number" ? `${v}px` : v !== null && v !== void 0 ? v : "auto"
            })
        };
    };
    return h ? /* @__PURE__ */ e(de, {
        desktopOnly: r,
        width: "fit-content",
        maxWidth: "100%",
        minWidth: {
            desktop: b ? "100%" : "auto",
            mobile: r || b ? "100%" : "auto"
        },
        ref: z,
        dataAttributes: _object_spread({
            "component-name": "Table"
        }, o),
        children: /* @__PURE__ */ e("div", _object_spread_props(_object_spread({}, O()), {
            children: D
        }))
    }) : /* @__PURE__ */ e("div", _object_spread_props(_object_spread({
        ref: z
    }, X(o, "Table"), O(Q)), {
        children: D
    }));
});
export { Ee as Table };
