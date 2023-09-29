import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.REACT_APP_BASE_URL;

console.log(baseUrl);

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
