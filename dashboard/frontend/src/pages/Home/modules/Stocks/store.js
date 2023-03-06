import {createSlice} from "@reduxjs/toolkit";
import {authedRequest} from "../../../../http";
import {notification} from "antd";


const Actions = {
  SET_STOCKS: 'SET_STOCKS',
  SET_EDITING_STOCK: 'SET_EDITING_STOCK'
};

export const stockSlice = createSlice({
  name: 'stocks',
  initialState: {
    stocks: [],
    editingStock: null
  },
  reducers: {
    [Actions.SET_STOCKS]: (state, action) => {
      state.stocks = action.payload;
    },
    [Actions.SET_EDITING_STOCK]: (state, action) => {
      state.editingStock = action.payload;
    }
  }
})

export const {SET_STOCKS, SET_EDITING_STOCK} = stockSlice.actions;

export const createStock = (stock) => dispatch => {
  authedRequest.post(`/api/stocks`, stock)
    .then(() => {
      notification.success({
        message: "Create successfully!"
      })
      dispatch(refreshStocks());
    })
}

export const updateStock = (stock_id, stock) => dispatch => {
  authedRequest.put(`/api/stocks/${stock_id}`, stock)
    .then(() => {
      notification.success({
        message: "Update successfully!"
      });
      dispatch(refreshStocks());
    })
}

export const removeStock = (stock_id) => dispatch => {
  authedRequest.delete(`/api/stocks/${stock_id}`)
    .then(() => {
      notification.success({
        message: "Remove successfully!"
      });
      dispatch(refreshStocks());
    })
}

export const refreshStocks = () => dispatch => {
  authedRequest.get(`/api/stocks`)
    .then(res => {
      if (res && res.data) {
        dispatch(SET_STOCKS(res.data))
      }
    })
}

export const stocksReducer = stockSlice.reducer;
