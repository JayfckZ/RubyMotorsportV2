import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const ApiLink = process.env.REACT_APP_API
console.log(ApiLink, `https://${ApiLink}.mockapi.io/ruby-api`)
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `https://${ApiLink}.mockapi.io/ruby-api`
  }),
  endpoints: (builder) => ({
    getVehicles: builder.query<Car[], void>({
      query: () => 'vehicles'
    }),
    getCategories: builder.query({
      query: () => 'category'
    })
  })
})

export const { useGetVehiclesQuery, useGetCategoriesQuery } = api
export default api
