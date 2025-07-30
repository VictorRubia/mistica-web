/// <reference types="react" />
import type { CommonFormFieldProps } from './text-field-base';
export interface PhoneNumberFieldProps extends CommonFormFieldProps {
    onChangeValue?: (value: string, rawValue: string) => void;
    prefix?: string;
    getSuggestions?: (value: string) => Array<string>;
    e164?: boolean;
}
declare const PhoneNumberField: ({ disabled, error, helperText, name, label, optional, validate, validateOnBlurInsideForm, onChange, onChangeValue, onBlur, value, defaultValue, e164, dataAttributes, ...rest }: PhoneNumberFieldProps) => JSX.Element;
export default PhoneNumberField;
