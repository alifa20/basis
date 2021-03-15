export default BasisProvider;
declare function BasisProvider({ theme, window, InternalLink, isLinkInternal, children, }: {
    theme: any;
    window: any;
    InternalLink: any;
    isLinkInternal: any;
    children: any;
}): JSX.Element;
declare namespace BasisProvider {
    namespace propTypes {
        const theme: PropTypes.Validator<object>;
        const window: PropTypes.Requireable<object>;
        const InternalLink: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        const isLinkInternal: PropTypes.Requireable<(...args: any[]) => any>;
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    }
}
import PropTypes from "prop-types";
