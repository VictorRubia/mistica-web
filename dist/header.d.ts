import * as React from 'react';
import { type DataAttributes, type HeadingType, type RendersElement, type RendersNullableElement } from './utils/types';
import type NavigationBreadcrumbs from './navigation-breadcrumbs';
import type { ButtonPrimary, ButtonSecondary } from './button';
import type { TextPresetProps } from './text';
type OverridableTextProps = {
    color?: TextPresetProps['color'];
    decoration?: TextPresetProps['decoration'];
    truncate?: TextPresetProps['truncate'];
};
type RichText = string | ({
    text: string;
} & OverridableTextProps);
type HeaderProps = {
    headline?: React.ReactNode;
    pretitle?: RichText;
    pretitleAs?: HeadingType;
    title?: string;
    titleAs?: HeadingType;
    description?: string;
    small?: boolean;
    dataAttributes?: DataAttributes;
};
export declare const Header: ({ headline, pretitle, pretitleAs, title, titleAs, description, dataAttributes, small, }: HeaderProps) => JSX.Element;
type MainSectionHeaderProps = {
    title: string;
    titleAs?: HeadingType;
    description?: string;
    button?: RendersNullableElement<typeof ButtonPrimary> | RendersNullableElement<typeof ButtonSecondary>;
    dataAttributes?: DataAttributes;
};
export declare const MainSectionHeader: ({ title, titleAs, description, button, dataAttributes, }: MainSectionHeaderProps) => JSX.Element;
type HeaderLayoutProps = {
    isInverse?: boolean;
    breadcrumbs?: RendersNullableElement<typeof NavigationBreadcrumbs>;
    /**
     * Intentionally not forced to RendersElement<typeof Header> to allow skeletons for example
     * The header is optional in order to allow webviews to delegate the header visualization to the surrounding native app.
     */
    header?: React.ReactNode;
    extra?: React.ReactNode;
    sideBySideExtraOnDesktop?: boolean;
    children?: void;
    dataAttributes?: DataAttributes;
    bleed?: boolean;
    noPaddingY?: boolean;
};
export declare const HeaderLayout: ({ isInverse, breadcrumbs, header, extra, sideBySideExtraOnDesktop, dataAttributes, bleed, noPaddingY, }: HeaderLayoutProps) => JSX.Element;
type MainSectionHeaderLayoutProps = {
    isInverse?: boolean;
    children: RendersElement<typeof MainSectionHeader>;
    dataAttributes?: DataAttributes;
};
export declare const MainSectionHeaderLayout: ({ isInverse, children, dataAttributes, }: MainSectionHeaderLayoutProps) => JSX.Element;
export {};
