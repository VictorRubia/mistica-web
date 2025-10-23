/// <reference types="react" />
import type { CommonFormFieldProps } from './text-field-base';
export interface EmailFieldProps extends CommonFormFieldProps {
    onChangeValue?: (value: string, rawValue: string) => void;
    getSuggestions?: (value: string) => Array<string>;
}
declare const EmailField: ({ disabled, error, helperText, name, label, optional, validate: validateProp, validateOnBlurInsideForm, onChange, onChangeValue, onBlur, value, autoComplete, defaultValue, dataAttributes, ...rest }: EmailFieldProps) => JSX.Element;
export default EmailField;
