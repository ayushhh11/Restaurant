const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from './cartSlice'

const appStore = configureStore({
    reducer: {
        cart: cartReducer,// only 1 reducer we have at present
    },
});

export default appStore; 