import React, { ReactNode } from 'react';
import { Box, Text } from '@chakra-ui/react';

interface Props {
  error?: string;
  children: ReactNode;
}

const FieldItem = ({ error, children }: Props) => {
  return (
    <>
      {children}
      {!!error && (
        <Box color="red.300">
          <Text>{error}</Text>
        </Box>
      )}
    </>
  );
};

export default FieldItem;
