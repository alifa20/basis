import React from "react";
import { useMergedProps } from "../../hooks/useMergedProps";
import { CustomField } from "../Field/CustomField";
import Input from "../Input";
import { defaultAddressProps } from "./defaultAddressProps";
import { InternalAddressProps } from "./types";

const Address = (props: InternalAddressProps) => {
  const mergedProps = useMergedProps(props, defaultAddressProps);

  // eslint-disable-next-line no-console
  console.log(mergedProps);

  // const {
  //   label,
  //   value,
  //   hideLabel,
  //   helpText,
  //   disabled,
  //   optional,
  //   onChange,
  //   onFocus,
  //   onBlur,
  //   onMouseDown,
  //   children,
  //   testId,
  //   error,
  //   __internal__keyboardFocus,
  // } = mergedProps;

  return (
    <CustomField
      name="testCustomInput"
      defaultValue=""
      validate={(val) => (val === "" ? "Required" : null)}
    >
      {(props) => <Input label="Custom Input7" {...props} testId="field" />}
    </CustomField>
  );
};

export default Address;
