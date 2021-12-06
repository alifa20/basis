import { extendTheme, withDefaultVariant } from "@chakra-ui/react";
import { colors } from "./colors";
import { components } from "./components";
import { fonts } from "./fonts";

const theme = extendTheme(
  {
    colors,
    fonts,
    components,
  },
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select"],
  })
);

export default theme;
