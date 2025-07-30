import type { ComplexStyleRule } from '@vanilla-extract/css';
export declare const buttonVars: {
    minWidth: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
};
export declare const buttonMinWidth: {
    default: string;
    small: string;
};
export declare const linkMinWidth: {
    default: string;
    small: string;
};
export declare const borderSize = "1.5px";
export declare const iconMargin = "8px";
export declare const chevronMarginLeft = "2px";
export declare const iconSize: {
    default: string;
    small: string;
};
export declare const spinnerSize: {
    default: string;
    small: string;
};
export declare const buttonPaddingX: {
    default: string;
    small: string;
};
export declare const buttonPaddingY: {
    default: string;
    small: string;
};
export declare const isLoading: string;
export declare const small: string;
export declare const smallLink: string;
export declare const loadingFiller: string;
export declare const loadingContent: string;
export declare const textContent: string;
export declare const defaultLink: ComplexStyleRule;
export declare const defaultLinkInverse: ComplexStyleRule;
export declare const buttonVariants: Record<"link" | "danger" | "primary" | "secondary" | "linkDanger" | "linkDangerDark", string>;
export declare const inverseButtonVariants: Record<"link" | "danger" | "primary" | "secondary" | "linkDanger" | "linkDangerDark", string>;
