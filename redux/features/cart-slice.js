import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  cartProducts:[],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cart_product: (state,{payload}) => {
     const productIndex = state.cartProducts.findIndex(item => item.id == payload.id);
     if(productIndex >= 0){
      state.cartProducts[productIndex].quantity +=1;
      toast.info('Increase Product Quantity', {
        position: 'top-left'
      })
     }
     else {
      const tempProduct = {...payload,quantity:1};
      state.cartProducts.push(tempProduct)
      toast.success(`${payload.productTitle} added to cart`, {
        position: 'top-left'
      })
     }
    },
    decrease_quantity:(state,{payload}) => {
      const cartIndex = state.cartProducts.findIndex(item => item.id === payload.id);
      if(state.cartProducts[cartIndex].quantity > 1){
        state.cartProducts[cartIndex].quantity -= 1
        toast.error(`Decrease cart quantity`, {
          position: 'top-left'
        })
      }
      // if(state.cartProducts[cartIndex].quantity == 1){
      //   state.cartProducts[cartIndex].quantity -= 1
      //   toast.error(`Decrease cart quantity`, {
      //     position: 'top-left'
      //   })
      // }
      // else if (state.cartProducts[cartIndex].quantity === 1) {
      //   state.cartProducts = state.cartProducts.filter((cart) => cart.id !== payload.id);
      //   toast.error(`${payload.title} remove from cart`, {
      //     position: 'top-left'
      //   })
      // }
      // else (state.cartProducts)
    },
    remove_cart_product:(state,{payload}) => {
      state.cartProducts = state.cartProducts.filter(item => item.id !== payload.id);
      toast.error(`remove from your cart`, {
        position: 'top-left'
      })
    },
    clear_cart:(state,{payload}) => {
      const confirmMsg = window.confirm('Are you sure deleted your all cart items ?');
      if(confirmMsg){
        state.cartProducts = [];
      }
    }
  },
})

export const {cart_product,remove_cart_product,decrease_quantity,clear_cart} = cartSlice.actions;

export const cartProducts = state => state.cart.cartProducts;

export default cartSlice.reducer