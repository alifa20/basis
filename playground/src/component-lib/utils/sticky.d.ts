export function getStickyItemInfo(children: any, theme: any): {
    id: string;
    heightMap: {
        default: number;
    };
};
export function getStickyItemCSS({ heightMap, offsetMap, theme }: {
    heightMap: any;
    offsetMap: any;
    theme: any;
}): {
    zIndex: any;
    position: string;
};
