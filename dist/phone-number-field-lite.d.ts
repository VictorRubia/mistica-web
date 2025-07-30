/// <reference types="react" />
import type { CommonFormFieldProps } from './text-field-base';
import type { RegionCode } from './utils/region-code';
/**
 * Simple phone formatter for a few countries and a subset of phone numbers
 *
 * Formatting conditions have been adapted to exactly match libphonenumber's as you type formatting
 * Not all formatting rules are implemented, only the most common ones. For a more complete solution, use PhoneNumberField
 */
export declare const formatPhoneLite: (regionCode: RegionCode, number: string) => string;
export interface PhoneNumberFieldProps extends CommonFormFieldProps {
    onChangeValue?: (value: string, rawValue: string) => void;
    prefix?: string;
    getSuggestions?: (value: string) => Array<string>;
    format?: (number: string) => string;
    e164?: boolean;
}
declare const PhoneNumberFieldLite: ({ disabled, error, helperText, name, label, optional, validate, validateOnBlurInsideForm, onChange, onChangeValue, onBlur, value, defaultValue, dataAttributes, e164, ...rest }: PhoneNumberFieldProps) => JSX.Element;
export default PhoneNumberFieldLite;
