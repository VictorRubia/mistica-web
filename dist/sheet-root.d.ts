import * as React from 'react';
import type { NativeSheetImplementation, SheetResultByType, SheetTypeWithProps } from './sheet-types';
export declare const showSheet: <T extends keyof import("./sheet-types").SheetPropsByType>(sheetProps: SheetTypeWithProps<T>) => Promise<SheetResultByType[T]>;
type Props = {
    nativeImplementation?: NativeSheetImplementation;
    children?: React.ReactNode;
};
export declare const SheetRoot: (props: Props) => JSX.Element;
export default SheetRoot;
