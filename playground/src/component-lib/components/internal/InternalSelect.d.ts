export default InternalSelect;
declare function InternalSelect(_props: any): JSX.Element;
declare namespace InternalSelect {
    export { COLORS };
    export { DEFAULT_PROPS };
    export namespace propTypes {
        const name: PropTypes.Validator<string>;
        const parentName: PropTypes.Requireable<string>;
        const id: PropTypes.Requireable<string>;
        const color: PropTypes.Requireable<string>;
        const placeholder: PropTypes.Requireable<string>;
        const options: PropTypes.Validator<(PropTypes.InferProps<{
            label: PropTypes.Validator<string>;
            value: PropTypes.Validator<string>;
        }> | null | undefined)[]>;
        const fullWidth: PropTypes.Requireable<boolean>;
        const optional: PropTypes.Validator<boolean>;
        const disabled: PropTypes.Requireable<boolean>;
        const isValid: PropTypes.Requireable<boolean>;
        const describedBy: PropTypes.Requireable<string>;
        const onFocus: PropTypes.Validator<(...args: any[]) => any>;
        const onBlur: PropTypes.Validator<(...args: any[]) => any>;
        const value: PropTypes.Validator<string>;
        const onChange: PropTypes.Validator<(...args: any[]) => any>;
        const __internal__focus: PropTypes.Requireable<boolean>;
    }
}
declare const COLORS: string[];
declare namespace DEFAULT_PROPS {
    const color_1: string;
    export { color_1 as color };
    const placeholder_1: string;
    export { placeholder_1 as placeholder };
    const fullWidth_1: boolean;
    export { fullWidth_1 as fullWidth };
    const disabled_1: boolean;
    export { disabled_1 as disabled };
    const isValid_1: boolean;
    export { isValid_1 as isValid };
    const __internal__focus_1: boolean;
    export { __internal__focus_1 as __internal__focus };
}
import PropTypes from "prop-types";
