import React from "react";
import PropTypes from "prop-types";

function Lock({ primaryColor }) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      role="img"
      aria-label="Lock"
    >
      <path
        d="M16 3a7 7 0 017 7v3h1a2 2 0 012 2v12a2 2 0 01-2 2H8a2 2 0 01-2-2V15a2 2 0 012-2h1v-3a7 7 0 017-7zm8 12H8v12h16V15zm-8 3a2 2 0 011.001 3.732L17 24h-2v-2.268A2 2 0 0116 18zm0-13a5 5 0 00-5 5v3h10v-3a5 5 0 00-5-5z"
        fill={primaryColor}
      />
    </svg>
  );
}

Lock.propTypes = {
  primaryColor: PropTypes.string.isRequired
};

export default Lock;