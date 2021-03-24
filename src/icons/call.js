/** @jsxImportSource @emotion/core */
import React from "react";
import PropTypes from "prop-types";

function Call({ size, primaryColor, testId }) {
  return (
    <svg
      css={{
        display: "block",
      }}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      focusable="false"
      role="img"
      data-testid={testId}
    >
      <path
        d="M11.667 9.051c-.34.073-.643.142-.941.228-.784.85-1.668 2.241-1.72 2.967-.027.375.039.782.214 1.32.448 1.373 1.055 2.955 2.169 4.271.972 1.15 1.92 2.087 2.9 2.865.844.671 1.654 1.15 2.478 1.463.506.194 1.012.385 1.523.563.474.164.896.245 1.584.262.466-.03 1.847-.82 2.822-1.715a3.22 3.22 0 00.275-.93l-2.567-1.5c-.113.116-.202.221-.292.325l-.435.496c-.16.182-.32.363-.486.54-.508.538-1.227.656-1.874.31a32.287 32.287 0 01-1.064-.596c-1.441-.85-2.553-1.843-3.4-3.029-.382-.539-.716-1.1-1.04-1.644l-.296-.495c-.404-.667-.282-1.449.31-1.992.143-.13.289-.256.434-.382.12-.103.24-.206.357-.312.2-.182.369-.334.522-.48l-.267-.45c-.244-.41-.488-.822-.73-1.235-.162-.28-.32-.565-.476-.85zm8.184 15.94c-1 0-1.657-.179-2.217-.375a52.371 52.371 0 01-1.58-.582c-1.018-.388-2.003-.965-3.01-1.766-1.083-.862-2.124-1.889-3.182-3.14-1.337-1.58-2.036-3.386-2.543-4.944-.161-.492-.368-1.245-.308-2.08.109-1.522 1.53-3.406 2.267-4.189.25-.266.569-.465.897-.559.432-.124.875-.219 1.318-.312.777-.166 1.432.147 1.789.794l.098.178c.162.294.324.588.493.88.237.407.479.813.72 1.22l.406.683c.397.667.319 1.417-.203 1.96a15.35 15.35 0 01-.763.723c-.202.183-.333.296-.465.41l-.155.135.119.197c.316.532.615 1.035.952 1.507.68.954 1.59 1.761 2.787 2.467.228.135.458.264.689.391.072-.08.143-.162.214-.243l.422-.48c.173-.2.346-.4.537-.583.656-.629 1.366-.704 2.17-.229l2.939 1.714c.523.31.797.834.754 1.44a5.591 5.591 0 01-.44 1.835c-.113.26-.288.503-.506.704-.66.606-2.681 2.188-4.11 2.242-.03.004-.06.001-.09.001z"
        fill={primaryColor}
        fillRule="evenodd"
      />
    </svg>
  );
}

Call.propTypes = {
  size: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
  testId: PropTypes.string,
};

export default Call;
