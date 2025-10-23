import * as React from 'react';
import type { DataAttributes } from './utils/types';
type Props = {
    targetId: string;
    'aria-label'?: string;
    children?: React.ReactNode;
    dataAttributes?: DataAttributes;
};
declare const SkipLink: ({ targetId, children, "aria-label": ariaLabel, dataAttributes }: Props) => JSX.Element;
type SkipLinkNavProps = {
    children: React.ReactNode;
    'aria-label'?: string;
    dataAttributes?: DataAttributes;
};
export declare const SkipLinkNav: ({ children, "aria-label": ariaLabel, dataAttributes, }: SkipLinkNavProps) => JSX.Element;
export default SkipLink;
