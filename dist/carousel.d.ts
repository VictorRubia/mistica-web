import * as React from 'react';
import type { ByBreakpoint, DataAttributes } from './utils/types';
type GoToPage = (pageIndex: number, animate?: boolean) => void;
type PageBulletsProps = {
    currentIndex: number;
    numPages: number | ByBreakpoint<number>;
};
type AutoplayControlProps = {
    isAutoplayEnabled: boolean;
    isAtLastPage: boolean;
    onAutoplayChanged: (autoplay: boolean) => void;
};
type PageControlsProps = {
    setShouldAutoplay: (autoplay: boolean) => void;
    prevArrowEnabled: boolean;
    nextArrowEnabled: boolean;
};
type CarouselControls = {
    goPrev: () => void;
    goNext: () => void;
    goToPage: GoToPage;
    autoplayControlProps: AutoplayControlProps;
    pageControlsProps: PageControlsProps;
    bulletsProps: PageBulletsProps;
};
export declare const CarouselContextProvider: ({ children }: {
    children: React.ReactNode;
}) => JSX.Element;
export declare const useCarouselContext: () => CarouselControls;
export declare const CarouselContextConsumer: React.Consumer<CarouselControls>;
export declare const PageBullets: ({ currentIndex, numPages }: PageBulletsProps) => JSX.Element;
type CarouselPageControlsProps = PageControlsProps & {
    bleedLeft?: boolean;
    bleedRight?: boolean;
    goPrev: () => void;
    goNext: () => void;
};
export declare const CarouselPageControls: ({ bleedLeft, bleedRight, goPrev, goNext, setShouldAutoplay, prevArrowEnabled, nextArrowEnabled, }: CarouselPageControlsProps) => JSX.Element;
type CarouselAutoplayControlProps = AutoplayControlProps & {
    bleedLeft?: boolean;
    bleedRight?: boolean;
};
export declare const CarouselAutoplayControl: ({ isAutoplayEnabled, isAtLastPage, onAutoplayChanged, bleedLeft, bleedRight, }: CarouselAutoplayControlProps) => JSX.Element;
type DesktopItemsPerPage = {
    small?: number;
    medium?: number;
    large?: number;
} | number;
type ItemsPerPageProp = {
    mobile?: number;
    tablet?: number;
    desktop?: DesktopItemsPerPage;
} | number;
type CarouselProps = {
    items: ReadonlyArray<React.ReactNode>;
    itemStyle?: React.CSSProperties;
    itemClassName?: string;
    withBullets?: boolean;
    /**
     * @deprecated use CarouselContextProvider and CarouselContextConsumer to provide bullets props to custom bullets component.
     * See an example here: https://mistica-web.vercel.app/?path=/story/components-carousels-carousel--with-carousel-context
     */
    renderBullets?: (bulletsProps: PageBulletsProps) => React.ReactNode;
    initialActiveItem?: number;
    itemsPerPage?: ItemsPerPageProp;
    /** scrolls one page by default */
    itemsToScroll?: number;
    mobilePageOffset?: 'regular' | 'large';
    /** If true, scroll snap doesn't apply and the user has a free scroll */
    free?: boolean;
    autoplay?: boolean | {
        time: number;
        loop?: boolean;
    };
    withControls?: boolean;
    onPageChange?: (newPageInfo: {
        pageIndex: number;
        shownItemIndexes: Array<number>;
    }) => void;
    dataAttributes?: DataAttributes;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    children?: void;
};
export declare const Carousel: (props: CarouselProps) => JSX.Element;
type CenteredCarouselProps = {
    items: ReadonlyArray<React.ReactNode>;
    itemStyle?: React.CSSProperties;
    itemClassName?: string;
    withBullets?: boolean;
    withControls?: boolean;
    /**
     * @deprecated use CarouselContextProvider and CarouselContextConsumer to provide bullets props to custom bullets component.
     * See an example here: https://mistica-web.vercel.app/?path=/story/components-carousels-carousel--with-carousel-context
     */
    renderBullets?: (bulletsProps: PageBulletsProps) => React.ReactNode;
    initialActiveItem?: number;
    onPageChange?: (newPageInfo: {
        pageIndex: number;
        shownItemIndexes: Array<number>;
    }) => void;
    dataAttributes?: DataAttributes;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    children?: void;
};
export declare const CenteredCarousel: ({ items, itemStyle, itemClassName, withBullets, renderBullets, withControls, initialActiveItem, onPageChange, dataAttributes, "aria-label": ariaLabelProp, "aria-labelledby": ariaLabelledByProp, }: CenteredCarouselProps) => JSX.Element;
type SlideshowProps = {
    items: ReadonlyArray<React.ReactNode>;
    withBullets?: boolean;
    autoplay?: boolean | {
        time: number;
        loop?: boolean;
    };
    initialPageIndex?: number;
    withControls?: boolean;
    onPageChange?: (newPageIndex: number) => void;
    dataAttributes?: DataAttributes;
    inverseBullets?: boolean;
    children?: void;
};
export declare const useSlideshowContext: () => {
    withBullets: boolean;
} | undefined;
export declare const Slideshow: ({ items, withBullets, withControls, autoplay, initialPageIndex, onPageChange, dataAttributes, inverseBullets, }: SlideshowProps) => JSX.Element;
export {};
