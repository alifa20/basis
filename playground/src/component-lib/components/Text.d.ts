import PropTypes from "prop-types";
declare function Text(props: any): JSX.Element;
declare namespace Text {
    var AS: string[];
    var TEXT_STYLES: string[];
    var COLORS: string[];
    var ALIGNS: string[];
    var allowedColors: {
        textStyles: string[];
        allowedColors: string[];
    }[];
    var DEFAULT_PROPS: {
        as: string;
        textStyle: string;
        color: string;
        align: string;
        wrap: boolean;
    };
    var propTypes: {
        color: (props: any) => void;
        align: PropTypes.Requireable<string>;
        wrap: PropTypes.Requireable<boolean>;
        role: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        testId: PropTypes.Requireable<string>;
        id: PropTypes.Requireable<string>;
        as: PropTypes.Requireable<string>;
    };
}
export default Text;
