import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestauranteAPI, Restaurants } from '../Models/Restaurants'
import { PurchasePayload, PurchaseResponse } from '../Models/Purchase'

export const restaurantApi = createApi({
    reducerPath: 'restaurantApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fake-api-tau.vercel.app/api/efood/' }),
    endpoints: (builder) => ({
        getRestaurants: builder.query<Restaurants[], void>({
        query: () => 'restaurantes',
        transformResponse: (response: RestauranteAPI[]): Restaurants[] => {
            return response.map((restaurante) => ({
            id: restaurante.id,
            title: restaurante.titulo,
            image: restaurante.capa,
            description: restaurante.descricao,
            isFeatured: restaurante.destacado,
            type: restaurante.tipo,
            rate: restaurante.avaliacao,
            menu: restaurante.cardapio.map((item) => ({
                id: item.id,
                name: item.nome,
                description: item.descricao,
                image: item.foto,
                portion: item.porcao,
                price: item.preco,
            }))
            }))
        }
        }),
        purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
            query: (body) => ({
                url: 'checkout',
                method: 'POST',
                body
            })
        })
    })
})

export const { useGetRestaurantsQuery, usePurchaseMutation } = restaurantApi
