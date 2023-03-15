import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const setLocalItems = (key, val) => localStorage.setItem(key, JSON.stringify(val));

function getLoacalItems() {
  if (localStorage.getItem('addedProducts')) {
    return JSON.parse(localStorage.getItem('addedProducts'));
  } else {
    return [];
  }
}

const initialState = {
  basketState: false,
  basketItems: getLoacalItems(),
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setBasketState: (state, action) => {
      state.basketState = action.payload;
    },
    addToBasket: (state, action) => {
      const productIdx = state.basketItems.findIndex(item => item.id === action.payload.id);
      if (productIdx >= 0) {
        state.basketItems[productIdx].productQty += 1;
        toast.success('Item QTY increased!')
      } else {
        state.basketItems.push({ ...action.payload, productQty: 1 });
        toast.success(`${action.payload.title} added to basket!`)
      }
      setLocalItems('addedProducts', state.basketItems);
    },
    removeFromBasket: (state, action) => {
      state.basketItems = state.basketItems.filter(item => item.id !== action.payload.id);
      setLocalItems('addedProducts', state.basketItems);
      toast(`${action.payload.title} removed from basket!`, { icon: '😶', style: { background: '#333', color: '#fff' } });
    },
    incrDecrQTY: (state, action) => {
      const productIdx = state.basketItems.findIndex(item => item.id === action.payload.id);
      if (state.basketItems[productIdx].productQty >= 1) {
        state.basketItems[productIdx].productQty += +action.payload.incrDecr;
        setLocalItems('addedProducts', state.basketItems);
        if (action.payload.incrDecr === '+1') {
          toast.success('Item QTY increased!');
        } else {
          toast.success('Item QTY decreased!');
        }
      } else {
        setLocalItems('addedProducts', state.basketItems);
        toast(`${action.payload.title} removed from basket!`, { icon: '😶', style: { background: '#333', color: '#fff' } });
        state.basketItems = state.basketItems.filter(item => item.id !== action.payload.id)
      }
    },
    clearBasket: (state) => {
      if (state.basketItems.length) {
        const consent = confirm('Are you sure?!');
        if (consent) {
          state.basketItems = []
          setLocalItems('addedProducts', state.basketItems);
          toast.error('Basket cleared!')
        }
      }
    }
  }
});

export const { setBasketState, addToBasket, removeFromBasket, incrDecrQTY, clearBasket } = basketSlice.actions;
export default basketSlice.reducer;