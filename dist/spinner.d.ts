import * as React from 'react';
type Props = {
    color?: string;
    delay?: string;
    size?: number | string;
    /** @deprecated Use aria-hidden instead */
    rolePresentation?: boolean;
    'aria-hidden'?: 'true' | 'false' | boolean;
    'aria-label'?: string;
    style?: React.CSSProperties;
    children?: void;
};
declare const Spinner: ({ color, delay, size, style, rolePresentation, "aria-hidden": ariaHidden, "aria-label": ariaLabel, }: Props) => JSX.Element;
export default Spinner;
