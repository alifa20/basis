export default Instagram;
declare function Instagram({ size, primaryColor, hoverColor, testId }: {
    size: any;
    primaryColor: any;
    hoverColor: any;
    testId: any;
}): JSX.Element;
declare namespace Instagram {
    namespace propTypes {
        const size: PropTypes.Validator<string>;
        const primaryColor: PropTypes.Validator<string>;
        const hoverColor: PropTypes.Requireable<string>;
        const testId: PropTypes.Requireable<string>;
    }
}
import PropTypes from "prop-types";
