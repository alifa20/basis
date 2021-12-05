import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input as ChInput,
  InputProps,
} from '@chakra-ui/react';
import React, { forwardRef } from 'react';
import FieldItem from '../FieldItem';

// export interface Props
//   extends Omit<InputProps, 'errorBorderColor' | 'isInvalid'> {
//   error?: string;
// }

export type Props = Omit<InputProps, 'errorBorderColor' | 'isInvalid'> & {
  label: string;
  helpText?: string;
  error?: string;
};

// export interface Props
//   extends Omit<InputProps, 'errorBorderColor' | 'isInvalid'> {
//   error?: string;
// }

// export interface InputProps
//   extends Omit<HTMLChakraProps<'input'>, Omitted>,
//     ThemingProps<'Input'>,
//     FormControlOptions {
//   error?: string;
// }

const Input = forwardRef<InputProps, Props>(
  ({ children, error, id, helpText, label, ...rest }, ref) => {
    return (
      <FormControl id={id}>
        <FormLabel>{label}</FormLabel>
        <FieldItem error={error}>
          <ChInput
            {...rest}
            // @ts-ignore
            ref={ref}
            {...(!!error && { isInvalid: true, errorBorderColor: 'red.300' })}
          >
            {children}
          </ChInput>
        </FieldItem>
        {!!helpText && <FormHelperText>{helpText}</FormHelperText>}
      </FormControl>
    );
  }
);

export default Input;
