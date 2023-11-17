const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from './cartSlice'

const appStore = configureStore({
    reducer: cartReducer,
});

export default appStore;