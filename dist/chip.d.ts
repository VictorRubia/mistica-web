/// <reference types="react" />
import type { TouchableComponentProps } from './touchable';
import type { ExclusifyUnion } from './utils/utility-types';
import type { DataAttributes, IconProps } from './utils/types';
interface SimpleChipProps {
    children: string;
    Icon?: (props: IconProps) => JSX.Element;
    id?: string;
    dataAttributes?: DataAttributes;
    badge?: boolean | number;
}
interface ClosableChipProps extends SimpleChipProps {
    onClose: () => void;
    closeButtonLabel?: string;
}
interface ToggleChipProps extends SimpleChipProps {
    active: boolean;
}
interface ToggleChipProps extends SimpleChipProps {
    active: boolean;
}
type ClickableChipProps = TouchableComponentProps<SimpleChipProps & {
    active?: boolean;
}>;
type ChipProps = ExclusifyUnion<ClosableChipProps | ToggleChipProps | ClickableChipProps>;
declare const Chip: (props: ChipProps) => JSX.Element;
export default Chip;
