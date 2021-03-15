export const WindowContext: React.Context<any>;
export default WindowProvider;
import React from "react";
declare function WindowProvider({ window, children }: {
    window: any;
    children: any;
}): JSX.Element;
declare namespace WindowProvider {
    namespace propTypes {
        const window: PropTypes.Requireable<object>;
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    }
}
import PropTypes from "prop-types";
