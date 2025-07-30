import * as React from 'react';
import type { ButtonLink, ButtonPrimary, ButtonSecondary } from './button';
import type { DataAttributes, HeadingType, RendersNullableElement } from './utils/types';
interface CommonProps {
    title: string;
    titleAs?: HeadingType;
    button?: RendersNullableElement<typeof ButtonPrimary>;
    secondaryButton?: RendersNullableElement<typeof ButtonSecondary>;
    buttonLink?: RendersNullableElement<typeof ButtonLink>;
    description?: string;
    children?: void;
    'aria-label'?: string;
    /** "data-" prefix is automatically added. For example, use "testid" instead of "data-testid" */
    dataAttributes?: DataAttributes;
}
interface IconProps extends CommonProps {
    asset: React.ReactElement;
    imageUrl?: undefined;
}
interface ImageProps extends CommonProps {
    imageUrl: string;
    asset?: undefined;
}
type Props = IconProps | ImageProps;
declare const EmptyStateCard: ({ title, titleAs, description, button, secondaryButton, buttonLink, asset, imageUrl, "aria-label": ariaLabel, dataAttributes, }: Props) => JSX.Element;
export default EmptyStateCard;
