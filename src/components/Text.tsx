import React from "react";
import PropTypes from "prop-types";
import {
  responsivePropType,
  responsiveMarginType,
} from "../hooks/useResponsiveProp";
import useResponsivePropsCSS from "../hooks/useResponsivePropsCSS";
import useTextStyle from "../hooks/useTextStyle";
import useBackground from "../hooks/useBackground";
import { responsiveMargin, responsiveTextStyle } from "../utils/css";
import { mergeProps } from "../utils/component";
import { hasOwnProperty } from "../utils/core";
import { TEXT_STYLES, TEXT_ALIGNS } from "../utils/constants";
import { formatArray } from "../utils/array";

const AS = ["h1", "h2", "h3", "h4", "h5", "h6", "p"];
const COLORS = [
  "black",
  "white",
  "grey.t75",
  "primary.blue.t100",
  "highlight.blue.t100",
  "conditional.positive.text",
  "conditional.negative.text",
];
const ALIGNS = TEXT_ALIGNS;

const allowedColors = [
  {
    textStyles: [
      "hero",
      "heading1",
      "heading2",
      "heading3",
      "heading4",
      "heading5",
      "heading6",
    ],
    allowedColors: ["black", "white", "primary.blue.t100"],
  },
  {
    textStyles: ["subtitle1", "subtitle2", "body1", "body2", "legal"],
    allowedColors: [
      "black",
      "white",
      "grey.t75",
      "primary.blue.t100",
      "highlight.blue.t100",
      "conditional.positive.text",
      "conditional.negative.text",
    ],
  },
  {
    textStyles: ["overline"],
    allowedColors: [
      "black",
      "white",
      "grey.t75",
      "primary.blue.t100",
      "highlight.blue.t100",
    ],
  },
];

function getInheritedColor(backgroundColor: any) {
  return backgroundColor === "primary.blue.t100" ? "white" : "black";
}

const DEFAULT_PROPS = {
  as: "p",
  textStyle: "body1",
  color: "black",
  align: "inherit",
  wrap: true,
};

Text.AS = AS;
Text.TEXT_STYLES = TEXT_STYLES;
Text.COLORS = COLORS;
Text.ALIGNS = ALIGNS;
Text.allowedColors = allowedColors;
Text.DEFAULT_PROPS = DEFAULT_PROPS;

function Text(props: any) {
  const { textStyle: inheritedTextStyle } = useTextStyle();
  const { bgMap } = useBackground();
  const inheritedProps = {
    textStyle: inheritedTextStyle,
  };
  const mergedProps = mergeProps(props, DEFAULT_PROPS, inheritedProps, {
    id: (id: any) => typeof id === "string",
    as: (as: any) => AS.includes(as),
    textStyle: (textStyle: any) => TEXT_STYLES.includes(textStyle),
    color: (color: any) => COLORS.includes(color),
    align: (align: any) => ALIGNS.includes(align),
    wrap: (wrap: any) => typeof wrap === "boolean",
  });
  const { id, as, align, wrap, role, children, testId } = mergedProps;
  const css = useResponsivePropsCSS(mergedProps, DEFAULT_PROPS, {
    color: (_: any, theme: any, bp: any) => {
      const color =
        hasOwnProperty(props, "color") && hasOwnProperty(mergedProps, "color")
          ? mergedProps.color
          : getInheritedColor(bgMap?.[bp]);

      return theme.text.getCSS({
        color,
        wrap,
        align,
      });
    },
    margin: responsiveMargin,
    textStyle: responsiveTextStyle,
  });
  const Component = as;

  return (
    <Component id={id} css={css} role={role} data-testid={testId}>
      {children}
    </Component>
  );
}

Text.propTypes = {
  id: PropTypes.string,
  as: PropTypes.oneOf(AS),
  ...responsiveMarginType,
  ...responsivePropType("textStyle", PropTypes.oneOf(TEXT_STYLES)),
  color: (props: any) => {
    allowedColors.forEach(({ textStyles, allowedColors }) => {
      if (
        textStyles.includes(props.textStyle) &&
        !allowedColors.includes(props.color)
      ) {
        return new Error(
          `Text: color="${props.color}" is not allowed for textStyle="${
            props.textStyle
          }". Must be one of: ${formatArray(allowedColors)}`
        );
      }
    });
  },
  align: PropTypes.oneOf(ALIGNS),
  wrap: PropTypes.bool,
  role: PropTypes.string,
  children: PropTypes.node,
  testId: PropTypes.string,
};

export default Text;