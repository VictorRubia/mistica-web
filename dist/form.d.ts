import * as React from 'react';
import type { DataAttributes } from './utils/types';
import type { FormErrors } from './form-context';
export type FormValues = {
    [name: string]: any;
};
type FormProps = {
    id?: string;
    onSubmit: (values: FormValues, rawValues: FormValues) => Promise<void> | void;
    initialValues?: FormValues;
    autoJump?: boolean;
    children: React.ReactNode;
    onValidationErrors?: (errors: FormErrors) => void;
    getErrorMessageForScreenReader?: (errors: FormErrors) => string;
    className?: string;
    dataAttributes?: DataAttributes;
};
declare const Form: ({ children, className, onSubmit, initialValues, autoJump, onValidationErrors, getErrorMessageForScreenReader, id: idProp, dataAttributes, }: FormProps) => JSX.Element;
export default Form;
