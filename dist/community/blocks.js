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
    HighlightedValueBlock: function() {
        return E;
    },
    InformationBlock: function() {
        return D;
    },
    ProgressBlock: function() {
        return J;
    },
    RowBlock: function() {
        return q;
    },
    SimpleBlock: function() {
        return z;
    },
    ValueBlock: function() {
        return F;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _stack = /*#__PURE__*/ _interop_require_default(require("../stack.js"));
const _blockscssmistica = require("./blocks.css-mistica.js");
const _imagecssmistica = require("../image.css-mistica.js");
const _text = require("../text.js");
const _skincontractcssmistica = require("../skins/skin-contract.css-mistica.js");
const _inline = /*#__PURE__*/ _interop_require_default(require("../inline.js"));
const _box = /*#__PURE__*/ _interop_require_default(require("../box.js"));
const _progressbar = require("../progress-bar.js");
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _css = require("../utils/css.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const b = (param)=>{
    let { title: a, description: e } = param;
    const l = typeof e == "string" ? [
        e
    ] : e;
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
        className: _blockscssmistica.column,
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
                regular: !0,
                color: _skincontractcssmistica.vars.colors.textPrimary,
                children: a
            }),
            l && l.map((c, n)=>/* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                    regular: !0,
                    color: _skincontractcssmistica.vars.colors.textSecondary,
                    as: "p",
                    children: c
                }, n))
        ]
    });
}, q = (param)=>{
    let { title: a, stackingGroup: e, description: l, "aria-label": c } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        "aria-label": c,
        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_inline.default, {
            space: "between",
            alignItems: "center",
            children: [
                a && /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                    paddingRight: 32,
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                        regular: !0,
                        children: a
                    })
                }),
                e || /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                    regular: !0,
                    color: _skincontractcssmistica.vars.colors.textSecondary,
                    textAlign: "right",
                    as: "div",
                    children: l
                })
            ]
        })
    });
}, z = (param)=>{
    let { image: a, description: e, "aria-label": l, rightText: c } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        "aria-label": l,
        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_inline.default, {
            space: "between",
            alignItems: "center",
            children: [
                /* @__PURE__ */ (0, _jsxruntime.jsxs)(_inline.default, {
                    space: 16,
                    alignItems: "center",
                    children: [
                        /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                            style: (0, _css.applyCssVars)({
                                [_imagecssmistica.vars.mediaBorderRadius]: _skincontractcssmistica.vars.borderRadii.mediaSmall
                            }),
                            children: a
                        }),
                        /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                            regular: !0,
                            color: _skincontractcssmistica.vars.colors.textSecondary,
                            children: e
                        })
                    ]
                }),
                c && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: _blockscssmistica.rightContent,
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                        regular: !0,
                        color: _skincontractcssmistica.vars.colors.textBrand,
                        children: c
                    })
                })
            ]
        })
    });
}, D = (param)=>{
    let { title: a, description: e, secondaryValue: l, value: c, valueColor: n = _skincontractcssmistica.vars.colors.textPrimary, "aria-label": d } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)(_inline.default, {
        space: "between",
        alignItems: "flex-end",
        "aria-label": d,
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)(b, {
                title: a,
                description: e
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                className: (0, _classnames.default)(_blockscssmistica.column, _blockscssmistica.rightContent),
                children: [
                    /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                        regular: !0,
                        color: _skincontractcssmistica.vars.colors.textSecondary,
                        decoration: "line-through",
                        children: l
                    }),
                    /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text5, {
                        color: n,
                        children: c
                    })
                ]
            })
        ]
    });
}, E = (param)=>{
    let { headline: a, headings: e, title: l, pretitle: c, description: n, strikedValue: d, "aria-label": h } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
        "aria-label": h,
        children: [
            a && /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                paddingBottom: 24,
                children: a
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
                space: 2,
                children: [
                    c && /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                        regular: !0,
                        children: c
                    }),
                    d && /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                        regular: !0,
                        color: _skincontractcssmistica.vars.colors.textSecondary,
                        decoration: "line-through",
                        children: d
                    })
                ]
            }),
            e && /* @__PURE__ */ (0, _jsxruntime.jsx)(_stack.default, {
                space: 2,
                children: e.map((u, y)=>/* @__PURE__ */ {
                    var _u_valueColor;
                    return (0, _jsxruntime.jsxs)(_inline.default, {
                        space: 8,
                        alignItems: "baseline",
                        children: [
                            /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text8, {
                                color: (_u_valueColor = u.valueColor) !== null && _u_valueColor !== void 0 ? _u_valueColor : _skincontractcssmistica.vars.colors.textPrimary,
                                children: u.value
                            }),
                            /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                                regular: !0,
                                color: _skincontractcssmistica.vars.colors.textSecondary,
                                children: u.text
                            })
                        ]
                    }, y);
                })
            }),
            l || n ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                paddingTop: 8,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(b, {
                    title: l,
                    description: n
                })
            }) : null
        ]
    });
}, F = (param)=>{
    let { title: a, value: e, description: l, valueColor: c = _skincontractcssmistica.vars.colors.textPrimary, "aria-label": n } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
        "aria-label": n,
        className: _blockscssmistica.column,
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                regular: !0,
                color: _skincontractcssmistica.vars.colors.textPrimary,
                children: a
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text8, {
                color: c,
                children: e
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)(b, {
                description: l
            })
        ]
    });
}, J = (param)=>{
    let { title: a, stackingGroup: e, progressPercent: l, reverse: c, heading: n, description: d, "aria-label": h } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        "aria-label": h,
        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
            space: 8,
            children: [
                /* @__PURE__ */ (0, _jsxruntime.jsxs)(_inline.default, {
                    space: "between",
                    alignItems: "flex-end",
                    children: [
                        /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                            paddingRight: 32,
                            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                                regular: !0,
                                children: a
                            })
                        }),
                        e
                    ]
                }),
                l !== void 0 && /* @__PURE__ */ (0, _jsxruntime.jsx)(_progressbar.ProgressBar, {
                    "aria-hidden": !0,
                    progressPercent: l,
                    reverse: c
                }),
                /* @__PURE__ */ (0, _jsxruntime.jsxs)(_inline.default, {
                    space: 8,
                    alignItems: "baseline",
                    children: [
                        /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text8, {
                            color: n.valueColor || _skincontractcssmistica.vars.colors.textPrimary,
                            children: n.value
                        }),
                        /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                            regular: !0,
                            color: _skincontractcssmistica.vars.colors.textSecondary,
                            children: n.text
                        })
                    ]
                }),
                d && /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                    regular: !0,
                    color: _skincontractcssmistica.vars.colors.textSecondary,
                    children: d
                })
            ]
        })
    });
};
