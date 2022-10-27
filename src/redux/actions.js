import { createAction } from "@reduxjs/toolkit";

export const fetchContactsAction = createAction('contacts/fetchContactsAction')
export const addContactAction = createAction('contacts/addContact')
export const deleteContactAction = createAction('contacts/deleteContact')
