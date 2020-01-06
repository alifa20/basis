import React, { useState } from "react";
import * as allDesignSystem from "basis";
import {
  ALL_FREQUENCY_OPTIONS,
  COLORS,
  MODES,
  DEFAULT_PROPS
} from "basis/components/Frequency";
import ComponentContainer from "../../../components/ComponentContainer";
import RadioGroupSetting, {
  getRadioOptions,
  getCheckboxOptions
} from "../../../components/RadioGroupSetting";
import CheckboxesSetting from "../../../components/CheckboxesSetting";
import { formatCode, nonDefaultProps } from "../../../utils/formatting";

const { designTokens } = allDesignSystem;
const scope = allDesignSystem;

const colorOptions = getRadioOptions(COLORS);
const modeOptions = getRadioOptions(MODES);
const frequencyOptions = ALL_FREQUENCY_OPTIONS;
const isOptionalOptions = getCheckboxOptions();
const hasHelpTextOptions = getCheckboxOptions();
const isDisabledOptions = getCheckboxOptions();

function FrequencyPage() {
  const [color, setColor] = useState(DEFAULT_PROPS.color);
  const [mode, setMode] = useState(DEFAULT_PROPS.mode);
  const [frequencies, setFrequencies] = useState(() => {
    return ALL_FREQUENCY_OPTIONS.reduce((acc, option) => {
      acc[option.value] = DEFAULT_PROPS[option.value];

      return acc;
    }, {});
  });
  const [isOptional, setIsOptional] = useState(DEFAULT_PROPS.isOptional);
  const [hasHelpText, setHasHelpText] = useState(
    Boolean(DEFAULT_PROPS.helpText)
  );
  const [isDisabled, setIsDisabled] = useState(DEFAULT_PROPS.isDisabled);
  const code = formatCode(`function App() {
  const [salary, setSalary] = React.useState({
    value: {
      input: "",
      frequency: ""
    }
  });

  return (
    <Frequency ${nonDefaultProps([
      {
        prop: "color",
        value: color,
        defaultValue: DEFAULT_PROPS.color
      },
      {
        prop: "mode",
        value: mode,
        defaultValue: DEFAULT_PROPS.mode
      },
      {
        prop: "label",
        value: "How much do you earn before tax?"
      },
      {
        prop: "annually",
        value: frequencies.annually,
        defaultValue: DEFAULT_PROPS.annually,
        type: "boolean"
      },
      {
        prop: "quarterly",
        value: frequencies.quarterly,
        defaultValue: DEFAULT_PROPS.quarterly,
        type: "boolean"
      },
      {
        prop: "monthly",
        value: frequencies.monthly,
        defaultValue: DEFAULT_PROPS.monthly,
        type: "boolean"
      },
      {
        prop: "fortnightly",
        value: frequencies.fortnightly,
        defaultValue: DEFAULT_PROPS.fortnightly,
        type: "boolean"
      },
      {
        prop: "weekly",
        value: frequencies.weekly,
        defaultValue: DEFAULT_PROPS.weekly,
        type: "boolean"
      },
      {
        prop: "isOptional",
        value: isOptional,
        defaultValue: DEFAULT_PROPS.isOptional,
        type: "boolean"
      },
      {
        prop: "helpText",
        value: hasHelpText
          ? "Please be as accurate as possible."
          : DEFAULT_PROPS.helpText,
        defaultValue: DEFAULT_PROPS.helpText
      },
      {
        prop: "isDisabled",
        value: isDisabled,
        defaultValue: DEFAULT_PROPS.isDisabled,
        type: "boolean"
      }
    ])}
      data={salary}
      onChange={setSalary}
    />
  );
}`);

  return (
    <>
      <div
        css={{
          display: "flex",
          flexShrink: 0,
          padding: `${designTokens.space[5]} ${designTokens.space[6]}`
        }}
      >
        <RadioGroupSetting
          heading="Color"
          options={colorOptions}
          selectedValue={color}
          setSelectedValue={setColor}
        />
        <RadioGroupSetting
          css={{ marginLeft: designTokens.space[11] }}
          heading="Mode"
          options={modeOptions}
          selectedValue={mode}
          setSelectedValue={setMode}
        />
        <CheckboxesSetting
          css={{ marginLeft: designTokens.space[11] }}
          heading="Frequency"
          options={frequencyOptions}
          selectedValues={frequencies}
          setSelectedValues={setFrequencies}
        />
        <RadioGroupSetting
          css={{ marginLeft: designTokens.space[11] }}
          heading="Optional"
          options={isOptionalOptions}
          selectedValue={isOptional}
          setSelectedValue={setIsOptional}
          type="boolean"
        />
        <RadioGroupSetting
          css={{ marginLeft: designTokens.space[11] }}
          heading="Help Text"
          options={hasHelpTextOptions}
          selectedValue={hasHelpText}
          setSelectedValue={setHasHelpText}
          type="boolean"
        />
        <RadioGroupSetting
          css={{ marginLeft: designTokens.space[11] }}
          heading="Disabled"
          options={isDisabledOptions}
          selectedValue={isDisabled}
          setSelectedValue={setIsDisabled}
          type="boolean"
        />
      </div>
      <ComponentContainer
        code={code}
        scope={scope}
        backgroundColor={
          color === "white"
            ? designTokens.colors.grey.t05
            : designTokens.colors.white
        }
      />
    </>
  );
}

export default FrequencyPage;