export default LinkedIn;
declare function LinkedIn({ size, primaryColor, hoverColor, testId }: {
    size: any;
    primaryColor: any;
    hoverColor: any;
    testId: any;
}): JSX.Element;
declare namespace LinkedIn {
    namespace propTypes {
        const size: PropTypes.Validator<string>;
        const primaryColor: PropTypes.Validator<string>;
        const hoverColor: PropTypes.Requireable<string>;
        const testId: PropTypes.Requireable<string>;
    }
}
import PropTypes from "prop-types";
