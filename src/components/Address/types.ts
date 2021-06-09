import React from "react";
import { OptionsValues } from "../../types";

export const streetTypeOptions = [
  { label: "Alley (Ally)", value: "Ally" },
  { label: "Arcade (Arc)", value: "Arc" },
  { label: "Avenue (Ave)", value: "Ave" },
  { label: "Boulevard (Bvd)", value: "Bvd" },
  { label: "Bypass (Bypa)", value: "Bypa" },
  { label: "Circuit (Cct)", value: "Cct" },
  { label: "Close (Cl)", value: "Cl" },
  { label: "Corner (Crn)", value: "Crn" },
  { label: "Court (Ct)", value: "Ct" },
  { label: "Crescent (Cres)", value: "Cres" },
  { label: "Cul-de-sac (Cds)", value: "Cds" },
  { label: "Drive (Dr)", value: "Dr" },
  { label: "Esplanade (Esp)", value: "Esp" },
  { label: "Green (Grn)", value: "Grn" },
  { label: "Grove (Gr)", value: "Gr" },
  { label: "Highway (Hwy)", value: "Hwy" },
  { label: "Junction (Jnc)", value: "Jnc" },
  { label: "Lane (Lane)", value: "Lane" },
  { label: "Link (Link)", value: "Link" },
  { label: "Mews (Mews)", value: "Mews" },
  { label: "Parade (Pde)", value: "Pde" },
  { label: "Place (Pl)", value: "Pl" },
  { label: "Ridge (Rdge)", value: "Rdge" },
  { label: "Road (Rd)", value: "Rd" },
  { label: "Square (Sq)", value: "Sq" },
  { label: "Street (St)", value: "St" },
  { label: "Terrace (Tce)", value: "Tce" },
] as const;

// export type AddressProps = {
//   ref?: Ref<HTMLInputElement>;
//   label: string;
//   value?: AddressState;
//   fromDate?: Date;
//   toDate?: Date;
//   error?: string;
//   onChange?: (value: string) => void;
//   onBlur?: () => void;
//   onFocus?: () => void;
// };

export type AddressState =
  // | {
  //     autoComplete: string;
  //   }
  // |
  {
    autoComplete: string;
    unit: string;
    streetNumber: string;
    streetName: string;
    streetType: OptionsValues<typeof streetTypeOptions>;
    suburb: string;
    state: string;
    postCode: string;
  };

type AddressColor = "grey.t05" | "white";

export interface DeprecatedAddressProps {
  name: string;
  label: string;
  hideLabel?: boolean;
  color?: AddressColor;
  helpText?: string;
  disabled?: boolean;
  optional?: boolean;
  validate?: boolean | ((value: any, data: any) => string | string[] | null);
  validateData?: any;
  onChange?: (args: any) => void;
  children: React.ReactNode;
  testId?: string;
  __internal__keyboardFocus?: boolean;
}

export interface InternalAddressProps {
  label: string;
  hideLabel?: boolean;
  color?: AddressColor;
  helpText?: string;
  disabled?: boolean;
  optional?: boolean;
  value?: boolean;
  error?: string | string[];
  innerRef?: React.Ref<HTMLInputElement>;
  onChange?: (isChecked: boolean) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onMouseDown?: React.MouseEventHandler<HTMLLabelElement>;
  children: React.ReactNode;
  testId?: string;
  __internal__keyboardFocus?: boolean;
}

export type AddressProps = InternalAddressProps | DeprecatedAddressProps;

export const setDeprecatedProps = (
  props: AddressProps,
  isDeprecated: boolean
): props is DeprecatedAddressProps => {
  return isDeprecated;
};
