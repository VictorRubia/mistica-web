import * as React from 'react';
import Tag from './tag';
import Image from './image';
import Video from './video';
import { type DataAttributes, type HeadingType, type IconProps, type RendersElement, type RendersNullableElement, type TrackingEvent } from './utils/types';
import type { Variant } from './theme-variant-context';
import type { PressHandler } from './touchable';
import type { VideoElement, VideoSource } from './video';
import type { ButtonLink, ButtonPrimary, ButtonSecondary } from './button';
import type { ExclusifyUnion } from './utils/utility-types';
export declare const useInnerText: () => {
    text: string;
    ref: (instance: HTMLElement | null) => void;
};
type SlotAlignment = 'content' | 'bottom';
type BaseIconButtonAction = {
    Icon: (props: IconProps) => JSX.Element;
    label: string;
    'aria-description'?: string;
    'aria-describedby'?: string;
    'aria-current'?: React.AriaAttributes['aria-current'];
};
type IconButtonAction = BaseIconButtonAction & ExclusifyUnion<{
    href: string;
    newTab?: boolean;
} | {
    to: string;
    newTab?: boolean;
    fullPageOnWebView?: boolean;
    replace?: boolean;
} | {
    onPress: () => void;
}>;
type ToggleIconButtonAction = {
    checkedProps: BaseIconButtonAction;
    uncheckedProps: BaseIconButtonAction;
    onChange?: (checked: boolean) => void | undefined | Promise<void>;
    checked?: boolean;
    defaultChecked?: boolean;
};
export type CardAction = {
    disabled?: boolean;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
} & ExclusifyUnion<IconButtonAction | ToggleIconButtonAction>;
type CardActionsGroupProps = {
    actions?: ReadonlyArray<CardAction | React.ReactElement>;
    onClose?: () => void;
    closeButtonLabel?: string;
    padding?: number;
    variant?: 'default' | 'inverse' | 'media';
};
export declare const CardActionIconButton: (props: CardAction) => JSX.Element;
export declare const CardActionsGroup: ({ actions, padding, onClose, variant, closeButtonLabel, }: CardActionsGroupProps) => JSX.Element;
export type AspectRatio = '1:1' | '16:9' | '7:10' | '9:10' | 'auto';
export declare const CardActionSpinner: ({ color }: IconProps) => React.ReactElement;
export declare const useVideoWithControls: (videoSrc?: VideoSource, poster?: string, videoRef?: React.RefObject<VideoElement>) => {
    video?: React.ReactNode;
    videoAction?: CardAction;
};
type TouchableProps = {
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    role?: string;
    'aria-current'?: React.AriaAttributes['aria-current'];
} & ExclusifyUnion<{
    href: string | undefined;
    newTab?: boolean;
    loadOnTop?: boolean;
    onNavigate?: () => void | Promise<void>;
} | {
    to: string | undefined;
    newTab?: boolean;
    fullPageOnWebView?: boolean;
    replace?: boolean;
    onNavigate?: () => void | Promise<void>;
} | {
    onPress: PressHandler | undefined;
}>;
type TouchableCard<T> = T & TouchableProps;
type MaybeTouchableCard<T> = ExclusifyUnion<TouchableCard<T> | T>;
interface MediaCardBaseProps {
    media: RendersElement<typeof Image> | RendersElement<typeof Video>;
    asset?: React.ReactElement;
    headline?: string | RendersNullableElement<typeof Tag>;
    pretitle?: string;
    pretitleAs?: HeadingType;
    pretitleLinesMax?: number;
    title?: string;
    titleAs?: HeadingType;
    titleLinesMax?: number;
    subtitle?: string;
    subtitleLinesMax?: number;
    description?: string;
    descriptionLinesMax?: number;
    extra?: React.ReactNode;
    actions?: ReadonlyArray<CardAction | React.ReactElement>;
    children?: void;
    dataAttributes?: DataAttributes;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-description'?: string;
    'aria-describedby'?: string;
    onClose?: () => void;
    closeButtonLabel?: string;
    slotAlignment?: SlotAlignment;
}
type MediaCardProps = MediaCardBaseProps & ExclusifyUnion<TouchableProps | {
    button?: RendersNullableElement<typeof ButtonPrimary>;
    buttonLink?: RendersNullableElement<typeof ButtonLink>;
}>;
export declare const MediaCard: React.ForwardRefExoticComponent<MediaCardProps & React.RefAttributes<HTMLDivElement>>;
type NakedCardProps = Omit<MediaCardBaseProps, 'media'> & {
    media?: MediaCardBaseProps['media'];
} & ExclusifyUnion<TouchableProps | {
    button?: RendersNullableElement<typeof ButtonPrimary>;
    buttonLink?: RendersNullableElement<typeof ButtonLink>;
}>;
export declare const NakedCard: React.ForwardRefExoticComponent<NakedCardProps & React.RefAttributes<HTMLDivElement>>;
type SmallNakedCardProps = MaybeTouchableCard<{
    media?: RendersElement<typeof Image> | RendersElement<typeof Video>;
    title?: string;
    titleAs?: HeadingType;
    titleLinesMax?: number;
    subtitle?: string;
    subtitleLinesMax?: number;
    description?: string;
    descriptionLinesMax?: number;
    extra?: React.ReactNode;
    dataAttributes?: DataAttributes;
    slotAlignment?: SlotAlignment;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-description'?: string;
    'aria-describedby'?: string;
}>;
export declare const SmallNakedCard: React.ForwardRefExoticComponent<SmallNakedCardProps & React.RefAttributes<HTMLDivElement>>;
interface DataCardBaseProps {
    /**
     * Typically a mistica-icons component element
     */
    asset?: React.ReactElement;
    headline?: string | RendersNullableElement<typeof Tag>;
    pretitle?: string;
    pretitleAs?: HeadingType;
    pretitleLinesMax?: number;
    title?: string;
    titleAs?: HeadingType;
    titleLinesMax?: number;
    subtitle?: string;
    subtitleLinesMax?: number;
    description?: string;
    descriptionLinesMax?: number;
    extra?: React.ReactNode;
    actions?: ReadonlyArray<CardAction | React.ReactElement>;
    aspectRatio?: AspectRatio | number;
    children?: void;
    /** "data-" prefix is automatically added. For example, use "testid" instead of "data-testid" */
    dataAttributes?: DataAttributes;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-description'?: string;
    'aria-describedby'?: string;
    onClose?: () => void;
    closeButtonLabel?: string;
    slotAlignment?: SlotAlignment;
}
type DataCardProps = DataCardBaseProps & ExclusifyUnion<TouchableProps | {
    button?: RendersNullableElement<typeof ButtonPrimary>;
    buttonLink?: RendersNullableElement<typeof ButtonLink>;
}>;
export declare const DataCard: React.ForwardRefExoticComponent<DataCardProps & React.RefAttributes<HTMLDivElement>>;
type SnapCardProps = MaybeTouchableCard<{
    asset?: React.ReactElement;
    title?: string;
    titleAs?: HeadingType;
    titleLinesMax?: number;
    subtitle?: string;
    subtitleLinesMax?: number;
    description?: string;
    descriptionLinesMax?: number;
    /** "data-" prefix is automatically added. For example, use "testid" instead of "data-testid" */
    dataAttributes?: DataAttributes;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-description'?: string;
    'aria-describedby'?: string;
    extra?: React.ReactNode;
    isInverse?: boolean;
    aspectRatio?: AspectRatio | number;
    slotAlignment?: SlotAlignment;
    children?: void;
}>;
export declare const SnapCard: React.ForwardRefExoticComponent<SnapCardProps & React.RefAttributes<HTMLDivElement>>;
interface CommonDisplayCardProps {
    /**
     * Typically a mistica-icons component element
     */
    asset?: React.ReactElement;
    actions?: ReadonlyArray<CardAction | React.ReactElement>;
    onClose?: () => void;
    closeButtonLabel?: string;
    dataAttributes?: DataAttributes;
    headline?: React.ReactComponentElement<typeof Tag>;
    pretitle?: string;
    pretitleAs?: HeadingType;
    pretitleLinesMax?: number;
    title: string;
    titleAs?: HeadingType;
    titleLinesMax?: number;
    description?: string;
    descriptionLinesMax?: number;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-description'?: string;
    'aria-describedby'?: string;
    aspectRatio?: AspectRatio | number;
    extra?: React.ReactNode;
}
type DisplayMediaCardBaseProps = {
    width?: number | string;
    height?: number | string;
};
type DisplayMediaCardWithImageProps = CommonDisplayCardProps & {
    backgroundImage: string | {
        src: string;
        srcSet?: string;
    } | {
        src?: string;
        srcSet: string;
    };
};
type DisplayMediaCardWithVideoProps = Omit<CommonDisplayCardProps, 'actions' | 'onClose'> & {
    backgroundVideo: VideoSource;
    poster?: string;
    backgroundVideoRef?: React.RefObject<VideoElement>;
};
type DisplayMediaCardProps = DisplayMediaCardBaseProps & ExclusifyUnion<DisplayMediaCardWithImageProps | DisplayMediaCardWithVideoProps> & ExclusifyUnion<TouchableProps | {
    button?: React.ReactComponentElement<typeof ButtonPrimary>;
    secondaryButton?: React.ReactComponentElement<typeof ButtonSecondary>;
    buttonLink?: React.ReactComponentElement<typeof ButtonLink>;
}>;
type DisplayDataCardProps = CommonDisplayCardProps & {
    isInverse?: boolean;
} & ExclusifyUnion<TouchableProps | {
    button?: React.ReactComponentElement<typeof ButtonPrimary>;
    secondaryButton?: React.ReactComponentElement<typeof ButtonSecondary>;
    buttonLink?: React.ReactComponentElement<typeof ButtonLink>;
}>;
export declare const DisplayMediaCard: React.ForwardRefExoticComponent<DisplayMediaCardProps & React.RefAttributes<HTMLDivElement>>;
export declare const DisplayDataCard: React.ForwardRefExoticComponent<DisplayDataCardProps & React.RefAttributes<HTMLDivElement>>;
interface PosterCardBaseProps {
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-description'?: string;
    'aria-describedby'?: string;
    aspectRatio?: AspectRatio | number;
    width?: number | string;
    height?: number | string;
    asset?: React.ReactElement;
    actions?: ReadonlyArray<CardAction | React.ReactElement>;
    onClose?: () => void;
    closeButtonLabel?: string;
    dataAttributes?: DataAttributes;
    headline?: string | RendersNullableElement<typeof Tag>;
    pretitle?: string;
    pretitleAs?: HeadingType;
    pretitleLinesMax?: number;
    title?: string;
    titleAs?: HeadingType;
    titleLinesMax?: number;
    subtitle?: string;
    subtitleLinesMax?: number;
    description?: string;
    descriptionLinesMax?: number;
    extra?: React.ReactNode;
}
interface PosterCardWithImageProps extends PosterCardBaseProps {
    backgroundImage: string | {
        src: string;
        srcSet?: string;
    } | {
        src?: string;
        srcSet: string;
    };
}
type PosterCardWithVideoProps = Omit<PosterCardBaseProps, 'actions' | 'onClose'> & {
    backgroundVideo: VideoSource;
    poster?: string;
    backgroundVideoRef?: React.RefObject<VideoElement>;
};
type PosterCardWithBackgroundColorProps = PosterCardBaseProps & {
    backgroundColor?: string;
} & ExclusifyUnion<{
    variant: Variant;
} | {
    isInverse: boolean;
}>;
type PosterCardProps = MaybeTouchableCard<ExclusifyUnion<PosterCardWithImageProps | PosterCardWithVideoProps | PosterCardWithBackgroundColorProps>>;
export declare const PosterCard: React.ForwardRefExoticComponent<PosterCardProps & React.RefAttributes<HTMLDivElement>>;
export {};
