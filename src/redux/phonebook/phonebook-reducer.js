import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContactSuccess,
  deleteContactSuccess,
  filterContacts,
  fetchContactsSuccess,
  fetchContactsRequest,
  fetchContactsError,
  deleteContactError,
  deleteContactRequest,
  addContactError,
  addContactRequest,
} from "./phonebook-actions";
const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [filterContacts]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [deleteContactError]: (_, { payload }) => payload,
  [deleteContactRequest]: () => null,
  [addContactError]: (_, { payload }) => payload,
  [addContactRequest]: () => null,
  [fetchContactsRequest]: () => null,
  [fetchContactsError]: (_, { payload }) => payload,
});

const isLoadingReducer = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  // request -> true
  // success -> false
  // error -> false
});

export default combineReducers({
  items,
  filter,
  error,
  //  isLoading: isLoading
  isLoading: isLoadingReducer,
});
