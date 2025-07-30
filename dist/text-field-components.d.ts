import * as React from 'react';
import type { DataAttributes } from './utils/types';
export type InputState = 'focused' | 'filled' | 'default';
type LabelProps = {
    shrinkLabel?: boolean;
    forId: string;
    inputState: InputState;
    error?: boolean;
    children: string;
    style?: React.CSSProperties;
    showOptional?: boolean;
};
export declare const Label: ({ shrinkLabel, forId, inputState, error, children, style, showOptional, }: LabelProps) => JSX.Element;
type HelperTextProps = {
    leftText?: string;
    rightText?: string;
    rightTextLabel?: string;
    error?: boolean;
    leftTextId?: string;
    rightTextId?: string;
    children?: void;
};
export declare const HelperText: ({ leftText, leftTextId, rightText, rightTextId, rightTextLabel, error, }: HelperTextProps) => JSX.Element;
type FieldContainerProps = {
    multiline?: boolean;
    disabled?: boolean;
    children: React.ReactNode;
    helperText?: React.ReactNode;
    className?: string;
    fieldRef?: React.RefObject<HTMLDivElement>;
    fullWidth?: boolean;
    readOnly?: boolean;
    dataAttributes?: DataAttributes;
};
export declare const FieldContainer: ({ multiline, disabled, children, helperText, className, fieldRef, fullWidth, readOnly, dataAttributes, }: FieldContainerProps) => JSX.Element;
export {};
