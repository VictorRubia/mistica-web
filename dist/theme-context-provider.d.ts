import * as React from 'react';
import type { ThemeConfig } from './theme';
export declare const useIsOsDarkModeEnabled: () => boolean;
type Props = {
    theme: ThemeConfig;
    as?: string;
    withoutStyles?: boolean;
    children?: React.ReactNode;
};
declare const ThemeContextProvider: ({ theme, children, as, withoutStyles }: Props) => JSX.Element;
export default ThemeContextProvider;
