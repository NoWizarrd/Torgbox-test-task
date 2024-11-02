import { configureStore } from '@reduxjs/toolkit'
import { timezoneApi } from './Timezone/TimezoneApi'
import timezoneSlice from './Timezone/TimezoneSlice'

export const store = configureStore({
  reducer: {
    timezone: timezoneSlice,
    [timezoneApi.reducerPath]: timezoneApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(timezoneApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch