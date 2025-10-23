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
import { jsx as t, jsxs as A } from "react/jsx-runtime";
import * as m from "react";
import c from "classnames";
import { BaseTouchable as ae } from "./touchable.js";
import { Text3 as ye, Text1 as Re, Text2 as q } from "./text.js";
import s from "./box.js";
import T from "./stack.js";
import we from "./badge.js";
import { useIsInverseOrMediaVariant as oe } from "./theme-variant-context.js";
import Be from "./generated/mistica-icons/icon-chevron-right-filled.js";
import Ie from "./switch-component.js";
import ie, { useRadioContext as Ce } from "./radio-button.js";
import Ne from "./checkbox.js";
import { InternalBoxed as Te } from "./boxed.js";
import Ae from "./divider.js";
import { getPrefixedDataAttributes as D } from "./utils/dom.js";
import { rowContent as G, touchableBackground as J, touchableBackgroundInverse as K, pointer as re, rowContentPadding as Le, screenReaderOnly as ke, row as Se, boxed as Ve, content as Oe, assetContainer as Ee, center as Q, disabled as N, asset as Xe, rowBody as De, badge as Me, rightContent as We, rightRestrictedWidth as je, detail as Fe, detailRight as He, dualActionContainer as Pe, dualActionLeft as ze, dualActionDivider as qe, dualActionRight as Ge } from "./list.css-mistica.js";
import { vars as Je } from "./image.css-mistica.js";
import { vars as o } from "./skins/skin-contract.css-mistica.js";
import { applyCssVars as Ke } from "./utils/css.js";
import { IconButton as ne, ToggleIconButton as le } from "./icon-button.js";
import Qe from "./screen-reader-only.js";
const Ue = (e, a)=>typeof e == "function" ? e == null ? void 0 : e({
        centerY: a
    }) : a ? /* @__PURE__ */ t("div", {
        style: {
            display: "flex",
            alignItems: "center",
            height: "100%"
        },
        children: /* @__PURE__ */ t("div", {
            children: e
        })
    }) : e, Ye = (param)=>{
    let { withChevron: e, headline: a, headlineRef: i, extraRef: l, title: d, titleAs: b, titleLinesMax: x, subtitle: R, subtitleLinesMax: L, description: f, descriptionLinesMax: M, detail: h, asset: X, danger: k, badge: S, right: w, rightRef: u, extra: I, labelId: W, disabled: g, control: y } = param;
    const V = oe(), B = [
        a,
        d,
        R,
        f,
        I
    ].filter(Boolean).length === 1;
    return /* @__PURE__ */ A("div", {
        className: Oe,
        id: W,
        children: [
            X && /* @__PURE__ */ t("div", {
                className: c(Ee, {
                    [Q]: B,
                    [N]: g
                }),
                "aria-hidden": !0,
                "data-testid": "asset",
                children: /* @__PURE__ */ t("div", {
                    className: Xe,
                    style: Ke({
                        color: k ? V ? o.colors.textErrorInverse : o.colors.textError : V ? o.colors.textPrimaryInverse : o.colors.textPrimary,
                        [Je.mediaBorderRadius]: o.borderRadii.mediaSmall
                    }),
                    children: X
                })
            }),
            /* @__PURE__ */ A("div", {
                className: c(De, {
                    [N]: g
                }),
                style: {
                    justifyContent: B ? "center" : "flex-start"
                },
                children: [
                    /* @__PURE__ */ t(ye, {
                        regular: !0,
                        color: k ? o.colors.textError : o.colors.textPrimary,
                        truncate: x,
                        hyphens: "auto",
                        as: b,
                        dataAttributes: {
                            testid: "title"
                        },
                        children: d
                    }),
                    a && /* @__PURE__ */ t("div", {
                        ref: i,
                        style: {
                            order: -1,
                            paddingBottom: 4
                        },
                        children: /* @__PURE__ */ t(Re, {
                            regular: !0,
                            color: o.colors.textPrimary,
                            hyphens: "auto",
                            dataAttributes: {
                                testid: "headline"
                            },
                            children: a
                        })
                    }),
                    R && /* @__PURE__ */ t(s, {
                        paddingTop: 2,
                        children: /* @__PURE__ */ t(q, {
                            regular: !0,
                            color: o.colors.textPrimary,
                            truncate: L,
                            hyphens: "auto",
                            dataAttributes: {
                                testid: "subtitle"
                            },
                            children: R
                        })
                    }),
                    f && /* @__PURE__ */ t(s, {
                        paddingTop: 2,
                        children: /* @__PURE__ */ t(q, {
                            regular: !0,
                            color: o.colors.textSecondary,
                            truncate: M,
                            hyphens: "auto",
                            dataAttributes: {
                                testid: "description"
                            },
                            children: f
                        })
                    }),
                    I && /* @__PURE__ */ t(s, {
                        ref: l,
                        paddingTop: 2,
                        dataAttributes: {
                            testid: "slot"
                        },
                        children: I
                    })
                ]
            }),
            S && /* @__PURE__ */ t(s, {
                paddingLeft: 16,
                children: /* @__PURE__ */ t("div", {
                    className: c(Me, {
                        [N]: g
                    }),
                    children: /* @__PURE__ */ t(we, {
                        value: S === !0 ? void 0 : S
                    })
                })
            }),
            (h || w || e || y) && /* @__PURE__ */ A("div", {
                className: c(We, {
                    [je]: !!h
                }),
                children: [
                    h && /* @__PURE__ */ t("div", {
                        className: c(Fe, {
                            [N]: g
                        }),
                        children: /* @__PURE__ */ t(q, {
                            regular: !0,
                            color: o.colors.textSecondary,
                            hyphens: "auto",
                            dataAttributes: {
                                testid: "detail"
                            },
                            children: h
                        })
                    }),
                    w && /* @__PURE__ */ t("div", {
                        className: c({
                            [He]: !!h,
                            [N]: g
                        }),
                        ref: u,
                        "data-testid": "endSlot",
                        children: Ue(w, B)
                    }),
                    e && /* @__PURE__ */ t("div", {
                        style: {
                            paddingLeft: h || w ? 4 : 0
                        },
                        className: c(Q, {
                            [N]: g
                        }),
                        "data-testid": "chevron",
                        children: /* @__PURE__ */ t(Be, {
                            size: 16,
                            color: V ? o.colors.inverse : o.colors.neutralMedium
                        })
                    }),
                    y && /* @__PURE__ */ t("div", {
                        style: {
                            paddingLeft: h || w ? 8 : 0
                        },
                        className: Q,
                        children: y
                    })
                ]
            })
        ]
    });
}, Ze = (param)=>{
    let { value: e, defaultValue: a, onChange: i } = param;
    const l = e !== void 0, [d, b] = m.useState(!!a);
    return [
        l ? !!e : d,
        ()=>{
            l || b(!d), i == null || i(l ? !e : !d);
        }
    ];
}, _e = (e)=>[
        "switch",
        "checkbox",
        "radioValue",
        "iconButton"
    ].some((a)=>e[a] !== void 0), de = /*#__PURE__*/ m.forwardRef((e, a)=>{
    var ee, te;
    const i = m.useId(), l = oe(), { asset: d, headline: b, title: x, titleAs: R, titleLinesMax: L, subtitle: f, subtitleLinesMax: M, description: h, descriptionLinesMax: X, detail: k, danger: S, badge: w, role: u, touchableRole: I, extra: W, withChevron: g, dataAttributes: y, right: V, "aria-label": U, tabIndex: B } = e, [ce, se] = m.useState(""), [he, ue] = m.useState(""), [me, be] = m.useState(""), fe = [
        x,
        ce,
        f,
        h,
        he,
        k,
        me
    ].filter(Boolean).join(" "), O = U !== null && U !== void 0 ? U : e.href || e.to ? fe : void 0, ve = Ce(), v = e.disabled || e.radioValue !== void 0 && ve.disabled, j = !v && !l, F = !v && l, Y = _e(e), E = !!e.onPress || !!e.href || !!e.to, xe = Y ? !1 : g !== null && g !== void 0 ? g : E, Z = {
        href: e.href,
        newTab: e.newTab,
        loadOnTop: e.loadOnTop,
        to: e.to,
        fullPageOnWebView: e.fullPageOnWebView,
        replace: e.replace,
        onNavigate: e.onNavigate,
        onPress: e.onPress,
        trackingEvent: e.trackingEvent,
        "aria-label": O,
        "aria-labelledby": e["aria-labelledby"],
        "aria-description": e["aria-description"],
        "aria-describedby": e["aria-describedby"],
        "aria-current": e["aria-current"]
    }, [_, $] = Ze(e.switch || e.checkbox || {}), C = (r)=>/* @__PURE__ */ t(Ye, {
            asset: d,
            headline: b,
            headlineRef: (n)=>{
                n && se(n.textContent || "");
            },
            title: x,
            titleAs: R,
            subtitle: f,
            description: h,
            badge: w,
            titleLinesMax: L,
            subtitleLinesMax: M,
            descriptionLinesMax: X,
            detail: k,
            danger: S,
            right: V,
            rightRef: (n)=>{
                n && be(n.innerText || n.textContent || "");
            },
            control: r == null ? void 0 : r.control,
            role: r == null ? void 0 : r.role,
            extra: W,
            extraRef: (n)=>{
                n && ue(n.innerText || n.textContent || "");
            },
            labelId: r == null ? void 0 : r.labelId,
            disabled: v,
            withChevron: xe
        });
    if (E && !Y) return /* @__PURE__ */ t(ae, _object_spread_props(_object_spread({
        ref: a,
        className: c(G, {
            [J]: j,
            [K]: F,
            [re]: !v
        })
    }, Z), {
        role: I,
        dataAttributes: y,
        disabled: v,
        tabIndex: B,
        children: /* @__PURE__ */ t(s, {
            paddingX: 16,
            "aria-hidden": !!e.to || !!e.href || void 0,
            children: C({
                role: u
            })
        })
    }));
    const H = (r)=>/* @__PURE__ */ A("div", _object_spread_props(_object_spread({
            className: Pe,
            ref: a
        }, D(y)), {
            children: [
                /* @__PURE__ */ t(ae, _object_spread_props(_object_spread({
                    disabled: v
                }, Z), {
                    role: I,
                    className: c(ze, {
                        [J]: j,
                        [K]: F
                    }),
                    tabIndex: B,
                    children: C({
                        labelId: i,
                        role: u
                    })
                })),
                /* @__PURE__ */ t("div", {
                    className: qe
                }),
                r
            ]
        })), P = (r, n)=>/* @__PURE__ */ t("div", _object_spread_props(_object_spread({
            className: c(G, {
                [J]: j && n,
                [K]: F && n,
                [re]: !v && n
            }),
            ref: a
        }, D(y)), {
            children: r
        }));
    if (e.switch || e.checkbox) {
        var _ref, _ref1;
        const r = e.switch ? Ie : Ne, n = (_ref1 = (_ref = (ee = e.switch) == null ? void 0 : ee.name) !== null && _ref !== void 0 ? _ref : (te = e.checkbox) == null ? void 0 : te.name) !== null && _ref1 !== void 0 ? _ref1 : i;
        return E ? H(/* @__PURE__ */ t(r, {
            disabled: v,
            name: n,
            checked: _,
            "aria-label": O,
            "aria-labelledby": i,
            onChange: $,
            render: (param)=>{
                let { controlElement: z } = param;
                return /* @__PURE__ */ t("div", {
                    className: Ge,
                    children: z
                });
            }
        })) : P(/* @__PURE__ */ t(r, {
            disabled: v,
            name: n,
            checked: _,
            "aria-label": O,
            "aria-labelledby": i,
            onChange: $,
            render: (param)=>{
                let { controlElement: z, labelId: ge } = param;
                return /* @__PURE__ */ t(s, {
                    paddingX: 16,
                    role: u,
                    children: C({
                        labelId: ge,
                        control: /* @__PURE__ */ t(T, {
                            space: "around",
                            children: z
                        })
                    })
                });
            }
        }), !0);
    }
    if (e.radioValue) return E ? H(/* @__PURE__ */ t(ie, {
        value: e.radioValue,
        "aria-label": O,
        "aria-labelledby": i,
        render: (param)=>{
            let { controlElement: r } = param;
            return /* @__PURE__ */ t(T, {
                space: "around",
                children: /* @__PURE__ */ t(s, {
                    paddingX: 16,
                    children: r
                })
            });
        }
    })) : P(/* @__PURE__ */ t(ie, {
        value: e.radioValue,
        "aria-label": O,
        "aria-labelledby": i,
        render: (param)=>{
            let { controlElement: r } = param;
            return /* @__PURE__ */ t(s, {
                paddingX: 16,
                role: u,
                children: C({
                    labelId: i,
                    control: /* @__PURE__ */ t(T, {
                        space: "around",
                        children: r
                    })
                })
            });
        }
    }), !0);
    if (e.iconButton) return E ? H(/* @__PURE__ */ t(s, {
        padding: 16,
        children: /* @__PURE__ */ t(T, {
            space: "around",
            children: e.iconButton.Icon ? /* @__PURE__ */ t(ne, _object_spread_props(_object_spread({}, e.iconButton), {
                disabled: e.disabled
            })) : /* @__PURE__ */ t(le, _object_spread_props(_object_spread({}, e.iconButton), {
                disabled: e.disabled
            }))
        })
    })) : P(/* @__PURE__ */ t(s, {
        paddingX: 16,
        children: C({
            labelId: i,
            control: /* @__PURE__ */ t(T, {
                space: "around",
                children: e.iconButton.Icon ? /* @__PURE__ */ t(ne, _object_spread_props(_object_spread({}, e.iconButton), {
                    disabled: e.disabled,
                    role: u
                })) : /* @__PURE__ */ t(le, _object_spread_props(_object_spread({}, e.iconButton), {
                    disabled: e.disabled,
                    role: u
                }))
            })
        })
    }));
    const p = !!e["aria-label"];
    return /* @__PURE__ */ A("div", _object_spread_props(_object_spread({
        className: c(G, Le),
        role: u
    }, D(y)), {
        ref: a,
        tabIndex: B,
        children: [
            /* @__PURE__ */ t("div", {
                "aria-hidden": p,
                children: C({
                    role: u
                })
            }),
            p && /* @__PURE__ */ t(Qe, {
                className: ke,
                children: /* @__PURE__ */ t("span", {
                    children: e["aria-label"]
                })
            })
        ]
    }));
}), yt = /*#__PURE__*/ m.forwardRef((_param, l)=>{
    var { dataAttributes: e, role: a = "listitem" } = _param, i = _object_without_properties(_param, [
        "dataAttributes",
        "role"
    ]);
    return /* @__PURE__ */ t("div", {
        role: a,
        className: Se,
        children: /* @__PURE__ */ t(de, _object_spread_props(_object_spread({}, i), {
            ref: l,
            dataAttributes: _object_spread({
                "component-name": "Row",
                testid: "Row"
            }, e)
        }))
    });
}), Rt = (param)=>{
    let { children: e, ariaLabelledby: a, role: i = "list", "aria-live": l = "off", "aria-atomic": d = !1, dataAttributes: b } = param;
    const x = m.Children.toArray(e).filter(Boolean), R = x.length - 1;
    return /* @__PURE__ */ t("div", _object_spread_props(_object_spread({
        role: i,
        "aria-labelledby": a,
        "aria-live": l,
        "aria-atomic": d
    }, D(b, "RowList")), {
        children: x.map((L, f)=>/* @__PURE__ */ A(m.Fragment, {
                children: [
                    L,
                    f < R && /* @__PURE__ */ t(s, {
                        paddingX: 16,
                        children: /* @__PURE__ */ t(Ae, {})
                    })
                ]
            }, f))
    }));
}, wt = /*#__PURE__*/ m.forwardRef((_param, i)=>{
    var { dataAttributes: e } = _param, a = _object_without_properties(_param, [
        "dataAttributes"
    ]);
    return /* @__PURE__ */ t(Te, {
        overflow: "visible",
        className: Ve,
        variant: a.isInverse ? "inverse" : "default",
        ref: i,
        dataAttributes: _object_spread({
            "component-name": "BoxedRow",
            testid: "BoxedRow"
        }, e),
        children: /* @__PURE__ */ t(de, _object_spread({}, a))
    });
}), Bt = (param)=>{
    let { children: e, ariaLabelledby: a, role: i = "list", dataAttributes: l, "aria-live": d = "off", "aria-atomic": b = !1 } = param;
    return /* @__PURE__ */ t(T, {
        space: 16,
        role: i,
        "aria-labelledby": a,
        "aria-live": d,
        "aria-atomic": b,
        dataAttributes: _object_spread({
            "component-name": "BoxedRowList",
            testid: "BoxedRowList"
        }, l),
        children: e
    });
};
export { wt as BoxedRow, Bt as BoxedRowList, Ye as Content, yt as Row, Rt as RowList };
