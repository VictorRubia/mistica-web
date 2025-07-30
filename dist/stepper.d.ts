/// <reference types="react" />
import type { DataAttributes } from './utils/types';
type StepperProps = {
    steps: ReadonlyArray<string>;
    currentIndex: number;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-description'?: string;
    'aria-describedby'?: string;
    dataAttributes?: DataAttributes;
};
declare const Stepper: ({ steps, currentIndex, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, "aria-description": ariaDescription, "aria-describedby": ariaDescribedby, dataAttributes, }: StepperProps) => JSX.Element;
export default Stepper;
