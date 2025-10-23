/// <reference types="react" />
import type { CommonFormFieldProps } from './text-field-base';
export interface DateFieldProps extends CommonFormFieldProps {
    onChangeValue?: (value: string, rawValue: string) => void;
    min?: Date;
    max?: Date;
}
declare const FormDateField: ({ disabled, error, helperText, name, label, optional, validate: validateProp, validateOnBlurInsideForm, onChange, onChangeValue: onChangeValueProp, onBlur, value, defaultValue, min, max, dataAttributes, ...rest }: DateFieldProps) => JSX.Element;
export default FormDateField;
