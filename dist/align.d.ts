import * as React from 'react';
import type { DataAttributes } from './utils/types';
type Props = {
    x?: 'start' | 'center' | 'end';
    y?: 'start' | 'center' | 'end';
    width?: number | string;
    height?: number | string;
    children?: React.ReactNode;
    dataAttributes?: DataAttributes;
};
declare const Align: ({ x, y, width, height, children, dataAttributes }: Props) => JSX.Element;
export default Align;
