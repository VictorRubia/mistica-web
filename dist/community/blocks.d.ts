/// <reference types="react" />
import type StackingGroup from '../stacking-group';
import type Image from '../image';
import type Tag from '../tag';
import type { RendersNullableElement } from '../utils/renders-element';
import type { ExclusifyUnion } from '../utils/utility-types';
interface RowBlockBaseProps {
    title?: string;
    'aria-label'?: string;
}
interface RowBlockWithDescription extends RowBlockBaseProps {
    description?: string;
}
interface RowBlockWithStackingGroup extends RowBlockBaseProps {
    stackingGroup?: RendersNullableElement<typeof StackingGroup>;
}
type RowBlockProps = ExclusifyUnion<RowBlockWithDescription | RowBlockWithStackingGroup>;
export declare const RowBlock: ({ title, stackingGroup, description, "aria-label": ariaLabel, }: RowBlockProps) => JSX.Element;
interface SimpleBlockProps {
    image?: RendersNullableElement<typeof Image>;
    description?: string;
    'aria-label'?: string;
    rightText?: string;
}
export declare const SimpleBlock: ({ image, description, "aria-label": ariaLabel, rightText, }: SimpleBlockProps) => JSX.Element;
interface InformationBlockProps {
    title?: string;
    description?: ReadonlyArray<string> | string;
    value?: string;
    secondaryValue?: string;
    valueColor?: string;
    'aria-label'?: string;
}
export declare const InformationBlock: ({ title, description, secondaryValue, value, valueColor, "aria-label": ariaLabel, }: InformationBlockProps) => JSX.Element;
interface Heading {
    value: string;
    text?: string;
    valueColor?: string;
}
interface HighlightedValueBlockProps {
    headline?: RendersNullableElement<typeof Tag>;
    headings?: ReadonlyArray<Heading>;
    title?: string;
    pretitle?: string;
    description?: ReadonlyArray<string> | string;
    strikedValue?: string;
    'aria-label'?: string;
}
export declare const HighlightedValueBlock: ({ headline, headings, title, pretitle, description, strikedValue, "aria-label": ariaLabel, }: HighlightedValueBlockProps) => JSX.Element;
interface ValueBlockProps {
    title?: string;
    value?: string;
    description?: ReadonlyArray<string> | string;
    valueColor?: string;
    'aria-label'?: string;
}
export declare const ValueBlock: ({ title, value, description, valueColor, "aria-label": ariaLabel, }: ValueBlockProps) => JSX.Element;
interface ProgressBlockProps {
    title?: string;
    stackingGroup?: RendersNullableElement<typeof StackingGroup>;
    progressPercent?: number;
    reverse?: boolean;
    heading: {
        value: string;
        valueColor?: string;
        text: string;
    };
    description?: string;
    'aria-label'?: string;
}
export declare const ProgressBlock: ({ title, stackingGroup, progressPercent, reverse, heading, description, "aria-label": ariaLabel, }: ProgressBlockProps) => JSX.Element;
export {};
