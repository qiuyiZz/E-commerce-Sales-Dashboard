import {createSlice} from "@reduxjs/toolkit";
import {authedRequest} from "../../../../http";
import {notification} from "antd";


const Actions = {
  SET_ORDERS: 'SET_ORDERS'
};

export const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: []
  },
  reducers: {
    [Actions.SET_ORDERS]: (state, action) => {
      state.orders = action.payload;
    }
  }
})

export const {SET_ORDERS} = orderSlice.actions;

export const sendOrder = (order_id) => dispatch => {
  authedRequest.put(`/api/orders/${order_id}/send`)
    .then(() => {
      notification.success({
        message: "Send goods successfully!"
      });
      dispatch(refreshOrders())
    })
}

export const refreshOrders = () => dispatch => {
  authedRequest.get(`/api/orders`)
    .then(res => {
      if (res && res.data) {
        dispatch(SET_ORDERS(res.data))
      }
    })
}

export const ordersReducer = orderSlice.reducer;
