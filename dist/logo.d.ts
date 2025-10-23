/// <reference types="react" />
import type { LogoType } from './logo-common';
import type { TouchableComponentProps } from './touchable';
import type { ByBreakpoint, DataAttributes } from './utils/types';
type LogoProps = TouchableComponentProps<{
    size?: ByBreakpoint<number>;
    type?: LogoType;
    color?: string;
    /** "data-" prefix is automatically added. For example, use "testid" instead of "data-testid" */
    dataAttributes?: DataAttributes;
}>;
export declare const Logo: ({ size, type, color, ...props }: LogoProps) => JSX.Element;
export declare const MovistarLogo: ({ size, type, color, ...props }: LogoProps) => JSX.Element;
export declare const VivoLogo: ({ size, type, color, ...props }: LogoProps) => JSX.Element;
export declare const O2Logo: ({ size, type, color, ...props }: LogoProps) => JSX.Element;
export declare const O2NewLogo: ({ size, type, color, ...props }: LogoProps) => JSX.Element;
export declare const TelefonicaLogo: ({ size, type, color, ...props }: LogoProps) => JSX.Element;
export declare const TelefonicaEmpresasLogo: ({ size, type, color, ...props }: LogoProps) => JSX.Element;
export declare const BlauLogo: ({ size, type, color, ...props }: LogoProps) => JSX.Element;
export declare const TuLogo: ({ size, type, color, ...props }: LogoProps) => JSX.Element;
export declare const EsimflagLogo: ({ size, type, color, ...props }: LogoProps) => JSX.Element;
export {};
