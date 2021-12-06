import {
  FormControl,
  FormLabel,
  Grid,
  Input as ChInput,
  InputProps,
} from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import FieldItem from './FieldItem';

type DateType = { day: string; month: string; year: string };
export interface Props
  extends Omit<InputProps, 'errorBorderColor' | 'isInvalid' | 'onChange'> {
  error?: string;
  onChange?: (args: DateType) => void;
}

const DateInput = ({ children, error, onChange, onBlur, ...rest }: Props) => {
  const [value, setValue] = useState<DateType>({
    day: '',
    month: '',
    year: '',
  });

  const [isDirty, setIsDirty] = useState({
    day: false,
    month: false,
    year: false,
  });

  const handleBlur: React.FocusEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      let { name: key } = event.target;
      const newState = { ...isDirty, [key]: true };
      setIsDirty((state) => ({ ...state, [key]: true }));

      const areAllDirty =
        Object.values(newState).find((val) => !val) === undefined;

      if (areAllDirty) {
        onBlur?.(event);
      }
    },
    [isDirty, onBlur]
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name: key, value: updatedValue } = event.target;
    if (key !== 'day' && key !== 'month' && key !== 'year') {
      return;
    }
    onChange?.({
      ...value,
      [key]: updatedValue,
    });

    setValue((val) => ({
      ...val,
      [key]: updatedValue,
    }));
  };

  return (
    <FieldItem error={error}>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        {...(!!error && {
          borderBottomColor: 'red.300',
          borderBottomWidth: '3px',
        })}
      >
        <FormControl>
          <FormLabel>Day</FormLabel>
          <ChInput
            {...rest}
            name="day"
            type="number"
            placeholder="31"
            {...(!!error && { isInvalid: true, errorBorderColor: 'default' })}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Month</FormLabel>
          <ChInput
            {...rest}
            name="month"
            type="number"
            placeholder="12"
            {...(!!error && { isInvalid: true, errorBorderColor: 'default' })}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Year</FormLabel>
          <ChInput
            {...rest}
            name="year"
            type="number"
            placeholder="2000"
            {...(!!error && { isInvalid: true, errorBorderColor: 'default' })}
            onChange={handleChange}
            onBlur={handleBlur}
          />{' '}
        </FormControl>
      </Grid>
    </FieldItem>
  );
};

export default DateInput;
