import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
    reducerPath: "contactsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://63cfa4df1098240437832815.mockapi.io",
    }),
    tagTypes: ["Contacts"],
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => `/contacts`,
            providesTags: ["Contacts"],
        }),
        deleteContact: builder.mutation({
            query: (contactId) => ({
                url: `/contacts/${contactId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Contacts"],
        }),
        createContact: builder.mutation({
            query: (newContact) => ({
                url: "/contacts",
                method: "POST",
                body: {
                    name: newContact.name,
                    phone: newContact.number,
                },
            }),
            invalidatesTags: ["Contacts"],
        }),
    }),
});

export const { useGetContactsQuery, useDeleteContactMutation, useCreateContactMutation } = contactsApi;