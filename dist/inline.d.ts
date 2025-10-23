import * as React from 'react';
import type { ByBreakpoint, DataAttributes } from './utils/types';
type NumericSpace = -16 | -12 | -8 | -4 | -2 | 0 | 2 | 4 | 8 | 12 | 16 | 24 | 32 | 40 | 48 | 56 | 64;
type FlexSpace = 'between' | 'around' | 'evenly';
type Props = {
    space: FlexSpace | ByBreakpoint<NumericSpace>;
    verticalSpace?: ByBreakpoint<NumericSpace>;
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    children: React.ReactNode;
    className?: string;
    role?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    fullWidth?: boolean;
    dataAttributes?: DataAttributes;
    wrap?: boolean;
};
declare const Inline: ({ space, verticalSpace, className, children, role, alignItems, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, fullWidth, wrap, dataAttributes, }: Props) => JSX.Element;
export default Inline;
