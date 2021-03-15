export default Field;
declare function Field({ fullWidth, optional, disabled, label, hideLabel, renderLabel, labelId, labelFor, auxId, helpText, errors, children, testId, }: {
    fullWidth?: boolean | undefined;
    optional: any;
    disabled: any;
    label: any;
    hideLabel?: boolean | undefined;
    renderLabel?: boolean | undefined;
    labelId: any;
    labelFor: any;
    auxId: any;
    helpText: any;
    errors: any;
    children: any;
    testId: any;
}): JSX.Element;
declare namespace Field {
    namespace propTypes {
        const fullWidth: PropTypes.Requireable<boolean>;
        const optional: PropTypes.Validator<boolean>;
        const disabled: PropTypes.Validator<boolean>;
        const labelId: PropTypes.Requireable<string>;
        const labelFor: PropTypes.Requireable<string>;
        const label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const hideLabel: PropTypes.Requireable<boolean>;
        const renderLabel: PropTypes.Requireable<boolean>;
        const auxId: PropTypes.Validator<string>;
        const helpText: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const errors: PropTypes.Requireable<PropTypes.ReactNodeLike[]>;
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const testId: PropTypes.Requireable<string>;
    }
}
import PropTypes from "prop-types";
