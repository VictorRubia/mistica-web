import * as React from 'react';
type Props = {
    hidden?: boolean;
    children: React.ReactNode;
};
export declare const DocumentVisibilityProvider: ({ hidden, children }: Props) => JSX.Element;
export declare const useDocumentVisibility: () => boolean;
export {};
