import { InternalAddressProps } from "../../../components/Address/types";

export const NUMERIC_REGEX = /^\d*$/;
export const DECIMAL_REGEX = /^\d*(\.\d{2})?$/;

export const isInputEmpty = (value: string) => value.trim() === "";

export const validateAddress = (
  value: string,
  addressProps: InternalAddressProps
) => {
  const { optional } = addressProps;

  if (isInputEmpty(value)) {
    return optional ? null : "Required";
  }

  return null;
};
