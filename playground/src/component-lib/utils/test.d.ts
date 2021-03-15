export function TestWrapper({ children }: {
    children: any;
}): JSX.Element;
export namespace TestWrapper {
    namespace propTypes {
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    }
}
export const theme: any;
import PropTypes from "prop-types";
declare function customRender(ui: any, options: any): any;
export { customRender as render, userEvent };
