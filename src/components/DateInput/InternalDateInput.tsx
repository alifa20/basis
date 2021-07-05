import React from "react";
import { DateInputValue } from "../../values";
import Grid from "../Grid";
import InternalInput, { InternalInputColors } from "../internal/InternalInput";
import { DayMode, YearMode } from "./types";

type Props = {
  value?: DateInputValue;
  innerRef?: React.Ref<HTMLDivElement>;
  color?: InternalInputColors;
  label?: string;
  dayMode?: DayMode;
  yearMode?: YearMode;
  helpText?: string;
  disabled?: boolean;
  optional?: boolean;
  testId?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
};

const InternalDateInput = (props: Props) => {
  const {
    color,
    dayMode,
    yearMode,
    disabled,
    onFocus,
    onBlur,
    value,
    onChange,
  } = props;

  return (
    <Grid
      cols={
        dayMode === "none" && yearMode === "2-digits"
          ? 2
          : dayMode === "2-digits" && yearMode === "4-digits"
          ? 4
          : 3
      }
      colsGap={1}
    >
      {dayMode === "2-digits" && (
        <Grid.Item colSpan={0}>
          <InternalInput
            name="day"
            aria-label="day"
            variant="numeric"
            color={color}
            placeholder="DD"
            maxLength="2"
            disabled={disabled}
            onFocus={onFocus}
            onBlur={onBlur}
            value={value?.day}
            onChange={onChange}
          />
        </Grid.Item>
      )}
      <Grid.Item colSpan={dayMode === "2-digits" ? 1 : 0}>
        <InternalInput
          name="month"
          aria-label="month"
          variant="numeric"
          color={color}
          placeholder="MM"
          maxLength="2"
          disabled={disabled}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value?.month}
          onChange={onChange}
        />
      </Grid.Item>
      <Grid.Item
        colSpan={
          dayMode === "none" && yearMode === "2-digits"
            ? "1"
            : dayMode === "none" && yearMode === "4-digits"
            ? "1-2"
            : dayMode === "2-digits" && yearMode === "2-digits"
            ? "2"
            : "2-3"
        }
      >
        <InternalInput
          name="year"
          aria-label="year"
          variant="numeric"
          color={color}
          placeholder={yearMode === "2-digits" ? "YY" : "YYYY"}
          maxLength={yearMode === "2-digits" ? "2" : "4"}
          disabled={disabled}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value?.year}
          onChange={onChange}
        />
      </Grid.Item>
    </Grid>
  );
};

export default InternalDateInput;
