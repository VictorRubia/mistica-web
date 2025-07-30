import * as React from 'react';
type OverscrollColorConfig = {
    topColor?: string;
    bottomColor?: string;
};
export declare const useOverScrollColor: () => OverscrollColorConfig;
type ProviderProps = {
    children: React.ReactNode;
};
export declare const OverscrollColorProvider: ({ children }: ProviderProps) => JSX.Element;
export declare const useSetOverscrollColor: (config: OverscrollColorConfig) => void;
export {};
