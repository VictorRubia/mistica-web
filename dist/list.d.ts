import * as React from 'react';
import type { IconButtonProps, ToggleIconButtonProps } from './icon-button';
import type { TouchableElement } from './touchable';
import type { DataAttributes, TrackingEvent } from './utils/types';
import type { ExclusifyUnion } from './utils/utility-types';
type Right = (({ centerY }: {
    centerY: boolean;
}) => React.ReactNode) | React.ReactNode;
interface CommonProps {
    children?: void;
    headline?: string | React.ReactNode;
    title: string;
    titleAs?: string;
    titleLinesMax?: number;
    subtitle?: string;
    subtitleLinesMax?: number;
    description?: string | null;
    descriptionLinesMax?: number;
    detail?: string;
    asset?: React.ReactNode;
    badge?: boolean | number;
    role?: string;
    touchableRole?: string;
    extra?: React.ReactNode;
    dataAttributes?: DataAttributes;
    disabled?: boolean;
    withChevron?: boolean;
    'aria-label'?: string;
    right?: Right;
    danger?: boolean;
    tabIndex?: number;
}
interface ContentProps extends CommonProps {
    headlineRef?: React.Ref<HTMLDivElement>;
    rightRef?: React.Ref<HTMLDivElement>;
    extraRef?: React.Ref<HTMLDivElement>;
    control?: React.ReactNode;
    /** This id is to link the title with the related control */
    labelId?: string;
}
export declare const Content: ({ withChevron, headline, headlineRef, extraRef, title, titleAs, titleLinesMax, subtitle, subtitleLinesMax, description, descriptionLinesMax, detail, asset, danger, badge, right, rightRef, extra, labelId, disabled, control, }: ContentProps) => JSX.Element;
type ControlProps = {
    name?: string;
    value?: boolean;
    defaultValue?: boolean;
    onChange?: (checked: boolean) => void;
};
type BasicRowContentProps = CommonProps;
interface SwitchRowContentProps extends CommonProps {
    onPress?: (() => void) | undefined;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    switch: ControlProps | undefined;
}
interface CheckboxRowContentProps extends CommonProps {
    onPress?: (() => void) | undefined;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    checkbox: ControlProps | undefined;
}
interface RadioRowContentProps extends CommonProps {
    onPress?: (() => void) | undefined;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    radioValue: string;
}
interface IconButtonRowContentProps extends CommonProps {
    onPress?: (() => void) | undefined;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    iconButton: ExclusifyUnion<IconButtonProps | ToggleIconButtonProps> | undefined;
}
type TouchableCommonProps = {
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-description'?: string;
    'aria-describedby'?: string;
    'aria-current'?: React.AriaAttributes['aria-current'];
};
interface HrefRowContentProps extends CommonProps, TouchableCommonProps {
    href: string | undefined;
    newTab?: boolean;
    loadOnTop?: boolean;
    onNavigate?: () => void | Promise<void>;
}
interface ToRowContentProps extends CommonProps, TouchableCommonProps {
    to: string | undefined;
    newTab?: boolean;
    fullPageOnWebView?: boolean;
    replace?: boolean;
    onNavigate?: () => void | Promise<void>;
}
interface OnPressRowContentProps extends CommonProps, TouchableCommonProps {
    onPress: (() => void) | undefined;
}
type RowContentProps = ExclusifyUnion<BasicRowContentProps | SwitchRowContentProps | RadioRowContentProps | IconButtonRowContentProps | CheckboxRowContentProps | HrefRowContentProps | ToRowContentProps | OnPressRowContentProps>;
export declare const Row: React.ForwardRefExoticComponent<RowContentProps & React.RefAttributes<TouchableElement>>;
type CommonAccessibilityProps = {
    'aria-live'?: 'polite' | 'off' | 'assertive';
    'aria-atomic'?: boolean;
};
type RowListProps = {
    children: React.ReactNode;
    ariaLabelledby?: string;
    role?: string;
    dataAttributes?: DataAttributes;
} & CommonAccessibilityProps;
export declare const RowList: ({ children, ariaLabelledby, role, "aria-live": ariaLive, "aria-atomic": ariaAtomic, dataAttributes, }: RowListProps) => JSX.Element;
type CommonBoxedRowProps = {
    isInverse?: false;
    danger: true;
} | {
    isInverse?: boolean;
    danger?: false;
} | {
    isInverse?: false;
    danger: boolean;
};
type BoxedRowProps = ExclusifyUnion<BasicRowContentProps | SwitchRowContentProps | RadioRowContentProps | IconButtonRowContentProps | CheckboxRowContentProps | HrefRowContentProps | ToRowContentProps | OnPressRowContentProps> & CommonBoxedRowProps;
export declare const BoxedRow: React.ForwardRefExoticComponent<BoxedRowProps & React.RefAttributes<HTMLDivElement>>;
type BoxedRowListProps = {
    children: React.ReactNode;
    ariaLabelledby?: string;
    role?: string;
    dataAttributes?: DataAttributes;
} & CommonAccessibilityProps;
export declare const BoxedRowList: ({ children, ariaLabelledby, role, dataAttributes, "aria-live": ariaLive, "aria-atomic": ariaAtomic, }: BoxedRowListProps) => JSX.Element;
export {};
