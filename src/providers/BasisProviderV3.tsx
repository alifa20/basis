import { ChakraProvider } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode
}
const BasisProviderV3 = ({ children }: Props) => {
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  )
}

export default BasisProviderV3;
