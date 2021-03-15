export default InternalCheckbox;
declare function InternalCheckbox(_props: any): JSX.Element;
declare namespace InternalCheckbox {
    export { COLORS };
    export { DEFAULT_PROPS };
    export namespace propTypes {
        const name: PropTypes.Validator<string>;
        const parentName: PropTypes.Requireable<string>;
        const inputId: PropTypes.Validator<string>;
        const color: PropTypes.Requireable<string>;
        const disabled: PropTypes.Requireable<boolean>;
        const isValid: PropTypes.Validator<boolean>;
        const labelledBy: PropTypes.Requireable<string>;
        const describedBy: PropTypes.Requireable<string>;
        const onFocus: PropTypes.Validator<(...args: any[]) => any>;
        const onBlur: PropTypes.Validator<(...args: any[]) => any>;
        const value: PropTypes.Validator<boolean>;
        const onChange: PropTypes.Validator<(...args: any[]) => any>;
        const onMouseDown: PropTypes.Validator<(...args: any[]) => any>;
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const __internal__keyboardFocus: PropTypes.Requireable<boolean>;
    }
}
declare const COLORS: string[];
declare namespace DEFAULT_PROPS {
    const color_1: string;
    export { color_1 as color };
    const disabled_1: boolean;
    export { disabled_1 as disabled };
    const __internal__keyboardFocus_1: boolean;
    export { __internal__keyboardFocus_1 as __internal__keyboardFocus };
}
import PropTypes from "prop-types";
