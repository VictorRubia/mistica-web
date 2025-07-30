/// <reference types="react" />
import type { CardOptions } from './utils/credit-card';
type CreditCardFieldsProps = {
    numberFieldName?: string;
    expirationFieldName?: string;
    cvvFieldName?: string;
    acceptedCards?: CardOptions;
    children?: void;
};
declare const CreditCardFields: ({ numberFieldName, expirationFieldName, cvvFieldName, acceptedCards, }: CreditCardFieldsProps) => JSX.Element;
export default CreditCardFields;
