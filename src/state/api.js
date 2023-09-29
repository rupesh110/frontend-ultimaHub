import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'http://localhost:4000';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl }),
    reducerPath: 'ultimaHubApi',
    tagTypes: ["Home"],
    endpoints: (builder) => ({
        fetchHome: builder.query({
            query: () => `/api/quote`,
            providesTags: ["Home"]
        }),
    })
});

export const { useFetchHomeQuery } = api;
