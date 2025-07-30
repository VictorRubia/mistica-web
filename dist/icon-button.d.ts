import * as React from 'react';
import type { TouchableElement, TouchableComponentProps } from './touchable';
import type { ExclusifyUnion } from './utils/utility-types';
import type { DataAttributes, IconProps, TrackingEvent } from './utils/types';
export type IconButtonType = 'neutral' | 'brand' | 'danger';
export type IconButtonBackgroundType = 'transparent' | 'solid' | 'soft';
type AriaProps = ExclusifyUnion<{
    'aria-label': string;
} | {
    'aria-labelledby': string;
}>;
interface BaseProps {
    children?: undefined;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    dataAttributes?: DataAttributes;
    disabled?: boolean;
    showSpinner?: boolean;
    small?: boolean;
    bleedLeft?: boolean;
    bleedRight?: boolean;
    bleedY?: boolean;
    role?: string;
}
interface IconButtonBaseProps {
    Icon: (props: IconProps) => JSX.Element;
    type?: IconButtonType;
    backgroundType?: IconButtonBackgroundType;
}
interface InternalIconButtonBaseProps {
    hasOverlay?: boolean;
}
export type IconButtonProps = TouchableComponentProps<BaseProps & IconButtonBaseProps & AriaProps>;
export declare const RawIconButton: React.ForwardRefExoticComponent<(IconButtonProps & InternalIconButtonBaseProps) & React.RefAttributes<TouchableElement>>;
export declare const InternalIconButton: React.ForwardRefExoticComponent<ExclusifyUnion<IconButtonProps & InternalIconButtonBaseProps> & React.RefAttributes<TouchableElement>>;
export declare const IconButton: React.ForwardRefExoticComponent<ExclusifyUnion<IconButtonProps> & React.RefAttributes<TouchableElement>>;
type ToggleStateProps = {
    Icon: (props: IconProps) => JSX.Element;
    type?: IconButtonType;
    backgroundType?: IconButtonBackgroundType;
} & AriaProps;
interface BaseToggleProps {
    checkedProps: ToggleStateProps;
    uncheckedProps: ToggleStateProps;
    onChange?: (checked: boolean) => void | undefined | Promise<void>;
    checked?: boolean;
    defaultChecked?: boolean;
}
export type ToggleIconButtonProps = BaseProps & BaseToggleProps;
export declare const InternalToggleIconButton: React.ForwardRefExoticComponent<BaseProps & BaseToggleProps & InternalIconButtonBaseProps & React.RefAttributes<TouchableElement>>;
export declare const ToggleIconButton: React.ForwardRefExoticComponent<BaseProps & BaseToggleProps & React.RefAttributes<TouchableElement>>;
export {};
