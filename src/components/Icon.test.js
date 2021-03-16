import React from "react";
import { render, waitFor } from "../utils/test";
import "@testing-library/jest-dom/extend-expect";
import Icon from "./Icon";

describe("Icon", () => {
  Icon.NAMES.forEach((name) => {
    it(`Icon - ${name}`, async () => {
      const { container } = render(<Icon name={name} testId={`my-${name}`} />);

      const svg = await waitFor(() => container.firstChild);

      expect(svg).toHaveAttribute("role", "img");
      expect(svg).toHaveAttribute("data-testid", `my-${name}`);
    });
  });
});
