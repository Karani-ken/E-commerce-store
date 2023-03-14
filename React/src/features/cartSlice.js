import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
    cartItems: [],
    totalCartItems: 0,
    totalCartAmount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id)

                if(itemIndex >=0){
                    state.cartItems[itemIndex].cartQuantity += 1;
                    toast.info(`increased ${action.payload.name} quantity`,{
                        position: "top-center"
                    })

                }else{
                    const tempProduct = { ...action.payload, cartQuantity: 1 }
                    state.cartItems.push(tempProduct)
                    toast.success(`${action.payload.name} added to cart`,{
                        position:'top-center'
                    })
                }

           
        }
    }
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer