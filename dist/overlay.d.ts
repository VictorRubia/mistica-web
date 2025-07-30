import * as React from 'react';
import type { DataAttributes } from './utils/types';
type Props = {
    children?: React.ReactNode;
    onPress?: (evt: React.MouseEvent<HTMLDivElement>) => unknown;
    style?: React.CSSProperties;
    className?: string;
    disableScroll?: boolean;
    dataAttributes?: DataAttributes;
};
declare const Overlay: ({ onPress, children, className, style, disableScroll, dataAttributes, }: Props) => JSX.Element;
export default Overlay;
