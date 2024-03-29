import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
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
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));           
        },
        removeFromCart(state, action){
            const nextCartItems = state.cartItems.filter(
                (cartItem)=> cartItem.id !== action.payload.id
              
            );
            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.error(`${action.payload.name} was removed from cart`,
             {position: 'top-center'})
        },
        decreaseCart(state,action){
            const itemIndex = state.cartItems.findIndex(
                (cartItem)=> cartItem.id === action.payload.id
            );
            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1;
                toast.info(`Decreasd ${action.payload.name} quantity`,{
                    position: "top-center"
                });
            }else if (state.cartItems[itemIndex].cartQuantity === 1){
                const nextCartItems = state.cartItems.filter(
                    (cartItem)=> cartItem.id !== action.payload.id
                  
                );
                state.cartItems = nextCartItems;
                toast.error(`${action.payload.name} was removed from cart`,
             {position: 'top-center'})                
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        }
    }
})

export const { addToCart, removeFromCart,decreaseCart } = cartSlice.actions

export default cartSlice.reducer