import type { NativeSheetImplementation, SheetPropsByType, SheetResultByType, SheetTypeWithProps } from './sheet-types';
export declare const showNativeSheet: <T extends keyof SheetPropsByType>(nativeSheetImplementation: NativeSheetImplementation, sheetProps: SheetTypeWithProps<T>) => Promise<SheetResultByType[T]>;
