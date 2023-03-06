import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {refreshOrders} from "../Orders/store";
import moment from 'moment';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Orders in latest week',
    },
  },
};
export const Analysis = () => {
  const analysisMap = {};
  const [data, setData] = useState(null);
  const orders = useSelector(state => state.orders.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshOrders());
  }, []);
  useEffect(() => {
    if (Array.isArray(orders)) {
      orders.forEach(order => {
        let date = moment(order.createdAt).format('MM-DD');
        if (date in analysisMap) {
          analysisMap[date] ++;
        } else {
          analysisMap[date] = 1;
        }
      })
      const labels = Object.keys(analysisMap);
      labels.sort();
      const values = labels.map(label => analysisMap[label]);
      const data = {
        labels,
        datasets: [
          {
            label: 'Orders',
            data: values,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };
      setData(data)
    }
  }, [orders]);
  if (!data) {
    return <></>
  }
  return (
    <div className={'p-3'}>
     <Line options={options} data={data} />
    </div>
  )
}
