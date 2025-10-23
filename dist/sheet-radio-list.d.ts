import * as React from 'react';
import type { DataAttributes } from './utils/types';
type RadioListSheetProps = {
    title?: string;
    subtitle?: string;
    description?: string | ReadonlyArray<string>;
    items: ReadonlyArray<{
        id: string;
        title?: string;
        description?: string;
        asset?: React.ReactNode;
    }>;
    selectedId?: string;
    onClose?: () => void;
    onSelect?: (id: string) => void;
    dataAttributes?: DataAttributes;
    button?: {
        text: string;
    };
};
declare const RadioListSheet: React.ForwardRefExoticComponent<RadioListSheetProps & React.RefAttributes<HTMLDivElement>>;
export default RadioListSheet;
