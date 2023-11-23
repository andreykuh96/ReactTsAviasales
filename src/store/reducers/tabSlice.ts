import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITab {
  text: string;
  active: boolean;
}

interface TabsState {
  tabs: ITab[];
}

const initialState: TabsState = {
  tabs: [
    { text: 'Самый дешевый', active: true },
    { text: 'Самый быстрый', active: false },
    { text: 'Оптимальный', active: false },
  ],
};

const tabSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    changeActiveTab(state, action: PayloadAction<string>) {
      state.tabs.map((item) => (item.text === action.payload ? (item.active = true) : (item.active = false)));
    },
  },
});

export const { changeActiveTab } = tabSlice.actions;
export default tabSlice.reducer;
