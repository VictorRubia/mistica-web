import * as React from 'react';
import type { Variant } from './theme-variant-context';
export declare const useIsDismissable: () => boolean;
type MaybeDismissableProps = {
    children: React.ReactNode;
    onClose?: () => void;
    width?: string | number;
    'aria-label'?: string;
    variant?: Variant;
};
declare const MaybeDismissable: ({ children, width, onClose, "aria-label": ariaLabel, variant, }: MaybeDismissableProps) => JSX.Element;
export default MaybeDismissable;
