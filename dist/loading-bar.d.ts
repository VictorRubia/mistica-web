/// <reference types="react" />
import type { DataAttributes } from './utils/types';
type Props = {
    visible: boolean;
    children?: void;
    dataAttributes?: DataAttributes;
};
declare const LoadingBar: ({ visible, dataAttributes }: Props) => JSX.Element;
export default LoadingBar;
