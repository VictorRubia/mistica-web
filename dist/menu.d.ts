import * as React from 'react';
import type { ExclusifyUnion } from './utils/utility-types';
import type { DataAttributes, IconProps } from './utils/types';
interface MenuItemBaseProps {
    label: string;
    Icon?: (props: IconProps) => JSX.Element;
    destructive?: boolean;
    disabled?: boolean;
    onPress: (item: number) => void;
    dataAttributes?: DataAttributes;
}
interface MenuItemWithoutControlProps extends MenuItemBaseProps {
    controlType?: undefined;
    checked?: undefined;
}
interface MenuItemWithControlProps extends MenuItemBaseProps {
    controlType?: 'checkbox';
    checked?: boolean;
}
type MenuItemProps = ExclusifyUnion<MenuItemWithControlProps | MenuItemWithoutControlProps>;
export declare const MenuItem: ({ label, Icon, destructive, disabled, onPress, controlType, checked, dataAttributes, }: MenuItemProps) => JSX.Element;
type MenuSectionProps = {
    children?: React.ReactNode;
};
export declare const MenuSection: ({ children }: MenuSectionProps) => JSX.Element;
type MenuRenderProps = {
    ref: (element: HTMLElement | null) => void;
    className: string;
    close: () => void;
};
type TargetRenderProps = {
    ref: (element: HTMLElement | null) => void;
    onPress: () => void;
    isMenuOpen: boolean;
};
export type MenuProps = {
    width?: number;
    renderTarget: (props: TargetRenderProps) => React.ReactNode;
    renderMenu: (props: MenuRenderProps) => React.ReactNode;
    children?: void;
    position?: 'left' | 'right';
    dataAttributes?: DataAttributes;
};
export declare const Menu: ({ renderTarget, renderMenu, width, position, dataAttributes, }: MenuProps) => JSX.Element;
export {};
