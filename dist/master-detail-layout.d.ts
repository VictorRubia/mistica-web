import * as React from 'react';
type Props = {
    isOpen: boolean;
    master: React.ReactNode;
    detail?: React.ReactNode;
    children?: void;
};
declare const MasterDetailLayout: ({ isOpen, master, detail }: Props) => JSX.Element;
export default MasterDetailLayout;
