import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const contactsSlice = createSlice({
  name: 'contactList',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
