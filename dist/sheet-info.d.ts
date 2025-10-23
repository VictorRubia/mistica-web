import * as React from 'react';
import type { ExclusifyUnion } from './utils/utility-types';
import type { DataAttributes, IconProps } from './utils/types';
type InfoSheetProps = {
    title?: string;
    subtitle?: string;
    description?: string | ReadonlyArray<string>;
    items: ReadonlyArray<{
        id?: string;
        title: string;
        description?: string;
        icon: ExclusifyUnion<{
            type: 'regular' | 'small';
            /** @deprecated use url instead */
            Icon: React.ComponentType<IconProps>;
        } | {
            type: 'regular' | 'small';
            url: string;
            urlDark?: string;
        } | {
            type: 'bullet';
        }>;
    }>;
    onClose?: () => void;
    dataAttributes?: DataAttributes;
    button?: {
        text: string;
    };
};
declare const InfoSheet: React.ForwardRefExoticComponent<InfoSheetProps & React.RefAttributes<HTMLDivElement>>;
export default InfoSheet;
