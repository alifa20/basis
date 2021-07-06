import React from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import useResponsivePropsCSS from "../../hooks/useResponsivePropsCSS";
import { responsiveSize } from "../../utils/css";
import { FormProps } from "./types";

export function Form<TFieldValues extends FieldValues = FieldValues>({
  children,
  onSubmit,
  testId,
  ...rest
}: FormProps<TFieldValues>) {
  // @ts-ignore
  const responsiveFormCSS = useResponsivePropsCSS(
    rest,
    {},
    {
      width: responsiveSize("width"),
    }
  );

  const methods = useForm<TFieldValues>();

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form
        css={responsiveFormCSS}
        action="#"
        data-testid={testId}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        {children}
      </form>
    </FormProvider>
  );
}
