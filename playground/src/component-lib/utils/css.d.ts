export function getGapValues(gap: any, theme: any): {
    rowGap: any;
    columnGap: any;
} | null;
export function getGridRowColumn(span: any, { allAllowed }?: {
    allAllowed?: boolean | undefined;
}): string | null;
export function getGapPx(gap: any, theme: any): any;
export function getGridTemplateColumns(cols: any): string | null;
export function compareBreakpoints(bp1: any, bp2: any, theme: any): 0 | 1 | -1 | null;
export function getMinMediaQueries(breakpoints: any): {};
export function getExclusiveMediaQueries(breakpoints: any): {};
export function mergeResponsiveCSS(css1: any, css2: any): {};
export function isCSSinOrder(css: any): boolean;
export function responsiveMargin(propsAtBreakpoint: any, theme: any): {
    margin?: undefined;
} | {
    margin: any;
};
export function responsivePadding(propsAtBreakpoint: any, theme: any): {
    padding?: undefined;
} | {
    padding: any;
};
export function responsiveHasBreakpointWidth({ hasBreakpointWidth, margin }: {
    hasBreakpointWidth: any;
    margin: any;
}, theme: any, bp: any): {
    maxWidth: string;
    marginLeft?: undefined;
    marginRight?: undefined;
} | {
    marginLeft: string;
    marginRight: string;
    maxWidth?: undefined;
} | {
    maxWidth: any;
    marginLeft: string;
    marginRight: string;
};
export function responsiveTextStyle(propsAtBreakpoint: any, theme: any): any;
export function responsiveTextAlign(propsAtBreakpoint: any): {
    textAlign?: undefined;
} | {
    textAlign: any;
};
export function responsiveOverflow(propsAtBreakpoint: any): {
    overflow?: undefined;
} | {
    overflow: string;
};
export function responsiveFlexDirection({ direction }: {
    direction: any;
}): {
    flexDirection?: undefined;
} | {
    flexDirection: any;
};
export function responsiveFlexPlaceItems({ direction, placeItems }: {
    direction: any;
    placeItems: any;
}): {
    alignItems?: undefined;
    justifyContent?: undefined;
} | {
    alignItems: string;
    justifyContent: string;
};
export function getGridTemplateRows(cols: any): string | null;
export const DEFAULT_BREAKPOINT: "default";
export function responsiveSize(prop: any): (propsAtBreakpoint: any) => {
    [x: number]: any;
};
