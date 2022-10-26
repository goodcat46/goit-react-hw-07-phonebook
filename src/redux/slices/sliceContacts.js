import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsAction,
  addContactAction,
  deleteContactAction,
} from '../actions/actions';
import { contacts } from 'redux/initialState';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contacts,
  extraReducers: {
    [fetchContactsAction.fullfiled](state, action) {
      state.contacts.isLoading = false;
      state.contacts = [...action.payload];
    },
    [fetchContactsAction.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload.error;
    },
    [fetchContactsAction.pending](state, action) {
      state.contacts.isLoading = true;
    },
    [addContactAction.fullfiled](state, action) {
      state.contacts.isLoading = false;
      state.contacts = [action.payload, ...state.contacts];
    },
    [addContactAction.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload.error;
    },
    [addContactAction.pending](state, action) {
      state.contacts.isLoading = true;
    },
    [deleteContactAction.fullfiled](state, action) {
      state.contacts.isLoading = false;
      state.contacts = state.contacts.filter(
        user => user.id !== action.payload.id
      );
    },
    [deleteContactAction.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload.error;
    },

    [deleteContactAction.pending](state, action) {
      state.contacts.isLoading = true;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
