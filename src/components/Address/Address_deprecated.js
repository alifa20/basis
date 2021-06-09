import React from "react";
import { defaultInputProps } from "../Input/defaultInputProps";
import InternalInput from "../internal/InternalInput";

const { COLORS } = InternalInput;

const DEFAULT_PROPS = {
  ...defaultInputProps,
  color: InternalInput.DEFAULT_PROPS.color,
  validate: (value, { isEmpty }) => {
    if (isEmpty(value)) {
      return "Must be checked";
    }

    return null;
  },
};

const Address = (props) => {
  return <div>hey{JSON.stringify(props)}</div>;
};

Address.COLORS = COLORS;
Address.DEFAULT_PROPS = DEFAULT_PROPS;

export default Address;
