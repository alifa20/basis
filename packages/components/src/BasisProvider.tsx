import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

type Props = ChakraProviderProps & {
  children: ReactNode;
  v3?: boolean
}

const BasisProvider = ({ children, theme }: Props) =>
  <ChakraProvider theme={theme}>
    {children}
  </ChakraProvider>

export default BasisProvider;
