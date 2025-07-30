import * as React from 'react';
export type Variant = 'default' | 'inverse' | 'alternative' | 'media';
type ThemeVariantProps = {
    /** @deprecated Use variant = 'inverse' instead */
    isInverse?: boolean;
    variant?: Variant;
    children: React.ReactNode;
};
export declare const ThemeVariant: ({ isInverse, variant, children }: ThemeVariantProps) => JSX.Element;
export declare const useThemeVariant: () => Variant;
export declare const useIsInverseVariant: () => boolean;
export declare const useIsInverseOrMediaVariant: () => boolean;
export {};
