import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {refreshOrders} from "./store";
import {OrdersTable} from "./components/OrdersTable";

export const Orders = () => {
  const orders = useSelector(state => state.orders.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshOrders())
  }, []);
  return (
    <div className={'p-3'}>
      <div>
        <OrdersTable orders={orders}/>
      </div>
    </div>
  )
}
