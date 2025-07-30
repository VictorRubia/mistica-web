import * as React from 'react';
import type { DataAttributes, TrackingEvent } from './utils/types';
type PressedButton = 'PRIMARY' | 'SECONDARY' | 'LINK';
type ButtonProps = {
    text: string;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    trackEvent?: boolean;
};
type ActionsSheetProps = {
    title?: string;
    subtitle?: string;
    description?: string | ReadonlyArray<string>;
    button: ButtonProps;
    secondaryButton?: ButtonProps;
    buttonLink?: ButtonProps & {
        withChevron?: boolean;
    };
    onClose?: () => void;
    onPressButton?: (pressedButton: PressedButton) => void;
    dataAttributes?: DataAttributes;
};
declare const ActionsSheet: React.ForwardRefExoticComponent<ActionsSheetProps & React.RefAttributes<HTMLDivElement>>;
export default ActionsSheet;
