import * as React from 'react';
import type { DataAttributes } from './utils/types';
type Props = {
    children: React.ReactNode;
    className?: string;
    dataAttributes?: DataAttributes;
};
declare const ScreenReaderOnly: ({ children, className, dataAttributes }: Props) => JSX.Element;
export default ScreenReaderOnly;
