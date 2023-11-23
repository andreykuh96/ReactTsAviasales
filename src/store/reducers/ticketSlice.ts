import { createSlice } from '@reduxjs/toolkit';
import { fetchSearchId } from '../actions/ticketAction';

interface ISegment {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}

export interface ITicket {
  price: number;
  carrier: string;
  segments: ISegment[];
}

interface TicketState {
  tickets: ITicket[];
  id: string;
  isLoading: boolean;
  isError: string | undefined;
}

const initialState: TicketState = {
  tickets: [],
  id: '',
  isLoading: false,
  isError: '',
};

const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    addTickets(state, action) {
      state.tickets.push(...action.payload);
    },
    isLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchId.fulfilled, (state, action) => {
      state.id = action.payload;
    });
  },
});

export const { addTickets, isLoading } = ticketSlice.actions;
export default ticketSlice.reducer;
