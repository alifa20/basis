import * as React from "react";
import PropTypes from "prop-types";
import {
  responsiveHeightType,
  responsiveMaxWidthType,
} from "../hooks/useResponsiveProp";
import useAllResponsiveProps from "../hooks/useAllResponsiveProps";

const NAMES = ["latitude", "gem"];
const COLORS = ["primary.blue.t100", "black", "white"];

const DEFAULT_PROPS = {};

Logo.NAMES = NAMES;
Logo.COLORS = COLORS;
Logo.DEFAULT_PROPS = DEFAULT_PROPS;

function Logo(_props) {
  const props = { ...DEFAULT_PROPS, ..._props };
  const { name, color, testId } = props;
  const heightProps = useAllResponsiveProps(props, "height");
  const maxWidthProps = useAllResponsiveProps(props, "maxWidth");

  const ImportedIconRef = React.useRef(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (!NAMES.includes(name)) {
      return null;
    }
    setLoading(true);
    const importIcon = async () => {
      try {
        ImportedIconRef.current = (
          await import(`./${name}.svg`)
        ).ReactComponent;
      } catch (err) {
        // console.log("logogogoggogogogog errrrrrrrr");
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: LogoComponent } = ImportedIconRef;
    const logoProps = {
      color,
      ...heightProps,
      ...maxWidthProps,
      testId,
    };
    return <LogoComponent {...logoProps} />;
  }

  return null;
}

Logo.propTypes = {
  name: PropTypes.oneOf(NAMES).isRequired,
  color: PropTypes.oneOf(COLORS),
  ...responsiveHeightType,
  ...responsiveMaxWidthType,
  testId: PropTypes.string,
};

export default Logo;
