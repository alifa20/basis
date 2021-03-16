import React from "react";
import "@testing-library/jest-dom/extend-expect";
import Button from "./Button";
import Link from "./Link";
import Message from "./Message";
import { render, screen, waitFor } from "../utils/test";

describe("Message", () => {
  it("has padding", async () => {
    render(
      <Message severity="success" testId="my-message">
        Your request was submitted successfully.
      </Message>
    );
    const comp = await waitFor(
      () => screen.getByTestId("my-message").firstChild
    );

    expect(comp).toHaveStyle({
      padding: "16px",
    });
  });

  it("renders icon", async () => {
    const { container } = render(
      <Message severity="blocking">Something went wrong.</Message>
    );
    const comp = await waitFor(() => container.querySelector("svg"), {
      timeout: 10000,
    });

    expect(comp).toBeInTheDocument();
  });

  it("renders title", async () => {
    render(
      <Message severity="critical" title="Something went wrong">
        Please try again later.
      </Message>
    );

    const title = await waitFor(() =>
      screen.findByText("Something went wrong")
    );

    expect(title.tagName).toBe("STRONG");
  });

  it("renders children", async () => {
    render(
      <Message severity="stop">
        We are experiencing an outage at the moment. Please try again later.
      </Message>
    );
    const comp = await screen.findByText(
      "We are experiencing an outage at the moment. Please try again later."
    );

    expect(comp).toBeInTheDocument();
  });

  it("call to action - secondary button", async () => {
    render(
      <Message
        severity="assistance"
        bg="highlight.pink.t100"
        callToAction={<Button variant="secondary">Dismiss</Button>}
      >
        If you struggle, we can help!
      </Message>
    );
    const comp = await screen.findByRole("button", { name: "Dismiss" });

    expect(comp).toHaveStyle({
      backgroundColor: "transparent",
      color: "#ffffff",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "#ffffff",
    });
  });

  it("call to action - secondary button link", async () => {
    render(
      <Message
        severity="assistance"
        bg="highlight.pink.t100"
        callToAction={
          <Link appearance="secondary-button" href="#" newTab>
            Explore how
          </Link>
        }
      >
        If you struggle, we can help!
      </Message>
    );
    const comp = await waitFor(
      () => screen.getByRole("link", { name: "Explore how" }).firstChild
    );

    expect(comp).toHaveStyle({
      backgroundColor: "transparent",
      color: "#ffffff",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "#ffffff",
    });
  });

  it("applies background", async () => {
    render(
      <Message
        severity="success"
        bg="secondary.lightBlue.t25"
        testId="my-message"
      >
        Your request was submitted successfully.
      </Message>
    );
    const comp = await screen.findByTestId("my-message");

    expect(comp).toHaveStyle({
      backgroundColor: "#d8edff",
    });
  });

  it("with hasBreakpointWidth", async () => {
    render(
      <Message severity="success" hasBreakpointWidth testId="my-message">
        Your request was submitted successfully.
      </Message>
    );
    const comp = await waitFor(
      () => screen.getByTestId("my-message").firstChild
    );

    expect(comp).toHaveStyle({
      marginLeft: "15px",
      marginRight: "15px",
      padding: "16px 0",
    });
  });

  it("with padding", async () => {
    render(
      <Message severity="success" padding="0" testId="my-message">
        Your request was submitted successfully.
      </Message>
    );
    const comp = await waitFor(
      () => screen.getByTestId("my-message").firstChild
    );

    expect(comp).toHaveStyle({
      padding: 0,
    });
  });

  it("with role", async () => {
    render(
      <Message severity="blocking" bg="secondary.pink.t30" role="alert">
        Please fix the errors above.
      </Message>
    );
    const comp = await screen.findByText("Please fix the errors above.");

    expect(comp).toHaveAttribute("role", "alert");
  });

  it("with testId", async () => {
    const { container } = render(
      <Message severity="info-or-minor" testId="my-message">
        Something went wrong.
      </Message>
    );

    const firstChild = await waitFor(() => container.firstChild);

    expect(firstChild).toHaveAttribute("data-testid", "my-message");
  });
});
