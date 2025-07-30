import * as React from 'react';
import type { DataAttributes } from './utils/types';
type RadioContextType = {
    id: string;
    disabled?: boolean;
    selectedValue?: string | null;
    focusableValue?: string | null;
    select: (value: string) => void;
    selectNext: () => void;
    selectPrev: () => void;
};
export declare const useRadioContext: () => RadioContextType;
type PropsRender = {
    value: string;
    id?: string;
    render: (renderProps: {
        controlElement: React.ReactElement;
        labelId: string;
        disabled: boolean;
        checked: boolean;
    }) => React.ReactNode;
    children?: undefined;
    dataAttributes?: DataAttributes;
    'aria-label'?: string;
    'aria-labelledby'?: string;
};
type PropsChildren = {
    value: string;
    id?: string;
    children?: React.ReactNode;
    render?: undefined;
    dataAttributes?: DataAttributes;
    'aria-label'?: string;
    'aria-labelledby'?: string;
};
declare const RadioButton: ({ value, id, dataAttributes, "aria-labelledby": ariaLabelledby, "aria-label": ariaLabel, ...rest }: PropsRender | PropsChildren) => JSX.Element;
type RadioGroupProps = {
    name: string;
    disabled?: boolean;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    children: React.ReactNode;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    dataAttributes?: DataAttributes;
};
export declare const RadioGroup: (props: RadioGroupProps) => JSX.Element;
export default RadioButton;
