/// <reference types="react" />
import type { DataAttributes, IconProps } from './utils/types';
type AvatarProps = {
    size: number;
    src?: string;
    initials?: string;
    textColor?: string;
    backgroundColor?: string;
    Icon?: (props: IconProps) => JSX.Element;
    badge?: boolean | number;
    'aria-label'?: string;
    dataAttributes?: DataAttributes;
    border?: boolean;
};
/**
 * Not using TextPresets here because we don't want to scale the avatar text with the device settings
 */
export declare const renderText: (size: number, text: string) => JSX.Element | null;
declare const Avatar: ({ size, src, Icon, badge, initials, "aria-label": ariaLabel, dataAttributes, ...props }: AvatarProps) => JSX.Element;
export default Avatar;
