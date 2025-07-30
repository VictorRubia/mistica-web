/// <reference types="react" />
import type { DataAttributes } from './utils/types';
type Props = {
    value?: number;
    defaultValue?: number;
    min?: number;
    max?: number;
    onChangeValue?: (value: number) => void;
    onRemove?: () => void;
    children?: void;
    disabled?: boolean;
    dataAttributes?: DataAttributes;
    removeLabel?: string;
    increaseLabel?: string;
    decreaseLabel?: string;
    valueLabel?: string;
};
declare const Counter: ({ value, defaultValue, onChangeValue, onRemove, min, max, dataAttributes, disabled, removeLabel, increaseLabel, decreaseLabel, valueLabel, }: Props) => JSX.Element;
export default Counter;
