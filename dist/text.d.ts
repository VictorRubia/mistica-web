import * as React from 'react';
import type { ExclusifyUnion } from './utils/utility-types';
import type { FontWeight } from './skins/types';
import type { DataAttributes } from './utils/types';
export declare const mapToWeight: {
    light: number;
    regular: number;
    medium: number;
    bold: number;
};
export interface TextPresetProps {
    color?: string;
    decoration?: 'underline' | 'line-through' | 'inherit' | 'none';
    transform?: 'uppercase' | 'capitalize' | 'lowercase' | 'inherit' | 'none';
    children?: React.ReactNode;
    truncate?: boolean | number;
    wordBreak?: boolean;
    hyphens?: 'auto' | 'manual' | 'none';
    textAlign?: 'center' | 'right' | 'left';
    id?: string;
    as?: React.ComponentType<any> | string;
    role?: string;
    'aria-level'?: number;
    'aria-label'?: string;
    'aria-hidden'?: React.HTMLAttributes<HTMLDivElement>['aria-hidden'];
    'aria-live'?: React.HTMLAttributes<HTMLDivElement>['aria-live'];
    dataAttributes?: DataAttributes;
    forceMobileSizes?: boolean;
    textShadow?: string;
}
interface TextProps extends TextPresetProps {
    weight?: FontWeight;
    /** in pixels, will be converted to rem in runtime */
    size?: number;
    /** in pixels, will be converted to rem in runtime */
    mobileSize?: number;
    /** in pixels, will be converted to rem in runtime */
    desktopSize?: number;
    /** in pixels, will be converted to rem in runtime */
    lineHeight?: string | number;
    /** in pixels, will be converted to rem in runtime */
    mobileLineHeight?: string | number;
    /** in pixels, will be converted to rem in runtime */
    desktopLineHeight?: string | number;
    letterSpacing?: number;
    forzeMobileSize?: never;
}
export declare const Text: ({ weight, color, decoration, truncate, transform, wordBreak, hyphens, as, children, size, mobileSize, desktopSize, lineHeight, mobileLineHeight, desktopLineHeight, letterSpacing, textAlign, textShadow, id, role, "aria-level": ariaLevel, "aria-label": ariaLabel, "aria-hidden": ariaHidden, "aria-live": ariaLive, dataAttributes, }: TextProps) => JSX.Element | null;
interface LightProps extends TextPresetProps {
    light: boolean;
}
interface MediumProps extends TextPresetProps {
    medium: boolean;
}
interface RegularProps extends TextPresetProps {
    regular: boolean;
}
interface RestrictedWeightTextProps<T> extends TextPresetProps {
    weight: T;
}
type RegularMediumProps = ExclusifyUnion<RegularProps | MediumProps | RestrictedWeightTextProps<'regular' | 'medium'>>;
type LightRegularMediumProps = ExclusifyUnion<LightProps | RegularProps | MediumProps | RestrictedWeightTextProps<'light' | 'regular' | 'medium'>>;
export declare const Text10: ({ dataAttributes, forceMobileSizes, ...props }: TextPresetProps) => JSX.Element;
export declare const Text9: ({ dataAttributes, forceMobileSizes, ...props }: TextPresetProps) => JSX.Element;
export declare const Text8: ({ dataAttributes, forceMobileSizes, ...props }: TextPresetProps) => JSX.Element;
export declare const Text7: ({ dataAttributes, forceMobileSizes, ...props }: TextPresetProps) => JSX.Element;
export declare const Text6: ({ dataAttributes, forceMobileSizes, ...props }: TextPresetProps) => JSX.Element;
export declare const Text5: ({ dataAttributes, forceMobileSizes, ...props }: TextPresetProps) => JSX.Element;
export declare const Text4: ({ dataAttributes, forceMobileSizes, ...props }: LightRegularMediumProps) => JSX.Element;
export declare const Text3: ({ dataAttributes, forceMobileSizes, ...props }: LightRegularMediumProps) => JSX.Element;
export declare const Text2: ({ dataAttributes, forceMobileSizes, ...props }: RegularMediumProps) => JSX.Element;
export declare const Text1: ({ dataAttributes, forceMobileSizes, ...props }: RegularMediumProps) => JSX.Element;
export default Text;
