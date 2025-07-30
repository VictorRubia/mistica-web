import * as React from 'react';
import type { SnackbarType, CloseAction } from './snackbar-native';
import type { DataAttributes } from './utils/types';
export type SnackbarCloseHandler = (result: {
    action: CloseAction;
}) => unknown;
export type Props = {
    buttonText?: string;
    buttonAccessibilityLabel?: string;
    closeButtonLabel?: string;
    duration?: 'PERSISTENT';
    message: string;
    onClose?: SnackbarCloseHandler;
    type?: SnackbarType;
    children?: void;
    dataAttributes?: DataAttributes;
    withDismiss?: boolean;
};
export type ImperativeHandle = {
    close: SnackbarCloseHandler;
};
declare const Snackbar: React.ForwardRefExoticComponent<Props & React.RefAttributes<ImperativeHandle & HTMLDivElement>>;
export default Snackbar;
