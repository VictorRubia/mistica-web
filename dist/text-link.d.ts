import * as React from 'react';
import type { AlwaysTouchableComponentProps } from './touchable';
import type { TrackingEvent, DataAttributes } from './utils/types';
interface CommonProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    classes?: {
        [className: string]: string;
    };
    disabled?: boolean;
    'aria-label'?: string;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    trackEvent?: boolean;
    /** "data-" prefix is automatically added. For example, use "testid" instead of "data-testid" */
    dataAttributes?: DataAttributes;
    /** IMPORTANT: try to avoid using role="link" with onPress and first consider other alternatives like to/href + onNavigate */
    role?: string;
    underline?: 'always' | 'on hover';
}
export type TextLinkProps = AlwaysTouchableComponentProps & CommonProps;
declare const TextLink: ({ children, className, disabled, style, trackEvent, underline, ...props }: TextLinkProps) => JSX.Element;
export default TextLink;
