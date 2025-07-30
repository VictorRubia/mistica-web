import * as React from 'react';
export declare const TopDistanceContext: React.Context<number>;
type Props = {
    children: (topDistance: number) => React.ReactNode;
    height: number;
};
declare const FixedToTop: ({ children, height }: Props) => JSX.Element;
export declare const useFixedToTopHeight: () => number;
export default FixedToTop;
