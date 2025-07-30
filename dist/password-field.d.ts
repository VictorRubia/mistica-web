/// <reference types="react" />
import type { CommonFormFieldProps } from './text-field-base';
export interface PasswordFieldProps extends CommonFormFieldProps {
    onChangeValue?: (value: string, rawValue: string) => void;
}
declare const PasswordField: ({ disabled, error, helperText, name, label, optional, validate, validateOnBlurInsideForm, onChange, onChangeValue, onBlur, value, autoComplete, defaultValue, dataAttributes, ...rest }: PasswordFieldProps) => JSX.Element;
export default PasswordField;
