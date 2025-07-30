import * as React from 'react';
import type { TouchableElement } from './touchable';
import type { DataAttributes, IconProps, RendersElement, RendersNullableElement, TrackingEvent } from './utils/types';
import type { Location } from 'history';
import type { ExclusifyUnion } from './utils/utility-types';
interface CommonProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    small?: boolean;
    showSpinner?: boolean;
    loadingText?: string;
    disabled?: boolean;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    trackEvent?: boolean;
    /** "data-" prefix is automatically added. For example, use "testid" instead of "data-testid" */
    dataAttributes?: DataAttributes;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-controls'?: string;
    'aria-expanded'?: 'true' | 'false' | boolean;
    'aria-haspopup'?: 'true' | 'false' | 'menu' | 'dialog' | boolean;
    'aria-current'?: React.AriaAttributes['aria-current'];
    'aria-description'?: string;
    'aria-describedby'?: string;
    tabIndex?: number;
    StartIcon?: (props: IconProps) => JSX.Element;
    EndIcon?: (props: IconProps) => JSX.Element;
    /** IMPORTANT: try to avoid using role="link" with onPress and first consider other alternatives like to/href + onNavigate */
    role?: string;
}
interface ToButtonProps extends CommonProps {
    to: string | Location;
    newTab?: boolean;
    fullPageOnWebView?: boolean;
    onNavigate?: () => void | Promise<void>;
}
interface OnPressButtonProps extends CommonProps {
    onPress: (event: React.MouseEvent<HTMLElement>) => void | undefined | Promise<void>;
}
interface HrefButtonProps extends CommonProps {
    href: string;
    newTab?: boolean;
    loadOnTop?: boolean;
    onNavigate?: () => void | Promise<void>;
}
interface FakeButtonProps extends CommonProps {
    fake: true;
}
interface SubmitButtonProps extends CommonProps {
    submit: true;
}
type ButtonProps = ExclusifyUnion<FakeButtonProps | SubmitButtonProps | ToButtonProps | OnPressButtonProps | HrefButtonProps>;
type ButtonLinkProps = ExclusifyUnion<FakeButtonProps | ToButtonProps | OnPressButtonProps | HrefButtonProps> & {
    bleedLeft?: boolean;
    bleedRight?: boolean;
    bleedY?: boolean;
};
export declare const ButtonLink: React.ForwardRefExoticComponent<(ButtonLinkProps & {
    withChevron?: boolean | undefined;
}) & React.RefAttributes<TouchableElement>>;
export declare const ButtonLinkDanger: React.ForwardRefExoticComponent<ButtonLinkProps & React.RefAttributes<TouchableElement>>;
export declare const ButtonPrimary: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<TouchableElement>>;
export declare const ButtonSecondary: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<TouchableElement>>;
export declare const ButtonDanger: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<TouchableElement>>;
export type ButtonElement = RendersElement<typeof ButtonPrimary> | RendersElement<typeof ButtonSecondary> | RendersElement<typeof ButtonDanger>;
export type NullableButtonElement = RendersNullableElement<typeof ButtonPrimary> | RendersNullableElement<typeof ButtonSecondary> | RendersNullableElement<typeof ButtonDanger>;
export {};
