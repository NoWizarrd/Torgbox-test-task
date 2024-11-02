import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Timezone } from 'types/Timezone'

export const timezoneApi = createApi({
    reducerPath: 'timezoneApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
      getTimezones: builder.query<Timezone[], void>({
        query: () => `timezones.json`,
      }),
    }),
  })
  
  export const { useGetTimezonesQuery } = timezoneApi