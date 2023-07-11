import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import ky from 'ky'

import type { Movie, MovieList } from '../types'

const apiPath = 'movies'

export const moviesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
    fetchFn: (...args) => ky(...args),
  }),
  endpoints: (builder) => ({
    getMovieById: builder.query<Movie, { id: string }>({
      query: ({ id }) => `/${apiPath}/${id}`,
    }),
    getMoviesList: builder.query<MovieList, void>({
      query: () => `/${apiPath}`,
    }),
  }),
  reducerPath: 'moviesApi',
})

export const { useGetMoviesListQuery, useGetMovieByIdQuery } = moviesApi
