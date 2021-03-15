export default InternalDropdown;
declare function InternalDropdown(_props: any): JSX.Element;
declare namespace InternalDropdown {
    export { COLORS };
    export { DEFAULT_PROPS };
    export const propTypes: any;
}
declare const COLORS: string[];
declare namespace DEFAULT_PROPS {
    export const color: string;
    export { DropdownDefaultPlaceholder as placeholderComponent };
    export const disabled: boolean;
    export const isValid: boolean;
    export const maxHeight: string;
    export const __internal__focus: boolean;
    export const __internal__open: boolean;
}
declare function DropdownDefaultPlaceholder(): JSX.Element;
