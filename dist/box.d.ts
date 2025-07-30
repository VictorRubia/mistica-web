import * as React from 'react';
import type { ByBreakpoint, DataAttributes } from './utils/types';
export type PadSize = 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80;
export type BoxProps = {
    width?: number | string;
    padding?: ByBreakpoint<PadSize>;
    paddingX?: ByBreakpoint<PadSize>;
    paddingY?: ByBreakpoint<PadSize>;
    paddingTop?: ByBreakpoint<PadSize>;
    paddingBottom?: ByBreakpoint<PadSize>;
    paddingLeft?: ByBreakpoint<PadSize>;
    paddingRight?: ByBreakpoint<PadSize>;
    as?: React.ComponentType<any> | string;
    children?: React.ReactNode;
    /**
     * @deprecated this component is meant to be used only to add padding.
     * Consider using a div (or similar) instead if you need to add extra styles
     */
    className?: string;
    role?: string;
    /** "data-" prefix is automatically added. For example, use "testid" instead of "data-testid" */
    dataAttributes?: DataAttributes;
    'aria-label'?: string;
    'aria-hidden'?: React.HTMLAttributes<HTMLAnchorElement>['aria-hidden'];
    id?: string;
};
declare const Box: React.ForwardRefExoticComponent<BoxProps & React.RefAttributes<HTMLDivElement>>;
export default Box;
