import * as React from 'react';
import { ButtonPrimary } from './button';
import type { ButtonSecondary, ButtonLink } from './button';
import type { DataAttributes, HeadingType, RendersNullableElement } from './utils/types';
interface BaseProps {
    title: string;
    titleAs?: HeadingType;
    button?: RendersNullableElement<typeof ButtonPrimary> | RendersNullableElement<typeof ButtonSecondary>;
    buttonLink?: RendersNullableElement<typeof ButtonLink>;
    description?: string;
    children?: void;
    'aria-label'?: string;
    dataAttributes?: DataAttributes;
}
interface ImageProps extends BaseProps {
    imageUrl: string;
    largeImageUrl?: undefined;
    asset?: undefined;
}
interface LargeImageProps extends BaseProps {
    largeImageUrl: string;
    imageUrl?: undefined;
    asset?: undefined;
}
interface IconProps extends BaseProps {
    asset: React.ReactElement;
    imageUrl?: undefined;
    largeImageUrl?: undefined;
}
type Props = IconProps | ImageProps | LargeImageProps;
declare const EmptyState: ({ title, titleAs, description, button, buttonLink, largeImageUrl, imageUrl, asset, "aria-label": ariaLabel, dataAttributes, }: Props) => JSX.Element;
export default EmptyState;
