import * as React from 'react';
import type { ButtonLink, ButtonPrimary, ButtonSecondary } from './button';
import type { DataAttributes, HeadingType, RendersNullableElement } from './utils/types';
type Props = {
    title?: {
        text: string;
        'aria-label'?: string;
        as?: HeadingType;
    } | string;
    titleAs?: HeadingType;
    description: string;
    onClose?: () => void;
    closeButtonLabel?: string;
    asset?: React.ReactElement;
    button?: RendersNullableElement<typeof ButtonPrimary>;
    secondaryButton?: RendersNullableElement<typeof ButtonSecondary>;
    buttonLink?: RendersNullableElement<typeof ButtonLink>;
    children?: void;
    'aria-label'?: string;
    dataAttributes?: DataAttributes;
    role?: string;
};
declare const Callout: ({ title, titleAs, description, asset, onClose, closeButtonLabel, button, secondaryButton, buttonLink, "aria-label": ariaLabel, dataAttributes, role, }: Props) => JSX.Element;
export default Callout;
