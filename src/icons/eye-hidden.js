/** @jsxImportSource @emotion/core */
import React from "react";
import PropTypes from "prop-types";

function EyeHidden({ size, primaryColor, testId }) {
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
        d="M27.294 4.707a1 1 0 01.084 1.318l-.084.095L6.12 27.294a1 1 0 01-1.497-1.318l.083-.095L9.087 21.5c-.496-.36-.987-.746-1.47-1.183a20.654 20.654 0 01-2.805-3.135 2 2 0 01-.096-2.219l.096-.143.328-.437a20.378 20.378 0 012.477-2.699C10.281 9.274 13.18 8 16 8c.196 0 .394.028.591.041l.027.002c1.397.092 2.805.476 4.19 1.163l.378.195 4.695-4.695a1 1 0 011.413 0zm-2.821 7.062a20.839 20.839 0 012.713 3.05 2 2 0 010 2.364l-.327.436a20.35 20.35 0 01-2.476 2.697C21.719 22.727 18.82 24 16 24c-1.062 0-2.133-.204-3.199-.559l1.621-1.621c.529.112 1.057.18 1.578.18 2.316 0 4.751-1.095 7.041-3.166a19.407 19.407 0 002.557-2.833 19.296 19.296 0 00-2.539-2.817zm-14.146.3c-.46.331-.917.69-1.368 1.098A19.355 19.355 0 006.402 16a19.218 19.218 0 002.557 2.834c.385.347.773.663 1.165.953l.393.282 1.542-1.542a5.978 5.978 0 01-1.732-6.458zm5.916 7.93l5.744-5.745a5.99 5.99 0 01-5.517 5.732l-.227.013 5.744-5.745zm-3.007-9.288a1.5 1.5 0 10-.001 2.999 1.5 1.5 0 00.001-2.999z"
        fill={primaryColor}
      />
    </svg>
  );
}

EyeHidden.propTypes = {
  size: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
  testId: PropTypes.string,
};

export default EyeHidden;
