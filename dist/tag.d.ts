/// <reference types="react" />
import type { DataAttributes, IconProps } from './utils/types';
export type TagType = 'promo' | 'info' | 'active' | 'inactive' | 'success' | 'warning' | 'error';
export type TagProps = {
    type?: 'promo' | 'info' | 'active' | 'inactive' | 'success' | 'warning' | 'error';
    children: string;
    Icon?: (props: IconProps) => JSX.Element;
    dataAttributes?: DataAttributes;
    badge?: boolean | number;
    backgroundColor?: string;
    textColor?: string;
};
declare const Tag: ({ Icon, children, dataAttributes, type, badge, backgroundColor: customBackgroundColor, textColor: customTextColor, }: TagProps) => JSX.Element | null;
export default Tag;
