declare const CLOSE_ACTIONS: readonly ["DISMISS", "TIMEOUT", "CONSECUTIVE", "BUTTON"];
export type CloseAction = (typeof CLOSE_ACTIONS)[number];
export type SnackbarType = 'INFORMATIVE' | 'CRITICAL';
export declare const showNativeSnackbar: ({ message, duration, buttonText, buttonAccessibilityLabel, type, withDismiss, }: {
    message: string;
    duration?: 'PERSISTENT';
    buttonText?: string;
    buttonAccessibilityLabel?: string;
    type?: SnackbarType;
    withDismiss?: boolean;
}) => Promise<{
    action: CloseAction;
}>;
export {};
