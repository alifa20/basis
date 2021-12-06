import { theme } from '@chakra-ui/react';

export const fonts = {
  heading: `'Montserrat', ${theme.fonts?.heading}`,
  body: `'Roboto', ${theme.fonts?.body}`,
} as const;
