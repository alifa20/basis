export default useField;
declare function useField(componentName: any, { name, disabled, optional, validate, data }: {
    name: any;
    disabled: any;
    optional: any;
    validate: any;
    data: any;
}): {
    value: any;
    errors: any;
    hasErrors: boolean;
    onFocus: any;
    onBlur: any;
    onChange: any;
    onMouseDown: any;
};
