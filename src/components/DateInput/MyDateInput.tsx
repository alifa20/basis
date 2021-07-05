import React from "react";
import { useBasisFormContext } from "../../hooks/useBasisForm";
import InternalDateInput from "./InternalDateInput";
import { FieldValues, FieldPath } from "react-hook-form";
import { DeprecatedDateInputProps } from "./types";

type Props<
  TFieldValues extends FieldValues = FieldValues
> = DeprecatedDateInputProps & {
  name: FieldPath<TFieldValues>;
};

function MyDateInput<TFieldValues extends FieldValues = FieldValues>({
  name,
}: Props<TFieldValues>) {
  const { methods } = useBasisFormContext<TFieldValues>();
  const { register } = methods;

  return <InternalDateInput dayMode="2-digits" {...register(name)} />;
}

export default MyDateInput;
