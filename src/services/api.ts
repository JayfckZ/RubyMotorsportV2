import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import dotenv from 'dotenv'

dotenv.config()

const ApiLink = process.env.API

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `https://${ApiLink}.mockapi.io/ruby-api`
  }),
  endpoints: (builder) => ({
    getVehicles: builder.query({
      query: () => 'vehicles'
    }),
    getCategories: builder.query({
      query: () => 'category'
    })
  })
})

export const { useGetVehiclesQuery, useGetCategoriesQuery } = api
export default api
