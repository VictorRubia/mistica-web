import * as React from 'react';
import type { ButtonLink } from './button';
import type { RendersNullableElement } from './utils/types';
import type { ExclusifyUnion } from './utils/utility-types';
interface BaseDialogProps {
    className?: string;
    title?: string;
    message: string;
    acceptText?: string;
    onAccept?: () => void;
    destructive?: boolean;
    closeButtonLabel?: string;
}
export type AlertProps = BaseDialogProps;
export interface ConfirmProps extends BaseDialogProps {
    cancelText?: string;
    onCancel?: () => void;
}
export interface ExtendedDialogProps extends BaseDialogProps {
    asset?: React.ReactElement;
    subtitle?: string;
    extra?: React.ReactNode;
    cancelText?: string;
    onCancel?: () => void;
    link?: RendersNullableElement<typeof ButtonLink>;
}
export type DialogProps = ExclusifyUnion<AlertProps | ConfirmProps | ExtendedDialogProps> & {
    type: 'dialog' | 'alert' | 'confirm';
    triggerEl?: HTMLElement;
};
type ModalDialogProps = DialogProps & {
    onDestroy: () => void;
};
declare const ModalDialog: (props: ModalDialogProps) => JSX.Element;
export default ModalDialog;
