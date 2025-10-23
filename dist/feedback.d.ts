import * as React from 'react';
import type { DataAttributes, IconProps } from './utils/types';
import type { ButtonGroupProps } from './button-group';
type HapticFeedback = 'error' | 'success';
type FeedbackButtonsProps = ButtonGroupProps;
interface FeedbackProps extends FeedbackButtonsProps {
    title: string;
    description?: string | ReadonlyArray<string>;
    extra?: React.ReactNode;
    unstable_inlineInDesktop?: boolean;
    dataAttributes?: DataAttributes;
}
interface AssetFeedbackProps extends FeedbackProps {
    imageUrl?: string;
    imageFit?: 'fit' | 'fill';
}
interface FeedbackScreenProps extends AssetFeedbackProps {
    hapticFeedback?: HapticFeedback;
    asset?: React.ReactNode;
    animateText?: boolean;
    isInverse?: boolean;
}
export declare const FeedbackScreen: ({ title, description, extra, primaryButton, secondaryButton, link, hapticFeedback, asset, animateText, isInverse, unstable_inlineInDesktop, imageUrl, imageFit, dataAttributes, }: FeedbackScreenProps) => JSX.Element;
export declare const SuccessFeedbackScreen: ({ dataAttributes, ...props }: AssetFeedbackProps) => JSX.Element;
interface ErrorFeedbackScreenProps extends Omit<FeedbackProps, 'extra'> {
    errorReference?: string;
}
export declare const ErrorFeedbackScreen: ({ errorReference, dataAttributes, ...otherProps }: ErrorFeedbackScreenProps) => JSX.Element;
interface InfoFeedbackScreenProps extends FeedbackProps {
    Icon?: (props: IconProps) => JSX.Element;
}
export declare const InfoFeedbackScreen: ({ dataAttributes, Icon, ...props }: InfoFeedbackScreenProps) => JSX.Element;
export declare const SuccessFeedback: ({ title, description, extra, primaryButton, secondaryButton, link, imageUrl, imageFit, dataAttributes, }: AssetFeedbackProps) => JSX.Element;
export {};
