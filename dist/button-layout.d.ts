/// <reference types="react" />
import type { ButtonPrimary, ButtonSecondary, ButtonDanger, ButtonLink } from './button';
import type { DataAttributes, RendersNullableElement } from './utils/types';
type ButtonLayoutProps = {
    align?: 'center' | 'left' | 'right' | 'full-width';
    primaryButton?: RendersNullableElement<typeof ButtonPrimary | typeof ButtonDanger>;
    secondaryButton?: RendersNullableElement<typeof ButtonSecondary>;
    link?: RendersNullableElement<typeof ButtonLink>;
    dataAttributes?: DataAttributes;
};
declare const ButtonLayout: ({ primaryButton, secondaryButton, align, link, dataAttributes, }: ButtonLayoutProps) => JSX.Element;
export default ButtonLayout;
