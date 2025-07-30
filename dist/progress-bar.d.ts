import * as React from 'react';
import type { DataAttributes } from './utils/types';
type ProgressBarProps = {
    progressPercent: number;
    color?: string;
    children?: void;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-hidden'?: React.HTMLAttributes<HTMLDivElement>['aria-hidden'];
    dataAttributes?: DataAttributes;
    reverse?: boolean;
};
export declare const ProgressBar: ({ progressPercent, color, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "aria-hidden": ariaHidden, dataAttributes, reverse, }: ProgressBarProps) => JSX.Element;
type ProgressBarSteppedProps = {
    steps: number;
    currentStep?: number;
    color?: string;
    dataAttributes?: DataAttributes;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-hidden'?: React.HTMLAttributes<HTMLDivElement>['aria-hidden'];
};
export declare const ProgressBarStepped: ({ steps, currentStep, color, dataAttributes, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "aria-hidden": ariaHidden, }: ProgressBarSteppedProps) => JSX.Element;
export {};
