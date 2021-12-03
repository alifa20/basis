import { mode } from '@chakra-ui/theme-tools';

const inputSelectStyles = {
  variants: {
    filled: (props) => ({
      field: {
        backgroundColor: 'grey.t05',
        color: 'black',
        _placeholder: { color: mode('default', 'grey.t65')(props) },
        _focus: {
          borderColor: 'secondary.lightBlue.t100',
        },
      },
    }),
  },
  sizes: {
    md: {
      field: { borderRadius: 'none' },
    },
  },
};
export const components = {
  Input: inputSelectStyles,
  Select: { ...inputSelectStyles },
};
