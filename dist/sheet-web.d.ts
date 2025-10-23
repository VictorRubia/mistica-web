/// <reference types="react" />
import type { SheetPromiseResolve, SheetTypeWithPropsUnion } from './sheet-types';
type SheetWebProps = {
    sheetProps: SheetTypeWithPropsUnion;
    onResolve: SheetPromiseResolve;
};
declare const SheetWeb: ({ sheetProps, onResolve }: SheetWebProps) => JSX.Element;
export default SheetWeb;
