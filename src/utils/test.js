import React from "react";
import PropTypes from "prop-types";
import { render } from "@testing-library/react";
import matchMediaPolyfill from "mq-polyfill";
import { ThemeProvider, defaultTheme } from "..";

matchMediaPolyfill(global);

export function TestWrapper({ children }) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
}

TestWrapper.propTypes = {
  children: PropTypes.node
};

const customRender = (ui, options) =>
  render(ui, {
    wrapper: TestWrapper,
    ...options
  });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };