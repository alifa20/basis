export default NotificationNew;
declare function NotificationNew({ size, primaryColor, secondaryColor, testId }: {
    size: any;
    primaryColor: any;
    secondaryColor: any;
    testId: any;
}): JSX.Element;
declare namespace NotificationNew {
    namespace propTypes {
        const size: PropTypes.Validator<string>;
        const primaryColor: PropTypes.Validator<string>;
        const secondaryColor: PropTypes.Validator<string>;
        const testId: PropTypes.Requireable<string>;
    }
}
import PropTypes from "prop-types";
