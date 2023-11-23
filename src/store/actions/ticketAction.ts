import { createAsyncThunk } from '@reduxjs/toolkit';
import { addTickets, isLoading } from '../reducers/ticketSlice';

// https://aviasales-test-api.kata.academy/tickets?searchId=${id}

export const fetchSearchId = createAsyncThunk('tickets/fetchSearchId', async () => {
  const response = await fetch('https://aviasales-test-api.kata.academy/search');
  const data = await response.json();
  return data.searchId;
});

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async (id: string, api) => {
  api.dispatch(isLoading(true));
  try {
    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`);

    if (!response.ok) {
      throw new Error('fetch');
    }

    const data = await response.json();

    if (!data.stop) {
      api.dispatch(addTickets(data.tickets));
      await api.dispatch(fetchTickets(id));
    } else {
      api.dispatch(isLoading(false));
    }
  } catch (e: any) {
    if (e.message === 'fetch') {
      await api.dispatch(fetchTickets(id));
    }
    return api.rejectWithValue(e.message);
  }
});
