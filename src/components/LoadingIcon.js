import React from "react";
import PropTypes from "prop-types";
import { keyframes } from "@emotion/core";
import useTheme from "../hooks/useTheme";
import tokens from "../themes/tokens";

export const SIZES = ["small", "medium", "large"];
export const COLORS = ["highlight.blue.t100", "white"];

const DEFAULT_CIRCLE_RADIUS = tokens.sizes[1];
const DEFAULT_COLOR = tokens.colors.black;

export const DEFAULT_PROPS = {
  size: "small",
  color: "highlight.blue.t100"
};

function LoadingIcon(_props) {
  const props = { ...DEFAULT_PROPS, ..._props };
  const { size, color } = props;
  const theme = useTheme();
  const radius = parseInt(
    theme[`loadingIcon.${size}`]
      ? theme[`loadingIcon.${size}`].circleRadius
      : DEFAULT_CIRCLE_RADIUS,
    10
  );
  const circleColor = theme[`loadingIcon.${color}`]
    ? theme[`loadingIcon.${color}`].color
    : DEFAULT_COLOR;
  const stepPx = `${3 * radius}px`;
  const frames = 12; // 3 circles * 4 steps each
  const percantagePerFrame = 100 / frames;
  const duration = 3; // sec

  /*
    circle diameter + space between circles + circle diameter
      (2 * radius)  +        radius         +   (2 * radius)
  */
  const svgSize = 5 * radius;

  const start = {
    transform: `translate3d(0, 0, 0)`
  };
  const right = {
    transform: `translate3d(${stepPx}, 0, 0)`
  };
  const bottom = {
    transform: `translate3d(0, ${stepPx}, 0)`
  };
  const left = {
    transform: `translate3d(-${stepPx}, 0, 0)`
  };
  const up = {
    transform: `translate3d(0, -${stepPx}, 0)`
  };
  const rightAndBottom = {
    transform: `translate3d(${stepPx}, ${stepPx}, 0)`
  };
  const upAndRight = {
    transform: `translate3d(${stepPx}, -${stepPx}, 0)`
  };
  const leftAndUp = {
    transform: `translate3d(-${stepPx}, -${stepPx}, 0)`
  };

  const getKeyframes = steps =>
    keyframes(
      steps.reduce((acc, step, index) => {
        acc[`${index * percantagePerFrame}%`] = step;
        return acc;
      }, {})
    );

  const css = [
    getKeyframes([
      start,
      right,
      right,
      right,
      rightAndBottom,
      rightAndBottom,
      rightAndBottom,
      bottom,
      bottom,
      bottom,
      start,
      start
    ]),
    getKeyframes([
      start,
      start,
      up,
      up,
      up,
      upAndRight,
      upAndRight,
      upAndRight,
      right,
      right,
      right,
      start
    ]),
    getKeyframes([
      start,
      start,
      start,
      left,
      left,
      left,
      leftAndUp,
      leftAndUp,
      leftAndUp,
      up,
      up,
      up
    ])
  ].map(animation => ({
    animation: `${animation} ${duration}s ease infinite`
  }));

  return (
    <svg
      width={svgSize}
      height={svgSize}
      viewBox={`0 0 ${svgSize} ${svgSize}`}
      role="img"
      aria-label="Loading icon"
    >
      <circle
        cx={radius}
        cy={radius}
        r={radius}
        fill={circleColor}
        css={css[0]}
      />
      <circle
        cx={radius}
        cy={4 * radius}
        r={radius}
        fill={circleColor}
        css={css[1]}
      />
      <circle
        cx={4 * radius}
        cy={4 * radius}
        r={radius}
        fill={circleColor}
        css={css[2]}
      />
    </svg>
  );
}

LoadingIcon.propTypes = {
  size: PropTypes.oneOf(SIZES),
  color: PropTypes.oneOf(COLORS)
};

export default LoadingIcon;