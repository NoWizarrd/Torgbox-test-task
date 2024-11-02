import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Timezone } from 'types/Timezone'

interface TimezoneState {
  timezones: Timezone[];
  selectedTimezone: Timezone | null;
}

const initialState: TimezoneState = {
  timezones: [],
  selectedTimezone: null,
};

const timezoneSlice = createSlice({
  name: 'timezone',
  initialState,
  reducers: {
    setTimezones(state, action: PayloadAction<Timezone[]>) {
      state.timezones = action.payload;
      state.selectedTimezone = action.payload[0]; // по умолчанию первый часовой пояс
    },
    setSelectedTimezone(state, action: PayloadAction<Timezone>) {
      state.selectedTimezone = action.payload;
    },
  },
});

export const { setTimezones, setSelectedTimezone } = timezoneSlice.actions;
export default timezoneSlice.reducer;
