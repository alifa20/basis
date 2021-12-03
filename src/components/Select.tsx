import React, { forwardRef } from 'react';
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Select as ChSelect,
  SelectProps,
} from '@chakra-ui/react';
import FieldItem from './FieldItem';

export type Props = Omit<SelectProps, 'errorBorderColor' | 'isInvalid'> & {
  label: string;
  helpText?: string;
  error?: string;
};

const Select = forwardRef<SelectProps, Props>(
  ({ children, error, id, helpText, label, ...rest }, ref) => {
    return (
      <FormControl id={id}>
        <FormLabel>{label}</FormLabel>
        <FieldItem error={error}>
          <ChSelect
            {...rest}
            // @ts-ignore
            ref={ref}
            {...(!!error && { isInvalid: true, errorBorderColor: 'red.300' })}
          >
            {children}
          </ChSelect>
        </FieldItem>
        {!!helpText && <FormHelperText>{helpText}</FormHelperText>}
      </FormControl>
    );
  }
);

export default Select;
