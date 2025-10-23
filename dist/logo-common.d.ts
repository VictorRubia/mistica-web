import type { ByBreakpoint } from './utils/types';
export type LogoType = 'isotype' | 'imagotype' | 'vertical';
export type LogoImageProps = {
    size: ByBreakpoint<number>;
    type: LogoType;
    isDarkMode: boolean;
    isInverse: boolean;
    color?: string;
};
export declare const calcInlineVars: (size: ByBreakpoint<number>) => Record<string, string>;
