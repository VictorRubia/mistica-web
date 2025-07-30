"use client";
import { jsx as e } from "react/jsx-runtime";
import { actionsHeaderText as o } from "./table.css-mistica.js";
import a from "./screen-reader-only.js";
import { useTheme as i } from "./hooks.js";
import { tableActionsHeaderLabel as m } from "./text-tokens.js";
const p = ()=>{
    const { texts: r, t } = i();
    return /* @__PURE__ */ e("th", {
        children: /* @__PURE__ */ e(a, {
            children: /* @__PURE__ */ e("div", {
                className: o,
                children: r.tableActionsHeaderLabel || t(m)
            })
        })
    });
};
export { p as TableActionsHeader };
