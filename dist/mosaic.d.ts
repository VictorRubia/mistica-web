import * as React from 'react';
import type { DataAttributes } from './utils/types';
type MosaicItemGridMode = 'horizontal' | 'square' | 'vertical';
type MosaicItem = React.ReactElement | ((config: {
    gridMode: MosaicItemGridMode;
}) => React.ReactElement);
type HorizontalMosaicProps = {
    items: ReadonlyArray<MosaicItem>;
    withBullets?: boolean;
    withControls?: boolean;
    free?: boolean;
    dataAttributes?: DataAttributes;
};
export declare const HorizontalMosaic: ({ items, withBullets, withControls, free, dataAttributes, }: HorizontalMosaicProps) => JSX.Element;
type VerticalMosaicProps = {
    items: ReadonlyArray<MosaicItem>;
    dataAttributes?: DataAttributes;
};
export declare const VerticalMosaic: ({ items, dataAttributes }: VerticalMosaicProps) => JSX.Element;
export {};
