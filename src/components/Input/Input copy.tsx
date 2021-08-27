/* eslint-disable react/display-name */
// import { nanoid } from "nanoid";
import React, { forwardRef } from "react";
import InternalInput from "../internal/InternalInput";
import Field from "../internal/Field";
import { InternalInputProps } from "./types";

// import { InternalInputProps } from "./types";

// const Input = (props: InternalInputProps) => {
//   // const mergedProps = useMergedProps(props, defaultInputProps);
//   const mergedProps = props;
//   const {
//     type,
//     variant = "numeric",
//     prefix,
//     suffix,
//     maxLength,
//     autoComplete,
//     label,
//     placeholder,
//     helpText,
//     innerRef,
//     disabled,
//     pasteAllowed,
//     onChange,
//     onBlur,
//     onFocus,
//     testId,
//     value,
//     error,
//     id,
//     onKeyDown,
//     __internal__focus,
//   } = mergedProps;

//   const [inputId] = useState(() => id ?? `input-${nanoid()}`);
//   const [auxId] = useState(() => `input-aux-${nanoid()}`);

//   // const fieldErrors =
//   //   Array.isArray(error) || error === undefined ? error : [error];
//   const hasErrors = Array.isArray(error) ? error.length !== 0 : !!error;

//   // @ts-ignore
//   const handleBlur = (e) => {
//     // @ts-ignore
//     // eslint-disable-next-line no-console
//     console.log("handleBlur2");
//     onBlur?.(e);
//   };

//   return (
//     // <Field
//     //   optional={optional}
//     //   disabled={disabled}
//     //   label={label}
//     //   labelFor={inputId}
//     //   auxId={auxId}
//     //   helpText={helpText}
//     //   errors={fieldErrors}
//     // >
//     <InternalInput
//       id={label ? inputId : undefined}
//       testId={testId}
//       innerRef={innerRef}
//       type={type}
//       variant={variant}
//       prefix={prefix}
//       suffix={suffix}
//       maxLength={maxLength}
//       autoComplete={autoComplete}
//       placeholder={placeholder}
//       color={props.color}
//       disabled={disabled}
//       pasteAllowed={pasteAllowed}
//       isValid={!hasErrors}
//       describedBy={helpText || hasErrors ? auxId : undefined}
//       onFocus={onFocus}
//       onBlur={handleBlur}
//       value={value}
//       onChange={onChange}
//       onKeyDown={onKeyDown}
//       __internal__focus={__internal__focus}
//     />
//     // </Field>
//   );
// };

// export default Input;

// @ts-ignore
export const Input = forwardRef((props: InternalInputProps, _) => {
  //   const { errors: fieldErrors = {} } = props;
  //   const error = fieldErrors[props.name]?.message;
  // const error = props.error;

  const {
    optional = false,
    disabled = false,
    label,
    helpText,
    error = "",
  } = props;

  const inputId = "";
  const auxId = "";
  const fieldErrors = error;

  // @ts-ignore
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
      <InternalInput variant="text" {...props} />
    </Field>
  );
});

export default Input;
