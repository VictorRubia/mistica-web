import * as React from 'react';
import type { DataAttributes } from './utils/types';
type Props = {
    children?: React.ReactNode;
    className?: string;
    delay?: string;
    duration?: string;
    dataAttributes?: DataAttributes;
};
declare const FadeIn: ({ children, className, duration, delay, dataAttributes, }: Props) => JSX.Element;
export default FadeIn;
