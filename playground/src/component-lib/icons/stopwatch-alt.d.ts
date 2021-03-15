export default StopwatchAlt;
declare function StopwatchAlt({ size, primaryColor, testId }: {
    size: any;
    primaryColor: any;
    testId: any;
}): JSX.Element;
declare namespace StopwatchAlt {
    namespace propTypes {
        const size: PropTypes.Validator<string>;
        const primaryColor: PropTypes.Validator<string>;
        const testId: PropTypes.Requireable<string>;
    }
}
import PropTypes from "prop-types";
