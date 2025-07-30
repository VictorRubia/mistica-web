/// <reference types="react" />
import type { CommonFormFieldProps } from './text-field-base';
export interface IbanFieldProps extends CommonFormFieldProps {
    onChangeValue?: (value: string, rawValue: string) => void;
    prefix?: string;
    getSuggestions?: (value: string) => Array<string>;
}
declare const IbanField: ({ disabled, error, helperText, name, label, optional, validate: customValidate, validateOnBlurInsideForm, onChange, onChangeValue, onBlur, value, defaultValue, dataAttributes, ...rest }: IbanFieldProps) => JSX.Element;
export default IbanField;
