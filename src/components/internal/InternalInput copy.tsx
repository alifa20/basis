import React from "react";

export const DEFAULT_PROPS = {
  type: "text",
  variant: "text",
  color: "grey.t05",
  disabled: false,
  autoComplete: "off",
  isLoading: false,
  hasSuffixButton: false,
  pasteAllowed: true,
  isValid: true,
  __internal__focus: false,
} as const;

export type InternalInputTypes = "text" | "password" | "email" | "tel";

export type InternalInputVariants = "text" | "numeric" | "decimal";

export type InternalInputColors = "grey.t05" | "white";

interface InternalInputProps {
  name?: string;
  parentName?: string;
  innerRef?: React.Ref<HTMLInputElement>;
  id?: string;
  testId?: string;
  type?: InternalInputTypes;
  placeholder?: string;
  variant: InternalInputVariants;
  prefix?: string;
  suffix?: string;
  isLoading?: boolean;
  hasSuffixButton?: boolean;
  // maxLength?: string | number;
  autoComplete?: string;
  color?: InternalInputColors;
  disabled?: boolean;
  pasteAllowed?: boolean;
  isValid?: boolean;
  describedBy?: string;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  value?: string;
  "aria-label"?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  __internal__focus?: boolean;
}

const InternalInput = (props: InternalInputProps) => (
  <input {...props} ref={props.innerRef} />
);

export default InternalInput;
