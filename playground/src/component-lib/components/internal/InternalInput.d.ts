export default InternalInput;
declare function InternalInput(props: any): JSX.Element;
declare namespace InternalInput {
    export { TYPES };
    export { VARIANTS };
    export { COLORS };
    export { NUMERIC_REGEX };
    export { DECIMAL_REGEX };
    export { DEFAULT_PROPS };
    export namespace propTypes {
        const name: PropTypes.Validator<string>;
        const parentName: PropTypes.Requireable<string>;
        const id: PropTypes.Requireable<string>;
        const type: PropTypes.Requireable<string>;
        const placeholder: PropTypes.Requireable<string>;
        const variant: PropTypes.Requireable<string>;
        const prefix: PropTypes.Requireable<string>;
        const suffix: PropTypes.Requireable<string>;
        const maxLength: PropTypes.Requireable<string | number>;
        const autoComplete: PropTypes.Requireable<string>;
        const color: PropTypes.Requireable<string>;
        const disabled: PropTypes.Requireable<boolean>;
        const pasteAllowed: PropTypes.Requireable<boolean>;
        const isValid: PropTypes.Requireable<boolean>;
        const describedBy: PropTypes.Requireable<string>;
        const onFocus: PropTypes.Validator<(...args: any[]) => any>;
        const onBlur: PropTypes.Validator<(...args: any[]) => any>;
        const value: PropTypes.Validator<string>;
        const onChange: PropTypes.Validator<(...args: any[]) => any>;
        const __internal__focus: PropTypes.Requireable<boolean>;
    }
}
declare const TYPES: string[];
declare const VARIANTS: string[];
declare const COLORS: string[];
declare const NUMERIC_REGEX: RegExp;
declare const DECIMAL_REGEX: RegExp;
declare namespace DEFAULT_PROPS {
    const type_1: string;
    export { type_1 as type };
    const variant_1: string;
    export { variant_1 as variant };
    const color_1: string;
    export { color_1 as color };
    const disabled_1: boolean;
    export { disabled_1 as disabled };
    const autoComplete_1: string;
    export { autoComplete_1 as autoComplete };
    const pasteAllowed_1: boolean;
    export { pasteAllowed_1 as pasteAllowed };
    const isValid_1: boolean;
    export { isValid_1 as isValid };
    const __internal__focus_1: boolean;
    export { __internal__focus_1 as __internal__focus };
}
import PropTypes from "prop-types";
