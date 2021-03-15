declare namespace _default {
    const accordion: {
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
    const button: {
        getCSS: ({ targetElement, variant, color, showLoadingIcon, __internal__keyboardFocus, __internal__hover, __internal__active, }: {
            targetElement: any;
            variant: any;
            color: any;
            showLoadingIcon: any;
            __internal__keyboardFocus: any;
            __internal__hover: any;
            __internal__active: any;
        }) => any;
    };
    const checkbox: {
        getCSS: ({ targetElement, color, isChecked, __internal__keyboardFocus, }: {
            targetElement: any;
            color: any;
            isChecked: any;
            __internal__keyboardFocus: any;
        }) => any;
    };
    const dropdown: {
        getCSS: ({ targetElement, color, isPlaceholder, isHighlighted, __internal__focus, }: {
            targetElement: any;
            color: any;
            isPlaceholder: any;
            isHighlighted: any;
            __internal__focus: any;
        }) => any;
    };
    const field: {
        getCSS: ({ targetElement, fullWidth, disabled }: {
            targetElement: any;
            fullWidth: any;
            disabled: any;
        }) => any;
    };
    const input: {
        getCSS: ({ targetElement, variant, prefix, suffix, color, __internal__focus, }: {
            targetElement: any;
            variant: any;
            prefix: any;
            suffix: any;
            color: any;
            __internal__focus: any;
        }) => any;
    };
    const link: {
        getCSS: ({ targetElement, appearance, variant, buttonTheme, __internal__keyboardFocus, __internal__hover, __internal__active, }: {
            targetElement: any;
            appearance: any;
            variant: any;
            buttonTheme: any;
            __internal__keyboardFocus: any;
            __internal__hover: any;
            __internal__active: any;
        }) => any;
    };
    const list: {
        getCSS: ({ targetElement, type, variant, textStyle }: {
            targetElement: any;
            type: any;
            variant: any;
            textStyle: any;
        }) => any;
    };
    const radioGroup: {
        getCSS: ({ targetElement, color, isChecked }: {
            targetElement: any;
            color: any;
            isChecked: any;
        }) => any;
    };
    const select: {
        getCSS: ({ color, fullWidth, __internal__focus }: {
            color: any;
            fullWidth: any;
            __internal__focus: any;
        }) => any;
    };
    const stepper: {
        getCSS: ({ targetElement, stepsCount, isMinor, isCurrent, isPrevious }: {
            targetElement: any;
            stepsCount: any;
            isMinor: any;
            isCurrent: any;
            isPrevious: any;
        }) => any;
    };
    const text: {
        getCSS: ({ color, align, wrap }: {
            color: any;
            align: any;
            wrap: any;
        }) => {
            whiteSpace?: string | undefined;
            overflow?: string | undefined;
            textOverflow?: string | undefined;
            margin: number;
            color: any;
            textAlign: any;
        };
    };
    const textarea: {
        getCSS: ({ color, __internal__focus }: {
            color: any;
            __internal__focus: any;
        }) => any;
    };
    const space: string[];
    const fontSizes: string[];
    const lineHeights: string[];
    namespace letterSpacings {
        const hero: string;
        const heading1: string;
        const heading2: string;
        const heading3: string;
        const heading4: string;
        const heading5: string;
        const heading6: string;
        const body: string;
        const overline: string;
    }
    namespace fonts {
        export const heading: string;
        const body_1: string;
        export { body_1 as body };
    }
    namespace fontWeights {
        const light: number;
        const medium: number;
        const semiBold: number;
        const bold: number;
    }
    namespace colors {
        const black: string;
        namespace grey {
            const t75: string;
            const t65: string;
            const t30: string;
            const t16: string;
            const t10: string;
            const t07: string;
            const t05: string;
            const t03: string;
        }
        const white: string;
        namespace primary {
            namespace blue {
                export const t100: string;
                export const t80: string;
                export const t60: string;
                const t30_1: string;
                export { t30_1 as t30 };
                const t10_1: string;
                export { t10_1 as t10 };
            }
        }
        namespace secondary {
            namespace lightBlue {
                const t100_1: string;
                export { t100_1 as t100 };
                const t80_1: string;
                export { t80_1 as t80 };
                const t60_1: string;
                export { t60_1 as t60 };
                export const t25: string;
                export const t15: string;
            }
            namespace pink {
                const t100_2: string;
                export { t100_2 as t100 };
                const t80_2: string;
                export { t80_2 as t80 };
                const t60_2: string;
                export { t60_2 as t60 };
                const t30_2: string;
                export { t30_2 as t30 };
                const t15_1: string;
                export { t15_1 as t15 };
            }
            namespace purple {
                const t100_3: string;
                export { t100_3 as t100 };
                const t80_3: string;
                export { t80_3 as t80 };
                const t60_3: string;
                export { t60_3 as t60 };
                const t30_3: string;
                export { t30_3 as t30 };
                const t15_2: string;
                export { t15_2 as t15 };
            }
            namespace turquoise {
                const t100_4: string;
                export { t100_4 as t100 };
                const t80_4: string;
                export { t80_4 as t80 };
                const t60_4: string;
                export { t60_4 as t60 };
                const t30_4: string;
                export { t30_4 as t30 };
                const t10_2: string;
                export { t10_2 as t10 };
            }
        }
        namespace highlight {
            export namespace blue_1 {
                const t100_5: string;
                export { t100_5 as t100 };
                const t80_5: string;
                export { t80_5 as t80 };
                export const t50: string;
                const t30_5: string;
                export { t30_5 as t30 };
                const t15_3: string;
                export { t15_3 as t15 };
            }
            export { blue_1 as blue };
            export namespace pink_1 {
                const t100_6: string;
                export { t100_6 as t100 };
                const t80_6: string;
                export { t80_6 as t80 };
                const t50_1: string;
                export { t50_1 as t50 };
                const t30_6: string;
                export { t30_6 as t30 };
                const t15_4: string;
                export { t15_4 as t15 };
            }
            export { pink_1 as pink };
            export namespace purple_1 {
                const t100_7: string;
                export { t100_7 as t100 };
                const t80_7: string;
                export { t80_7 as t80 };
                const t50_2: string;
                export { t50_2 as t50 };
                const t30_7: string;
                export { t30_7 as t30 };
                const t15_5: string;
                export { t15_5 as t15 };
            }
            export { purple_1 as purple };
        }
        namespace conditional {
            namespace positive {
                export const graphics: string;
                const text_1: string;
                export { text_1 as text };
            }
            namespace attention {
                const graphics_1: string;
                export { graphics_1 as graphics };
                const text_2: string;
                export { text_2 as text };
            }
            namespace negative {
                const graphics_2: string;
                export { graphics_2 as graphics };
                const text_3: string;
                export { text_3 as text };
            }
        }
    }
    const borderWidths: string[];
    const radii: string[];
    namespace breakpoints {
        const xs: string;
        const sm: string;
        const md: string;
        const lg: string;
        const xl: string;
    }
    namespace breakpointMaxWidths {
        const sm_1: string;
        export { sm_1 as sm };
        const md_1: string;
        export { md_1 as md };
        const lg_1: string;
        export { lg_1 as lg };
        const xl_1: string;
        export { xl_1 as xl };
    }
    namespace transitions {
        const button_1: string;
        export { button_1 as button };
        const link_1: string;
        export { link_1 as link };
        export const icon: string;
    }
    namespace zIndices {
        export const aboveNormalFlow: number;
        export const stickyItem: number;
        const dropdown_1: number;
        export { dropdown_1 as dropdown };
    }
}
export default _default;
