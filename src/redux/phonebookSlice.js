import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
const contactSlice = createSlice({
  // Имя слайса
  name: 'contacts',
  // Начальное состояние редюсера слайса
  initialState,
  // Объект редюсеров
  extraReducers: builder =>
    builder

      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.items = [...payload].reverse();
        state.isLoading = false;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
        state.isLoading = false;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items = [payload, ...state.items];
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          getContacts.rejected,
          deleteContact.rejected,
          addContact.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ).addMatcher(
        isAnyOf(
          getContacts.pending,
          deleteContact.pending,
          addContact.pending
        ),
        (state) => {
          state.isLoading = true;
          
        }
      ),
});

export const contactReducer = contactSlice.reducer;
