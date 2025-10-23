/// <reference types="react" />
import type { ExclusifyUnion } from './utils/utility-types';
import type { DataAttributes, IconProps } from './utils/types';
type RatingIconProps = {
    ActiveIcon: (props: IconProps) => JSX.Element;
    InactiveIcon: (props: IconProps) => JSX.Element;
    color: string;
};
interface BaseRatingProps {
    size?: number;
    dataAttributes?: DataAttributes;
    valueLabels?: Array<string>;
    'aria-label'?: string;
    'aria-labelledby'?: string;
}
interface QuantitativeRatingProps extends BaseRatingProps {
    type?: 'quantitative';
    icon?: RatingIconProps;
    count?: number;
}
interface QualitativeRatingProps extends BaseRatingProps {
    type: 'qualitative';
    icons?: Array<RatingIconProps>;
}
type RatingProps = ExclusifyUnion<QualitativeRatingProps | QuantitativeRatingProps> & {
    value?: number;
    defaultValue?: number;
    onChangeValue?: (value: number) => void;
    disabled?: boolean;
};
type InfoRatingProps = Omit<QuantitativeRatingProps, 'type' | 'valueLabels'> & {
    value?: number;
    withHalfValue?: boolean;
};
export declare const Rating: ({ dataAttributes, ...props }: RatingProps) => JSX.Element;
export declare const InfoRating: ({ dataAttributes, icon, size, ...props }: InfoRatingProps) => JSX.Element;
export {};
