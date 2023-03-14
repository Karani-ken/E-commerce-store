import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice'
import { productsApi } from '../features/productsApi'
import productsReducer, { productsFetch } from '../features/productsSlice'
const store = configureStore({
    reducer:{
        products: productsReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => {
      return  getDefaultMiddleware().concat(productsApi.middleware)
    }
})
//using asyncthunk
store.dispatch(productsFetch())

export default store