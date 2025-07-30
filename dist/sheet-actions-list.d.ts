import * as React from 'react';
import type { ExclusifyUnion } from './utils/utility-types';
import type { DataAttributes, IconProps } from './utils/types';
type ActionsListSheetProps = {
    title?: string;
    subtitle?: string;
    description?: string | ReadonlyArray<string>;
    items: ReadonlyArray<{
        id: string;
        title: string;
        /** "normal" by default */
        style?: 'normal' | 'destructive';
        icon?: ExclusifyUnion<{
            /** @deprecated - use url instead */
            Icon: React.ComponentType<IconProps>;
        } | {
            url: string;
            urlDark?: string;
        }>;
    }>;
    onClose?: () => void;
    onSelect?: (id: string) => void;
    dataAttributes?: DataAttributes;
};
declare const ActionsListSheet: React.ForwardRefExoticComponent<ActionsListSheetProps & React.RefAttributes<HTMLDivElement>>;
export default ActionsListSheet;
