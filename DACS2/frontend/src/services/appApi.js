import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// create the api

export const appApi = createApi({
    reducerPath: "appApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000"}),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (user) => ({
                url: "/users/signup",
                method: "POST",
                body: user,
            }),
        }),
        login: builder.mutation({
            query: (user) => ({
                url: "/users/login",
                method: "POST",
                body: user,
            })
        }),
        createProduct: builder.mutation({
            query: (product) => ({
                url: "/products",
                body: product,
                method: "POST"
            })
        }),
        updateProduct: builder.mutation({
            query: (product) => ({
                url: `/products/${product.id}`,
                body: product,
                method: "PATCH",
            }),
        }),
        deleteProduct: builder.mutation({
            query: ({productId}) => ({
                url: `/products/${productId}`,
                body: {
                },
                method: "DELETE"
            })
        }),
        addToCart: builder.mutation({
            query: (cartInfo) => ({
                url: "/products/add-to-cart",
                body: cartInfo,
                method: "POST"
            })
        }),
        increaseCartProduct: builder.mutation({
            query: (body) => ({
                 url: "/products/increase-to-cart",
                body: body,
                method: "POST"
            })
        }),
        // decrease from cart
        decreaseCartProduct: builder.mutation({
            query: (body) => ({
                 url: "/products/decrease-to-cart",
                body: body,
                method: "POST"
            })
        }),
        // remove from cart
        removeFromCart: builder.mutation({
            query: (body) => ({
                 url: "/products/remove-from-cart",
                body: body,
                method: "POST"
            })
        }),
    })
})

export const {useSignupMutation, useLoginMutation, useCreateProductMutation, useAddToCartMutation, useIncreaseCartProductMutation, useDecreaseCartProductMutation, useRemoveFromCartMutation, useUpdateProductMutation, useDeleteProductMutation} = appApi

export default appApi