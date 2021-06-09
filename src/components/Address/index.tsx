import React, { forwardRef } from "react";
import useIsDeprecatedForm from "../../hooks/internal/useIsDeprecatedForm";
import { ComponentWithStaticProperties } from "../../types";
import { ComponentNames } from "../componentNames";
import { defaultAddressProps } from "./defaultAddressProps";
import { default as AddressInternal } from "./Address";
import { default as AddressDeprecated } from "./Address_deprecated";
import {
  AddressProps,
  setDeprecatedProps as shouldUseDeprecatedAddress,
} from "./types";

const { COLORS, DEFAULT_PROPS } = AddressDeprecated;

interface StaticProperties {
  COLORS: typeof AddressDeprecated.COLORS;
  DEFAULT_PROPS: typeof AddressDeprecated.DEFAULT_PROPS;
}

const AddressComponent = (
  props: AddressProps,
  ref: React.Ref<HTMLInputElement>
) => {
  const isDeprecatedForm = useIsDeprecatedForm();

  if (shouldUseDeprecatedAddress(props, isDeprecatedForm)) {
    return <AddressDeprecated {...props} />;
  }

  return <AddressInternal {...props} innerRef={ref} />;
};

const Address = forwardRef(AddressComponent) as ComponentWithStaticProperties<
  AddressProps,
  StaticProperties
>;

Address.displayName = ComponentNames.Address;

Address.defaultProps = defaultAddressProps;

Address.COLORS = COLORS;
Address.DEFAULT_PROPS = DEFAULT_PROPS;

export default Address;
