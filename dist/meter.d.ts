import * as React from 'react';
import type { DataAttributes } from './utils/types';
declare const TYPE_LINEAR = "linear";
declare const TYPE_ANGULAR = "angular";
declare const TYPE_CIRCULAR = "circular";
export type MeterType = typeof TYPE_LINEAR | typeof TYPE_ANGULAR | typeof TYPE_CIRCULAR;
type MeterProps = {
    type?: MeterType;
    /** Position of the meter. 0 is at the start, 100 is at the end. The sum of the values must not exceed 100. */
    values: Array<number>;
    width?: number | string;
    colors?: Array<string>;
    reverse?: boolean;
    dataAttributes?: DataAttributes;
    extra?: React.ReactNode;
    'aria-hidden'?: boolean | 'true' | 'false';
    'aria-label'?: string;
    'aria-labelledby'?: string;
};
/**
 * This wrapper is to force a remount when some specific props change
 */
declare const Meter: (props: MeterProps) => JSX.Element;
export default Meter;
