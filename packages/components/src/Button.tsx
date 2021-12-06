import { Button as ChButton, ButtonProps } from '@chakra-ui/react';
import React from 'react';

export type Props = ButtonProps & {};

const Button = ({ children, ...rest }: Props) =>
  <ChButton colorScheme="brand" size="lg" w="full" {...rest}>
    {children}
  </ChButton>

export default Button;
