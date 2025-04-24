import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ItemCardapio } from '../../Models/Restaurants'

type CartState = {
    items: ItemCardapio[]
    isOpen: boolean
}

const initialState: CartState = {
    items: [],
    isOpen: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<ItemCardapio>) => {
            const alreadyExists = state.items.some((item) => item.id === action.payload.id)
            if (!alreadyExists) {
                state.items.push(action.payload)
            } else {
                alert('Prato já adicionado')
            }
        },          
        remove: (state, action: PayloadAction<number>) => {
        state.items = state.items.filter((item) => item.id !== action.payload)
        },
        open: (state) => {
        state.isOpen = true
        },
        close: (state) => {
        state.isOpen = false
        }
    }
})

export const { add, open, close, remove } = cartSlice.actions

export default cartSlice.reducer
