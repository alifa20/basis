export function mapResponsiveValues(map: any, mapFn: any, theme: any): {
    default: any;
};
export function BackgroundProvider({ value, children }: {
    value: any;
    children: any;
}): JSX.Element;
export namespace BackgroundProvider {
    namespace propTypes {
        const value: PropTypes.Requireable<string | object>;
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    }
}
export default useBackground;
import PropTypes from "prop-types";
declare function useBackground(): {
    bgMap: any;
    inputColorMap: {
        default: any;
    };
};
