import {AddStock} from "./components/AddStock";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {refreshStocks} from "./store";
import {StocksTable} from "./components/StocksTable";
import {EditStock} from "./components/EditStock";

export const Stocks = () => {
  const stocks = useSelector(state => state.stocks.stocks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshStocks())
  }, []);
  return (
    <div className={'p-3'}>
      <h3>Stocks</h3>
      <EditStock />
      <div>
        <AddStock />
      </div>
      <div>
        <StocksTable stocks={stocks}/>
      </div>
    </div>
  )
}
