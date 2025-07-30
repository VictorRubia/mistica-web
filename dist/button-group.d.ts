/// <reference types="react" />
import type { ButtonLink, ButtonPrimary, ButtonSecondary } from './button';
import type { ByBreakpoint, DataAttributes, RendersNullableElement } from './utils/types';
export interface ButtonGroupProps {
    primaryButton?: RendersNullableElement<typeof ButtonPrimary>;
    secondaryButton?: RendersNullableElement<typeof ButtonSecondary>;
    link?: RendersNullableElement<typeof ButtonLink>;
    dataAttributes?: DataAttributes;
    align?: ByBreakpoint<'center' | 'left'>;
}
declare const ButtonGroup: ({ primaryButton, secondaryButton, link, align, dataAttributes, }: ButtonGroupProps) => JSX.Element | null;
export default ButtonGroup;
