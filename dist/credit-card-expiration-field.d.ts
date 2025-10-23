/// <reference types="react" />
import type { CommonFormFieldProps } from './text-field-base';
type ExpirationDateValue = {
    month: number | null;
    year: number | null;
    raw: string;
};
export interface CreditCardExpirationFieldProps extends CommonFormFieldProps {
    validate?: (value: ExpirationDateValue | undefined, rawValue: string) => string | undefined;
    onChangeValue?: (value: ExpirationDateValue) => void;
}
declare const CreditCardExpirationField: ({ disabled, error, helperText, name, label, optional, validate: validateProp, validateOnBlurInsideForm, onChange, onChangeValue, onBlur, value, autoComplete, defaultValue, dataAttributes, ...rest }: CreditCardExpirationFieldProps) => JSX.Element;
export default CreditCardExpirationField;
