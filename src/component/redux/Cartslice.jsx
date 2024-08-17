
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  searchProduct: "" ,
  searchCategory: "" ,
};

const cartSlice = createSlice({
  name: 'cart',
initialState,
  reducers: {
    
      addToCart(state, action) {
        const itemExist = state.items.find(
          (item) => item.id === action.payload.id
        );
  
        if (itemExist) {
          itemExist.quantity++;
        } else {
          state.items.push({
            ...action.payload,
            quantity: 1,
          });
        }
      },
  
      removeFromCart(state, action) {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      },
      AdjustCart(state, action) {
        const itemExist = state.items.find(
          (item) => item.id === action.payload.id
        );
  
        if (itemExist) {
          itemExist.quantity += action.payload.quantity;
        }
      },
      changeSearchProduct(state, action) {
        state.searchProduct = action.payload;
      },
      clearCart(state, action) {
        state.items = [];
      },
      selectCategory(state, action) {
        state.searchCategory = action.payload;
      },
      
    },
});

export const { addToCart, removeFromCart, AdjustCart , clearCart, changeSearchProduct, selectCategory} = cartSlice.actions;
export default cartSlice.reducer;
     