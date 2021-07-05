/* eslint-disable no-console */
import React from "react";
import PropTypes from "prop-types";
import {
  DateInput,
  Container,
  Stack,
  Button,
  Icon,
  useBasisForm,
  Form,
} from "basis";
import KitchenSinkLayout from "../../../components/kitchen-sink/KitchenSinkLayout";

function ButtonStates({ variant, color }) {
  return (
    <Container
      padding="4"
      bg={
        color === "black"
          ? "secondary.lightBlue.t25"
          : color === "white"
          ? "primary.blue.t100"
          : null
      }
    >
      <Stack direction="horizontal" gap="6">
        <Button variant={variant} color={color}>
          {variant === "icon" ? <Icon name="cross" /> : `${variant} ${color}`}
        </Button>

        <Button variant={variant} color={color} __internal__hover>
          {variant === "icon" ? <Icon name="cross" /> : "Hover"}
        </Button>

        <Button variant={variant} color={color} __internal__active>
          {variant === "icon" ? <Icon name="cross" /> : "Active"}
        </Button>

        <Button variant={variant} color={color} __internal__keyboardFocus>
          {variant === "icon" ? <Icon name="cross" /> : "Keyboard focus"}
        </Button>

        <Button variant={variant} color={color} disabled>
          {variant === "icon" ? <Icon name="cross" /> : "Disabled"}
        </Button>

        <Button variant={variant} color={color} loading>
          {variant === "icon" ? <Icon name="cross" /> : "Loading"}
        </Button>
      </Stack>
    </Container>
  );
}

ButtonStates.propTypes = {
  variant: PropTypes.oneOf(Button.VARIANTS),
  color: PropTypes.oneOf(Button.COLORS),
};

function KitchenSinkButton() {
  const { methods } = useBasisForm();
  return (
    <KitchenSinkLayout name="Button">
      <Form methods={methods} onSubmit={console.log}>
        <DateInput />
      </Form>
    </KitchenSinkLayout>
  );
}

export default KitchenSinkButton;
