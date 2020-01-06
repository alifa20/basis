import React from "react";
import { render } from "../utils/test";
import "@testing-library/jest-dom/extend-expect";
import Button from "./Button";
import Container from "./Container";

describe("Button", () => {
  it("default", () => {
    const { getByText } = render(<Button>Find out more</Button>);
    const button = getByText("Find out more");

    expect(button.tagName).toBe("BUTTON");
    expect(button.getAttribute("type")).toBe("button");
    expect(button).toHaveStyle(`
      font-size: 18px;
      line-height: 28px;
      font-family: 'Roboto',sans-serif;
      font-weight: 500;
      border: 0;
      border-radius: 4px;
      padding: 0 24px;
      min-height: 48px;
      transition: background-color 150ms ease,color 150ms ease;
      width: 100%;
      background-color: #006aff;
      color: #ffffff;
    `);
  });

  it("secondary", () => {
    const { getByText } = render(
      <Button variant="secondary">Find out more</Button>
    );
    const button = getByText("Find out more");

    expect(button).toHaveStyle(`
      background-color: transparent;
      color: #006aff;
      border-width: 1px;
      border-style: solid;
      border-color: #006aff;
    `);
  });

  it("primary white", () => {
    const { getByText } = render(<Button color="white">Find out more</Button>);
    const button = getByText("Find out more");

    expect(button).toHaveStyle(`
      background-color: #ffffff;
      color: #006aff;
    `);
  });

  it("secondary white", () => {
    const { getByText } = render(
      <Button variant="secondary" color="white">
        Find out more
      </Button>
    );
    const button = getByText("Find out more");

    expect(button).toHaveStyle(`
      background-color: transparent;
      color: #ffffff;
      border-width: 1px;
      border-style: solid;
      border-color: #ffffff;
    `);
  });

  it("not full width", () => {
    const { getByText } = render(
      <Button isFullWidth={false}>Find out more</Button>
    );
    const button = getByText("Find out more");

    expect(button).not.toHaveStyle(`
      width: 100%;
    `);
  });

  it("disabled", () => {
    const { getByText } = render(
      <Button isDisabled={true}>Find out more</Button>
    );
    const button = getByText("Find out more");

    expect(button).toHaveStyle(`
      background-color: #b2b2b2;
      color: #414141;
      opacity: 0.7;
      cursor: not-allowed;
    `);
  });

  it('type="submit"', () => {
    const { getByText } = render(<Button type="submit">Find out more</Button>);
    const button = getByText("Find out more");

    expect(button.getAttribute("type")).toBe("submit");
  });

  it("inside dark container", () => {
    const { getByText } = render(
      <Container bg="primary.blue.t100">
        <Button>Find out more</Button>
      </Container>
    );
    const button = getByText("Find out more");

    expect(button).toHaveStyle(`
      background-color: #ffffff;
      color: #006aff;
    `);
  });
});