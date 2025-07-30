import * as React from 'react';
import type { ButtonLink, NullableButtonElement } from './button';
import type { RendersNullableElement } from './utils/types';
type Props = {
    isFooterVisible?: boolean;
    button?: NullableButtonElement;
    secondaryButton?: NullableButtonElement;
    link?: RendersNullableElement<typeof ButtonLink>;
    footerBgColor?: string;
    containerBgColor?: string;
    children: React.ReactNode;
    onChangeFooterHeight?: (heightInPx: number) => void;
};
declare const ButtonFixedFooterLayout: ({ isFooterVisible, button, secondaryButton, link, children, footerBgColor, containerBgColor, onChangeFooterHeight, }: Props) => JSX.Element;
export default ButtonFixedFooterLayout;
