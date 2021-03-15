export const LinkContext: React.Context<any>;
export default LinkProvider;
import React from "react";
declare function LinkProvider({ InternalLink, isLinkInternal, children, }: {
    InternalLink: any;
    isLinkInternal?: typeof defaultIsLinkInternal | undefined;
    children: any;
}): JSX.Element;
declare namespace LinkProvider {
    namespace propTypes {
        const InternalLink: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        const isLinkInternal: PropTypes.Requireable<(...args: any[]) => any>;
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    }
}
declare function defaultIsLinkInternal(href: any): boolean;
import PropTypes from "prop-types";
