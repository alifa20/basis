import React from "react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";
import { render, screen, waitFor } from "../utils/test";

describe("Header", () => {
  it("exposes an ID", () => {
    expect(Header.ID).toBe("Header");
  });

  it("exposes a HEIGHT_MAP", () => {
    expect(Header.HEIGHT_MAP).toStrictEqual({
      default: 56,
      lg: 80,
    });
  });

  it("with testId", async () => {
    const { container } = render(
      <Header testId="my-header">
        <Header.Logo name="gem" testId="my-header-logo" />
      </Header>
    );
    const firstChild = await waitFor(() => container.firstChild);

    const comp = await waitFor(() => screen.findByTestId("my-header-logo"));

    expect(firstChild).toHaveAttribute("data-testid", "my-header");
    expect(comp).toBeInTheDocument();
  });
});
