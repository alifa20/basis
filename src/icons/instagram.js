import React from "react";
import PropTypes from "prop-types";
import useTheme from "../hooks/useTheme";

function Instagram({ size, primaryColor, hoverColor, testId }) {
  const theme = useTheme();

  return (
    <svg
      css={{
        display: "block",
        fill: primaryColor,
        transition: hoverColor ? theme.transitions.icon : null,
        ":hover": {
          ...(hoverColor && { fill: hoverColor }),
        },
      }}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      focusable="false"
      role="img"
      data-testid={testId}
    >
      <path
        d="M17.16 4c2.224.004 2.678.021 3.788.071 1.276.059 2.15.262 2.913.558a5.883 5.883 0 012.124 1.385 5.886 5.886 0 011.385 2.125c.297.763.5 1.636.558 2.913.054 1.195.07 1.63.072 4.333v1.23c-.002 2.702-.018 3.138-.072 4.332-.058 1.278-.261 2.151-.558 2.913a5.89 5.89 0 01-1.385 2.126 5.893 5.893 0 01-2.124 1.384c-.764.297-1.637.5-2.913.558-1.195.054-1.63.07-4.334.072h-1.228c-2.704-.002-3.14-.018-4.334-.072-1.277-.058-2.15-.261-2.913-.558a5.888 5.888 0 01-2.125-1.384A5.873 5.873 0 014.63 23.86c-.297-.762-.5-1.635-.558-2.913-.051-1.109-.068-1.563-.072-3.787v-2.321c.004-2.223.021-2.678.072-3.787.058-1.277.261-2.15.558-2.913a5.87 5.87 0 011.384-2.125 5.878 5.878 0 012.125-1.385c.764-.296 1.636-.499 2.913-.558 1.11-.05 1.564-.067 3.788-.071h2.32zm-.28 2.162h-1.76c-2.41.003-2.83.018-3.97.069-1.17.054-1.804.249-2.227.414-.56.217-.96.478-1.38.897-.42.42-.68.82-.898 1.38-.164.423-.36 1.058-.413 2.228-.052 1.14-.067 1.561-.07 3.97v1.76c.003 2.409.018 2.83.07 3.969.053 1.171.249 1.805.413 2.228.218.561.478.96.897 1.38.42.42.82.68 1.38.897.424.166 1.058.361 2.228.415 1.098.049 1.529.065 3.71.068h2.28c2.181-.003 2.612-.019 3.71-.068 1.168-.054 1.804-.249 2.227-.415.56-.217.96-.477 1.38-.897.42-.42.68-.819.897-1.38.164-.423.36-1.057.413-2.228.05-1.097.067-1.528.07-3.709v-2.28c-.003-2.181-.02-2.613-.07-3.71-.053-1.17-.249-1.805-.413-2.228a3.71 3.71 0 00-.897-1.38 3.72 3.72 0 00-1.38-.897c-.423-.165-1.059-.36-2.227-.414-1.14-.051-1.56-.066-3.97-.069zM16 9.837a6.162 6.162 0 110 12.325 6.162 6.162 0 010-12.325zM16 12a4 4 0 100 8 4 4 0 000-8zm6.405-3.846a1.44 1.44 0 110 2.881 1.44 1.44 0 010-2.881z"
        fillRule="evenodd"
      />
    </svg>
  );
}

Instagram.propTypes = {
  size: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
  hoverColor: PropTypes.string,
  testId: PropTypes.string,
};

export default Instagram;
