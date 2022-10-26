import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://635937a7ff3d7bddb99c4308.mockapi.io/';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchContactsAction',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/contacts`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/addContactAction',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post(`/contacts`, newContact);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchDeleteContact = createAsyncThunk(
  'contacts/deleteContactAction',
  async (contactID, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactID}`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// fetchContactsAction
// addContactAction
// deleteContactAction
