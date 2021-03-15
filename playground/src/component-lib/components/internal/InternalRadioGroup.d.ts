export default InternalRadioGroup;
declare function InternalRadioGroup(_props: any): JSX.Element;
declare namespace InternalRadioGroup {
    export { COLORS };
    export { DEFAULT_PROPS };
    export namespace propTypes {
        const name: PropTypes.Validator<string>;
        const parentName: PropTypes.Requireable<string>;
        const labelId: PropTypes.Requireable<string>;
        const options: PropTypes.Validator<(PropTypes.InferProps<{
            label: PropTypes.Validator<string>;
            description: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            value: PropTypes.Validator<string>;
        }> | null | undefined)[]>;
        const columns: PropTypes.Requireable<number>;
        const color: PropTypes.Requireable<string>;
        const disabled: PropTypes.Requireable<boolean>;
        const isValid: PropTypes.Requireable<boolean>;
        const describedBy: PropTypes.Requireable<string>;
        const onFocus: PropTypes.Validator<(...args: any[]) => any>;
        const onBlur: PropTypes.Validator<(...args: any[]) => any>;
        const onMouseDown: PropTypes.Validator<(...args: any[]) => any>;
        const value: PropTypes.Validator<string>;
        const onChange: PropTypes.Validator<(...args: any[]) => any>;
    }
}
declare const COLORS: string[];
declare namespace DEFAULT_PROPS {
    const color_1: string;
    export { color_1 as color };
    const disabled_1: boolean;
    export { disabled_1 as disabled };
    const isValid_1: boolean;
    export { isValid_1 as isValid };
}
import PropTypes from "prop-types";
