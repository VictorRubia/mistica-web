import * as React from 'react';
type Props = {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    group?: string;
};
declare const FocusTrap: ({ children, disabled, className, group }: Props) => JSX.Element;
export default FocusTrap;
