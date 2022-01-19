import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContactSuccess,
  deleteContactSuccess,
  filterContacts,
  fetchContactsSuccess,
} from "./phonebook-actions";
//({...state, items:[...payload]})
const items = createReducer([], {
  [fetchContactsSuccess]: /*(_, state, payload) => ({...state, items:[...payload]}),*/(_, { payload }) => payload,
  [addContactSuccess]: (state, {payload}) => {
    return [...state, payload];
  },
  [deleteContactSuccess]: (state, {payload}) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});