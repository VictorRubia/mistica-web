import * as React from 'react';
import type { Variant } from './theme-variant-context';
import type { DataAttributes } from './utils/types';
type Props = {
    children: React.ReactNode;
    fullWidth?: boolean;
    className?: string;
    /** @deprecated Use variant = 'inverse' instead */
    isInverse?: boolean;
    variant?: Variant;
    backgroundColor?: string;
    dataAttributes?: DataAttributes;
};
export declare const InternalResponsiveLayout: ({ children, isInverse, variant, backgroundColor, className, fullWidth, dataAttributes, shouldExpandWhenNested, innerDivClassName, }: Props & {
    shouldExpandWhenNested?: boolean | 'desktop';
    innerDivClassName?: string;
}) => JSX.Element;
declare const ResponsiveLayout: ({ children, ...props }: Props) => JSX.Element;
export declare const ResetResponsiveLayout: ({ children, skipMobile, skipDesktop, }: {
    children: React.ReactNode;
    skipMobile?: boolean;
    skipDesktop?: boolean;
}) => JSX.Element;
export default ResponsiveLayout;
