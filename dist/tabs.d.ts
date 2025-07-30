import * as React from 'react';
import type { DataAttributes, IconProps, TrackingEvent } from './utils/types';
export type TabsProps = {
    selectedIndex: number;
    onChange: (selectedIndex: number) => void;
    tabs: ReadonlyArray<{
        readonly text: string;
        readonly trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
        readonly Icon?: (props: IconProps) => JSX.Element;
        readonly 'aria-controls'?: string;
        readonly id?: string;
    }>;
    children?: void;
    dataAttributes?: DataAttributes;
    selectedTabRef?: React.RefCallback<HTMLDivElement> | React.Ref<HTMLDivElement>;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-description'?: string;
    'aria-describedby'?: string;
    renderPanel?: (config: {
        selectedIndex: number;
        panelProps: {
            id: string;
            role: string;
            tabIndex: number;
            'aria-labelledby': string;
        };
    }) => React.ReactNode;
};
declare const Tabs: ({ selectedIndex, onChange, tabs, dataAttributes, selectedTabRef, renderPanel, ...otherProps }: TabsProps) => JSX.Element;
export default Tabs;
