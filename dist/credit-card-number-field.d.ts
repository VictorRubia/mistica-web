/// <reference types="react" />
import type { CardOptions } from './utils/credit-card';
import type { CommonFormFieldProps } from './text-field-base';
interface CreditCardNumberFieldProps extends CommonFormFieldProps {
    acceptedCards?: CardOptions;
    onChangeValue?: (value: string, rawValue: string) => void;
}
declare const CreditCardNumberField: ({ disabled, error, helperText, name, label, optional, validate: validateProp, validateOnBlurInsideForm, onChange, onChangeValue, onBlur, acceptedCards, value, autoComplete, defaultValue, dataAttributes, ...rest }: CreditCardNumberFieldProps) => JSX.Element;
export default CreditCardNumberField;
