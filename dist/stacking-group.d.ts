import * as React from 'react';
type Props = {
    stacked?: boolean;
    moreItemsStyle: {
        type: 'circle' | 'square';
        size: number;
    };
    maxItems?: number;
    children: React.ReactNode;
};
declare const StackingGroup: ({ moreItemsStyle, stacked, maxItems, children, }: Props) => JSX.Element;
export default StackingGroup;
