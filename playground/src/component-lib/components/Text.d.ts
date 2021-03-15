export default Text;
declare function Text(props: any): JSX.Element;
declare namespace Text {
    export { AS };
    export { TEXT_STYLES };
    export { COLORS };
    export { ALIGNS };
    export { allowedColors };
    export { DEFAULT_PROPS };
    export namespace propTypes {
        function color(props: any): void;
        const align: PropTypes.Requireable<string>;
        const wrap: PropTypes.Requireable<boolean>;
        const role: PropTypes.Requireable<string>;
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const testId: PropTypes.Requireable<string>;
        const id: PropTypes.Requireable<string>;
        const as: PropTypes.Requireable<string>;
    }
}
declare const AS: string[];
import { TEXT_STYLES } from "../utils/constants";
declare const COLORS: string[];
declare const ALIGNS: string[];
declare const allowedColors: {
    textStyles: string[];
    allowedColors: string[];
}[];
declare namespace DEFAULT_PROPS {
    const as_1: string;
    export { as_1 as as };
    export const textStyle: string;
    const color_1: string;
    export { color_1 as color };
    const align_1: string;
    export { align_1 as align };
    const wrap_1: boolean;
    export { wrap_1 as wrap };
}
import PropTypes from "prop-types";
