declare function _default(theme: any, { getColor, getTextStyle }: {
    getColor: any;
    getTextStyle: any;
}): {
    getContentColor: (headerColor: any) => "grey.t03" | "secondary.lightBlue.t15" | "white";
    getCSS: ({ targetElement, color, textColor, itemGap, isOpen, __internal__keyboardFocus, }: {
        targetElement: any;
        color: any;
        textColor: any;
        itemGap: any;
        isOpen: any;
        __internal__keyboardFocus: any;
    }) => any;
};
export default _default;
