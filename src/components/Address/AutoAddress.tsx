import React, { forwardRef, useRef } from "react";
import Input from "../Input";
import Container from "../Container";
import mergeRefs from "../../utils/mergeRefs";
import { LoadingIcon, Message, Button } from "..";
import { useBasisForm } from "../../hooks/useBasisForm/useBasisForm";

export const AutoAddress = forwardRef<HTMLInputElement, AddressProps>(
  (props, ref) => {
    const {
      label,
      error,
      onBlur,
      value = EMPTY_ADDRESS_VALUE.autoComplete,
      fromDate,
      toDate,
    } = props;

    // const { day, month, year } = value;
    // const selectedDate = useMemo(() => {
    //   const parsedDate = parseISO(
    //     `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`,
    //   );
    //   return isValid(parsedDate) ? parsedDate : undefined;
    // }, [day, month, year]);

    const wrapperRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // const options: UseInputOptions = {
    //   defaultSelected: selectedDate,
    //   fromDate,
    //   toDate,
    //   format: DATE_FORMAT,
    // };

    // const input = useInput(options);

    const { search, isLoading, isError } = useAddressSearch();

    const { Field } = useBasisForm<PersonalDetailsState>();

    const onClick = async () => {
      const addressLineQuery = "48 Pirrama Rd, Pyrmont NSW 2009";
      await search(addressLineQuery);
      // console.log(res);

      // const res = await searchPlaces({
      //   addressLineQuery,
      //   countryCode,
      //   tempToken,
      // });
      // // eslint-disable-next-line no-console
      // console.log(res);
    };

    const onFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
      // input.fieldProps.onFocus(e);
      // setOpen(true);
      // props.onFocus?.();
      // const address = e.target.value;
      props.onFocus?.();
    };

    const onChange: React.FocusEventHandler<HTMLInputElement> = (e) => {
      // input.fieldProps.onChange(e);
      // const date = parse(e.target.value, DATE_FORMAT, new Date());
      const address = e.target.value;
      props.onChange?.(address);
    };

    return (
      <Container>
        {/* <Field
          label="Address"
          name="applicantDetails.address.autoComplete"
          as={Input}
        /> */}
        <Input
          label={label}
          name="autoComplete"
          // {...input.fieldProps}
          // value={value}
          error={error}
          placeholder="Enter your address"
          ref={mergeRefs([inputRef, ref])}
          onFocus={onFocus}
          onChange={onChange}
        />
        {isLoading && <LoadingIcon />}
        {isError && <Message>Something went wrong</Message>}
        <Button margin="10 0 0 0" width="160" onClick={onClick}>
          Test
        </Button>
      </Container>
    );
  }
);
