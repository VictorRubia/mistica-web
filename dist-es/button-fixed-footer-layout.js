import { jsx as o } from "react/jsx-runtime";
import d from "./fixed-footer-layout.js";
import m from "./button-layout.js";
import { InternalResponsiveLayout as p } from "./responsive-layout.js";
import l from "./box.js";
const f = (param)=>{
    let { isFooterVisible: r = !0, button: t, secondaryButton: e, link: i, children: n, footerBgColor: a, containerBgColor: s, onChangeFooterHeight: u } = param;
    return /* @__PURE__ */ o(d, {
        onChangeFooterHeight: u,
        isFooterVisible: (!!t || !!e) && r,
        footerBgColor: a,
        containerBgColor: s,
        footer: /* @__PURE__ */ o(p, {
            shouldExpandWhenNested: "desktop",
            children: /* @__PURE__ */ o(l, {
                paddingY: {
                    mobile: 16,
                    tablet: 32,
                    desktop: 0
                },
                children: /* @__PURE__ */ o(m, {
                    primaryButton: t,
                    secondaryButton: e,
                    align: "full-width",
                    link: i
                })
            })
        }),
        children: n
    });
}, c = f;
export { c as default };
