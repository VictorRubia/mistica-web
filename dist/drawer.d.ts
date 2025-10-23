import * as React from 'react';
import type { DataAttributes, HeadingType, TrackingEvent } from './utils/types';
type ButtonProps = {
    text: string;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    trackEvent?: boolean;
    onPress?: () => unknown;
    disabled?: boolean;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-description'?: string;
    'aria-describedby'?: string;
    'aria-current'?: React.AriaAttributes['aria-current'];
};
type DrawerProps = {
    title?: string;
    subtitle?: string;
    description?: string;
    titleAs?: HeadingType;
    dismissLabel?: string;
    /**
     * this handler is mandatory. You should unmount the Drawer component on close.
     */
    onClose: () => void;
    /**
     * set this handler to enable dismiss:
     * - touching "X"
     * - touching overlay
     * - pressing ESC
     */
    onDismiss?: () => void;
    children?: React.ReactNode;
    /**
     * width is ignored in mobile viewport
     */
    width?: number;
    button?: ButtonProps;
    secondaryButton?: ButtonProps;
    buttonLink?: ButtonProps;
    dataAttributes?: DataAttributes;
};
declare const Drawer: ({ title, subtitle, description, titleAs, dismissLabel, width, onClose, onDismiss, children, button, secondaryButton, buttonLink, dataAttributes, }: DrawerProps) => JSX.Element;
export default Drawer;
