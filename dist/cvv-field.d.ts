/// <reference types="react" />
import type { CommonFormFieldProps } from './text-field-base';
import type { CardOptions } from './utils/credit-card';
export interface CvvFieldProps extends CommonFormFieldProps {
    acceptedCards?: CardOptions;
    onChangeValue?: (value: string, rawValue: string) => void;
}
declare const CvvField: ({ disabled, error, helperText, name, label, optional, validate: validateProp, validateOnBlurInsideForm, onChange, onChangeValue, onBlur, acceptedCards, maxLength, value, autoComplete, defaultValue, dataAttributes, ...rest }: CvvFieldProps) => JSX.Element;
export default CvvField;
