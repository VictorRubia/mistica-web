import * as React from 'react';
import type { DataAttributes, RendersNullableElement } from './utils/types';
import type { ButtonLink, ButtonPrimary, ButtonSecondary } from './button';
type SheetProps = {
    onClose?: () => void;
    dataAttributes?: DataAttributes;
    children: React.ReactNode | ((renderParams: {
        closeModal: () => void;
        modalTitleId: string;
    }) => React.ReactNode);
};
declare const Sheet: React.ForwardRefExoticComponent<SheetProps & React.RefAttributes<HTMLDivElement>>;
type SheetBodyProps = {
    title?: string;
    subtitle?: string;
    description?: string | ReadonlyArray<string>;
    button?: RendersNullableElement<typeof ButtonPrimary>;
    secondaryButton?: RendersNullableElement<typeof ButtonSecondary>;
    link?: RendersNullableElement<typeof ButtonLink>;
    modalTitleId: string;
    children?: React.ReactNode;
};
export declare const SheetBody: ({ title, subtitle, description, modalTitleId, button, secondaryButton, link, children, }: SheetBodyProps) => JSX.Element;
export default Sheet;
