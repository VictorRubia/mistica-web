export declare const vars: {
    rowMinSize: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    rowMaxSize: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    columnMinSize: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    columnMaxSize: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
};
export declare const gapVars: {
    columnGap: {
        desktop: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        tablet: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        mobile: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    rowGap: {
        desktop: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        tablet: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        mobile: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
};
export declare const grid: string;
export declare const gap: string;
export declare const gridTemplateColumnsAutoRepeat: string;
export declare const gridTemplateRowsAutoRepeat: string;
export declare const gridTemplateColumns: Record<1 | 2 | 4 | 8 | 12 | 5 | 6 | 3 | 10 | 9 | 7 | 11, string>;
export declare const gridTemplateRows: Record<1 | 2 | 4 | 8 | 12 | 5 | 6 | 3 | 10 | 9 | 7 | 11, string>;
export declare const gridAutoFlow: Record<"column" | "row" | "row dense" | "column dense", string>;
export declare const gridJustifyItems: Record<"center" | "stretch" | "end" | "start", string>;
export declare const gridAlignItems: Record<"center" | "stretch" | "end" | "start" | "baseline", string>;
export declare const gridJustifyContent: Record<"center" | "space-around" | "space-between" | "space-evenly" | "stretch" | "end" | "start", string>;
export declare const gridAlignContent: Record<"center" | "space-around" | "space-between" | "space-evenly" | "stretch" | "end" | "start", string>;
export declare const fullColumns: string;
export declare const fullRows: string;
export declare const spanColumns: Record<1 | 2 | 4 | 8 | 12 | 5 | 6 | 3 | 10 | 9 | 7 | 11, string>;
export declare const spanRows: Record<1 | 2 | 4 | 8 | 12 | 5 | 6 | 3 | 10 | 9 | 7 | 11, string>;
export declare const columnStart: Record<1 | 2 | 4 | 8 | 12 | 5 | 6 | 3 | 10 | 9 | 7 | 11, string>;
export declare const rowStart: Record<1 | 2 | 4 | 8 | 12 | 5 | 6 | 3 | 10 | 9 | 7 | 11, string>;
export declare const justifySelf: Record<"center" | "stretch" | "end" | "start", string>;
export declare const alignSelf: Record<"center" | "stretch" | "end" | "start" | "baseline", string>;
