import React, { useState } from "react";
import { nanoid } from "nanoid";
import Field from "../internal/Field";
import InternalInput from "../internal/InternalInput";
import { InternalInputProps } from "./types";
import { useMergedProps } from "../../hooks/useMergedProps";
import { defaultInputProps } from "./defaultInputProps";

const Input = (props: InternalInputProps) => {
  const mergedProps = useMergedProps(props, defaultInputProps);
  const {
    type,
    variant,
    prefix,
    suffix,
    maxLength,
    autoComplete,
    label,
    placeholder,
    helpText,
    innerRef,
    disabled,
    pasteAllowed,
    optional,
    onChange,
    onBlur,
    onFocus,
    testId,
    value,
    error,
    id,
    onKeyDown,
    __internal__focus,
  } = mergedProps;

  // const [inputId] = useState(() => id ?? `input-${nanoid()}`);
  // const [auxId] = useState(() => `input-aux-${nanoid()}`);
  const [inputId] = useState(() => id ?? `input-${nanoid()}`);
  const [auxId] = useState(() => `input-aux-${nanoid()}`);

  const fieldErrors =
    Array.isArray(error) || error === undefined ? error : [error];
  const hasErrors = Array.isArray(error) ? error.length !== 0 : !!error;

  console.log("mergedProps", mergedProps);

  //   {
  //     "type": "text",
  //     "variant": "text",
  //     "disabled": false,
  //     "pasteAllowed": true,
  //     "optional": false,
  //     "label": "name",
  //     "v2": true,
  //     "name": "name"
  // }

  return (
    <Field
      optional={optional}
      disabled={disabled}
      label={label}
      labelFor={inputId}
      auxId={auxId}
      helpText={helpText}
      // @ts-ignore
      errors={fieldErrors}
    >
      <InternalInput
        // id={label ? inputId : undefined}
        // type={type}
        // variant={variant}
        testId={testId}
        // disabled={disabled}
        // pasteAllowed={pasteAllowed}
        onBlur={onBlur}
        // @ts-ignore
        label={label}
        // innerRef={innerRef}
        // prefix={prefix}
        // suffix={suffix}
        // maxLength={maxLength}
        // autoComplete={autoComplete}
        // placeholder={placeholder}
        // color={props.color}
        // isValid={!hasErrors}
        // describedBy={helpText || hasErrors ? auxId : undefined}
        // onFocus={onFocus}
        // onBlur={onBlur}
        // value={value}
        // onChange={onChange}
        // onKeyDown={onKeyDown}
        // __internal__focus={__internal__focus}
        {...mergedProps}
      />
      {/* <InternalInput {...mergedProps} /> */}
    </Field>
  );
};

export default Input;
