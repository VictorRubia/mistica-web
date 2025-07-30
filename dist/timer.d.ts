/// <reference types="react" />
import type { DataAttributes } from './utils/types';
export type TimeUnit = 'days' | 'hours' | 'minutes' | 'seconds';
type Label = 'none' | 'short' | 'long';
export interface RemainingTime {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
}
interface BaseProps {
    endTimestamp: Date | number;
    minTimeUnit: TimeUnit;
    maxTimeUnit: TimeUnit;
    dataAttributes?: DataAttributes;
    onProgress?: (value: RemainingTime) => void;
    'aria-label'?: string;
}
interface TextTimerProps extends BaseProps {
    labelType?: Label;
}
interface TimerProps extends BaseProps {
    boxed?: boolean;
}
export declare const TextTimer: ({ endTimestamp, labelType, minTimeUnit, maxTimeUnit, onProgress, dataAttributes, "aria-label": ariaLabel, }: TextTimerProps) => JSX.Element;
export declare const Timer: ({ boxed, endTimestamp, minTimeUnit, maxTimeUnit, onProgress, dataAttributes, "aria-label": ariaLabel, }: TimerProps) => JSX.Element;
export {};
