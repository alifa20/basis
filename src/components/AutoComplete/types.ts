import { UseComboboxState } from "downshift";
import React from "react";

export type ListItemKey = { id: string };

export type SharedAutoCompleteProps<Item> = {
  defaultValue?: Item | null;
  label: string;
  placeholder?: string;
  itemToString?: (item: Item | null) => string;
  listItem?: React.ComponentType<{ inputValue: string; item: Item | null }>;
  itemsFooter?: React.ComponentType<{
    closeMenu: () => void;
  }>;
  value?: Item;
  error?: string | string[];
  innerRef?: React.Ref<HTMLInputElement>;
  onChange?: (changed?: Item | null) => void;
  onBlur?: () => void;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onMouseDown?: React.MouseEventHandler<HTMLLabelElement>;
  selectItem?: (item: Item) => void;
  onCantFind?: () => void;
  testId?: string;
  __internal__keyboardFocus?: boolean;
  __internal__open?: boolean;
  __internal__highlightedIndex?: number;
  __internal__loading?: boolean;
  __internal__focus?: boolean;
};

export type AutoCompleteProps<Item> = SharedAutoCompleteProps<Item> & {
  getItems: (
    item: Pick<Partial<UseComboboxState<Item | null>>, "inputValue">
  ) => Item[];
  optional?: boolean;
  disabled?: boolean;
  hideLabel?: boolean;
  helpText?: string;
};

type Status = "IDLE" | "LOADING" | "ERROR" | "SUCCESS";

export type InternalState<Item> = {
  status: Status;
  error?: string;
  items: Item[];
};

export enum ActionType {
  LOAD_ITEMS_SUCCESS = "LOAD_ITEMS_SUCCESS",
  UPDATE_STATE = "UPDATE_STATE",
}

export type Action<Item> =
  | {
      type: ActionType.UPDATE_STATE;
      payload: { status: Status; error?: string };
    }
  | {
      type: ActionType.LOAD_ITEMS_SUCCESS;
      payload: {
        items: Item[];
        status: Status;
      };
    };
