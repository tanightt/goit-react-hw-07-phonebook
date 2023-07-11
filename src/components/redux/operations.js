import axios from 'axios';
import {
  addContact,
  deleteContact,
  fetchAll,
  setError,
  setLoading,
} from './contactSlice';
import { toast } from 'react-toastify';
import { nanoid } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64ac593a9edb4181202f765e.mockapi.io';

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.get('/contacts');
    dispatch(fetchAll(data));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const addContactThunk = (name, number) => async dispatch => {
  try {
    const { data } = await axios.post('/contacts', {
      id: nanoid(),
      name,
      number,
    });
    dispatch(addContact(data));
  } catch (error) {}
};

export const deleteContactThunk = id => async dispatch => {
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContact(id));
  } catch (error) {
    toast.error('server error');
  }
};
