import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rubyv2-api.onrender.com'
  }),
  endpoints: (builder) => ({
    getVehicles: builder.query<Car[], void>({
      query: () => 'vehicles'
    }),
    getCategories: builder.query<Car[], string>({
      query: (category) => `category/${category}`
    }),
    getOnSale: builder.query<Car[], void>({
      query: () => 'sale'
    }),
    getFeatured: builder.query<Car[], void>({
      query: () => 'featured'
    }),
    getCar: builder.query<Car, string>({
      query: (id) => `vehicle/${id}`
    })
  })
})

export const {
  useGetVehiclesQuery,
  useGetCategoriesQuery,
  useGetOnSaleQuery,
  useGetFeaturedQuery,
  useGetCarQuery
} = api
export default api
