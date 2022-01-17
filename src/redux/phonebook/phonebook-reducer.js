import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContactSuccess,
  deleteContactSuccess,
  filterContacts,
  fetchContactsSuccess,
} from "./phonebook-actions";

const items = createReducer([], {
  [fetchContactsSuccess]: (_, action) => [action.payload],
  [addContactSuccess]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContactSuccess]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer("", {
  [filterContacts]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});