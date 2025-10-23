import * as React from 'react';
type ProviderProps = {
    children: React.ReactNode;
};
export type NestableContext<Value> = {
    Getter: (props: {
        children: (value: Value) => React.ReactNode;
    }) => JSX.Element;
    Provider: (props: ProviderProps) => JSX.Element;
    Setter: (props: {
        value: Value;
    }) => null;
    useValue: () => Value;
    useSetValue: (value: Value) => void;
};
export declare const createNestableContext: <Value>(defaultValue: Value, valuesReducer?: (values: Array<Value>) => Value) => NestableContext<Value>;
export {};
