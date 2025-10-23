import * as React from 'react';
import type { RegionCode } from './utils/region-code';
import type { Locale } from './utils/locale';
import type { BorderRadiiConfig, Colors, Skin, SkinName, TextPresetsConfig, ThemeVariantsConfig } from './skins/types';
import type { TrackingEvent } from './utils/types';
import type { Dictionary, TextToken } from './text-tokens';
export declare const NAVBAR_HEIGHT_MOBILE = 56;
export declare const NAVBAR_HEIGHT_DESKTOP = 80;
export declare const NAVBAR_HEIGHT_DESKTOP_LARGE: number;
export declare const dimensions: {
    headerMobileHeight: number;
    headerDesktopHeight: number;
};
/**
 * https://reactrouter.com/en/main/components/link
 * https://nextjs.org/docs/app/api-reference/components/link
 */
type LinkComponent = React.ComponentType<{
    style?: React.CSSProperties;
    className?: string;
    'aria-label'?: string;
    disabled?: boolean;
    role?: string;
    'data-testid'?: string;
    'aria-checked'?: React.AnchorHTMLAttributes<HTMLAnchorElement>['aria-checked'];
    'aria-controls'?: string;
    'aria-expanded'?: React.AnchorHTMLAttributes<HTMLAnchorElement>['aria-expanded'];
    'aria-hidden'?: React.AnchorHTMLAttributes<HTMLAnchorElement>['aria-hidden'];
    'aria-selected'?: React.AnchorHTMLAttributes<HTMLAnchorElement>['aria-selected'];
    tabIndex?: number;
    innerRef?: React.RefObject<HTMLAnchorElement>;
    to: string | {
        pathname?: string;
        search?: string;
        state?: unknown;
        hash?: string;
        key?: string;
    };
    replace?: boolean;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLAnchorElement>;
    children: React.ReactNode;
    target?: string;
}>;
export declare const getMisticaLinkComponent: (Link?: ThemeConfig['Link']) => LinkComponent;
export type ColorScheme = 'dark' | 'light' | 'auto';
export type EventFormat = 'universal-analytics' | 'google-analytics-4';
export type ThemeConfig = Readonly<{
    skin: Readonly<Skin>;
    colorScheme?: ColorScheme;
    i18n: Readonly<{
        locale: Locale;
        phoneNumberFormattingRegionCode: RegionCode;
    }>;
    platformOverrides?: Readonly<{
        platform?: 'ios' | 'android' | 'desktop';
        insideNovumNativeApp?: boolean;
        userAgent?: string;
    }>;
    texts?: Partial<Dictionary>;
    analytics?: Readonly<{
        logEvent: (trackingEvent: TrackingEvent) => Promise<void>;
        eventFormat?: EventFormat;
    }>;
    dimensions?: Readonly<{
        headerMobileHeight: number | 'mistica';
    }>;
    Link?: LinkComponent | {
        type: 'ReactRouter5' | 'ReactRouter6' | 'Next12' | 'Next13' | 'Next14';
        Component: React.ComponentType<any>;
    };
    useHrefDecorator?: () => (href: string) => string;
    enableTabFocus?: boolean;
    preventCopyInFormFields?: boolean;
}>;
export type Theme = {
    skinName: SkinName;
    i18n: {
        locale: Locale;
        phoneNumberFormattingRegionCode: RegionCode;
    };
    platformOverrides: {
        platform?: 'ios' | 'android' | 'desktop';
        insideNovumNativeApp?: boolean;
        userAgent?: string;
    };
    texts: Partial<Dictionary>;
    analytics: {
        logEvent: (trackingEvent: TrackingEvent) => Promise<void>;
        eventFormat: EventFormat;
    };
    dimensions: {
        headerMobileHeight: number;
        headerDesktopHeight: number;
    };
    colorValues: Colors;
    borderRadii: BorderRadiiConfig;
    textPresets: TextPresetsConfig;
    themeVariants: ThemeVariantsConfig;
    Link: LinkComponent;
    isDarkMode: boolean;
    isIos: boolean;
    useHrefDecorator: () => (href: string) => string;
    t: (token: TextToken, ...params: Array<string | number>) => string;
    preventCopyInFormFields: boolean;
};
export {};
