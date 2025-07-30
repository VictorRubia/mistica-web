import * as React from 'react';
import type { AlertProps, ConfirmProps, ExtendedDialogProps } from './dialog';
export declare const useDialog: () => {
    alert: (params: AlertProps) => void;
    confirm: (params: ConfirmProps) => void;
    dialog: (params: ExtendedDialogProps) => void;
};
type DialogRootProps = {
    children?: React.ReactNode;
};
export declare const DialogRoot: ({ children }: DialogRootProps) => JSX.Element;
export {};
