import {configureStore} from "@reduxjs/toolkit";
import {ordersReducer} from "./pages/Home/modules/Orders/store";
import {stocksReducer} from "./pages/Home/modules/Stocks/store";


export const store = configureStore({
  reducer: {
    orders: ordersReducer,
    stocks: stocksReducer
  }
})
