import * as React from 'react';
import type { ExclusifyUnion } from './utils/utility-types';
import type { IconProps } from './utils/types';
type TimelineItemCommonProps = {
    children: React.ReactNode;
    role?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    dataAttributes?: Record<string, string>;
    state: 'active' | 'inactive' | 'completed';
};
type TimelineItemProps = TimelineItemCommonProps & ExclusifyUnion<{
    state: 'active' | 'inactive';
    asset?: React.ReactNode | {
        kind: 'dot';
    } | {
        kind: 'number';
        number: number;
    } | {
        kind: 'icon';
        Icon: (props: IconProps) => JSX.Element;
    } | {
        kind: 'circled-icon';
        Icon: (props: IconProps) => JSX.Element;
    };
} | {
    state: 'completed';
    asset?: React.ReactNode | {
        kind: 'dot';
    } | {
        kind: 'number';
        number?: number;
    } | {
        kind: 'icon';
        Icon?: (props: IconProps) => JSX.Element;
    } | {
        kind: 'circled-icon';
        Icon?: (props: IconProps) => JSX.Element;
    };
}>;
export declare const TimelineItem: ({ asset, state, role, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, dataAttributes, children, }: TimelineItemProps) => JSX.Element;
type TimelineProps = {
    children?: React.ReactNode;
    orientation?: 'horizontal' | 'vertical';
    role?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    dataAttributes?: Record<string, string>;
};
declare const Timeline: ({ children, orientation, role, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, dataAttributes, }: TimelineProps) => JSX.Element;
export default Timeline;
