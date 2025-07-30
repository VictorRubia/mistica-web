import * as React from 'react';
import type { DataAttributes } from './utils/types';
export type SelectProps = {
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    id?: string;
    label: string;
    name: string;
    optional?: boolean;
    showOptionalLabel?: boolean;
    validate?: (value: string | void, rawValue: string | void) => string | void;
    onChangeValue?: (value: string) => void;
    onBlur?: (event: React.FocusEvent<any>) => void;
    options: ReadonlyArray<{
        readonly value: string;
        readonly text: string;
    }>;
    autoFocus?: boolean;
    value?: string;
    defaultValue?: string;
    fullWidth?: boolean;
    native?: boolean;
    children?: void;
    dataAttributes?: DataAttributes;
};
declare const Select: ({ id, label, helperText: helperTextProp, value: valueProp, defaultValue, onChangeValue: onChangeValueProp, name, fullWidth, options, optional, showOptionalLabel, disabled: disabledProp, error: errorProp, onBlur, autoFocus, native, dataAttributes, }: SelectProps) => JSX.Element;
export default Select;
