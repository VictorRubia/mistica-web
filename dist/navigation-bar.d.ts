import * as React from 'react';
import type { BoxProps } from './box';
import type { ExclusifyUnion } from './utils/utility-types';
import type { Variant } from './theme-variant-context';
import type { TouchableProps } from './touchable';
import type { HeadingType } from './utils/types';
type WideConfig = {
    paddingX: BoxProps['paddingX'];
};
interface NavigationBarCommonProps {
    variant?: Variant;
    onBack?: () => void;
    title?: string;
    titleAs?: HeadingType;
    right?: React.ReactElement;
    withBorder?: boolean;
    children?: undefined;
    wide?: boolean | WideConfig;
}
interface NavigationBarTopFixedProps extends NavigationBarCommonProps {
    topFixed?: true;
    paddingX?: undefined;
}
interface NavigationBarNotFixedProps extends NavigationBarCommonProps {
    topFixed: false;
    /** @deprecated use wide */
    paddingX?: number;
}
type NavigationBarProps = NavigationBarTopFixedProps | NavigationBarNotFixedProps;
export declare const NavigationBar: ({ onBack, title, titleAs, right, variant, topFixed, paddingX, withBorder, wide, }: NavigationBarProps) => JSX.Element;
type InteractiveProps = ExclusifyUnion<{
    href: string;
} | {
    to: string;
} | {
    onPress: () => void;
}>;
type MaybeInteractiveProps = ExclusifyUnion<{
    href?: string;
} | {
    to?: string;
} | {
    onPress?: () => void;
}>;
type SectionItem = {
    title: string;
} & InteractiveProps;
type SectionColumn = {
    title: string;
    items: ReadonlyArray<SectionItem>;
};
type SectionMenu = ExclusifyUnion<{
    columns: ReadonlyArray<SectionColumn>;
} | {
    content?: React.ReactElement | ((props: {
        closeMenu: () => void;
    }) => React.ReactElement);
}>;
type MainNavigationBarSection = {
    title: string;
    menu?: SectionMenu;
} & MaybeInteractiveProps;
type MainNavigationBarProps = {
    sections?: ReadonlyArray<MainNavigationBarSection>;
    selectedIndex?: number;
    right?: React.ReactElement;
    logo?: React.ReactElement;
    variant?: Variant;
    children?: undefined;
    topFixed?: boolean;
    withBorder?: boolean;
    burgerMenuExtra?: React.ReactNode;
    large?: boolean;
    desktopLargeMenu?: boolean;
    wide?: boolean | WideConfig;
};
type MainNavigationBarMenuStatus = 'opening' | 'opened' | 'closing' | 'closed';
type MainNavigationBarDesktopMenuState = {
    isMenuOpen: boolean;
    openedSection: number;
    menuHeight: string;
    menuStatus: MainNavigationBarMenuStatus;
    openSectionMenu: (index: number) => void;
    closeMenu: () => void;
    setMenuHeight: (height: string) => void;
    setIsMenuHovered: (value: boolean) => void;
    setFocusedItem: (item?: {
        column: number;
        index: number;
    }) => void;
    debouncedOpenSectionMenu: (index: number) => void;
    cancelDebouncedOpenSectionMenu: (index: number) => void;
};
export declare const useMainNavigationBarDesktopMenuState: () => MainNavigationBarDesktopMenuState;
export declare const MainNavigationBar: ({ sections, selectedIndex, right, variant, topFixed, withBorder, burgerMenuExtra, logo, large, desktopLargeMenu, wide, }: MainNavigationBarProps) => JSX.Element;
type FunnelNavigationBarProps = {
    variant?: Variant;
    logo?: React.ReactElement;
    right?: React.ReactElement;
    topFixed?: boolean;
    children?: undefined;
    withBorder?: boolean;
    wide?: boolean | WideConfig;
};
export declare const FunnelNavigationBar: ({ logo, right, variant, topFixed, withBorder, wide, }: FunnelNavigationBarProps) => JSX.Element;
type NavigationBarActionGroupProps = {
    children: React.ReactNode;
};
export declare const NavigationBarActionGroup: ({ children }: NavigationBarActionGroupProps) => JSX.Element;
type NavigationBarActionProps = TouchableProps;
export declare const NavigationBarAction: ({ children, ...touchableProps }: NavigationBarActionProps) => JSX.Element;
export {};
