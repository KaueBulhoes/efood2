import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cart'
import { restaurantApi } from '../Api/restaurantService'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [restaurantApi.reducerPath]: restaurantApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(restaurantApi.middleware),
})

export type RootReducer = ReturnType<typeof store.getState>
