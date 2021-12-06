import { ComponentSingleStyleConfig } from "@chakra-ui/theme";
import type { SystemStyleFunction } from "@chakra-ui/theme-tools";
import { mode, SystemStyleObject } from "@chakra-ui/theme-tools";

const baseStyleButton: SystemStyleObject = {
  lineHeight: "1.2",
  borderRadius: "none",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focus: {
    boxShadow: "outline",
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none",
  },
  _hover: {
    _disabled: {
      bg: "initial",
    },
  },
};

const itemStyle = (props:any) => ({
  py: "0.4rem",
  px: "0.8rem",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    bg: mode("gray.100", "whiteAlpha.100")(props),
  },
  _active: {
    bg: mode("gray.200", "whiteAlpha.200")(props),
  },
  _expanded: {
    bg: mode("gray.100", "whiteAlpha.100")(props),
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
  },
});

const listStyle: SystemStyleFunction = (props) => ({
  bg: mode("#fff", "gray.700")(props),
  borderRadius: "none",
  boxShadow: mode("sm", "dark-lg")(props),
  color: "inherit",
  minW: "3xs",
  w: "100%",
  py: "2",
  zIndex: 1,
  borderWidth: "1px",
});

const baseStyle = (props:any) => ({
  button: baseStyleButton,
  list: listStyle(props),
  item: itemStyle(props),
  // groupTitle: baseStyleGroupTitle,
  // command: baseStyleCommand,
  // divider: baseStyleDivider,
});

export const menuStyles: ComponentSingleStyleConfig = {
  // The base styles for each part
  baseStyle,
  // The size styles for each part
  sizes: {},
  // The variant styles for each part
  variants: {},
  // The default `size` or `variant` values
  defaultProps: {},
};
