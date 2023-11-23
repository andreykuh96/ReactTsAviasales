import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './reducers/filterSlice';
import tabSlice from './reducers/tabSlice';
import ticketSlice from './reducers/ticketSlice';

const store = configureStore({
  reducer: {
    filter: filterSlice,
    tab: tabSlice,
    ticket: ticketSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
