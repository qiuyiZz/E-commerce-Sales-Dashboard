import {Menu} from "antd";
import {useLocation, useNavigate} from "react-router-dom";


export const Menus = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const paths = pathname.split('/');
  const path = paths[paths.length - 1];
  const navigate = useNavigate();
  const menuitems = [
    {
      icon: <i className="bi bi-bar-chart"></i>,
      label: 'Analysis',
      key: 'analysis'
    },
    {
      icon: <i className="bi bi-card-list"></i>,
      label: 'Orders',
      key: 'orders'
    },
    {
      icon: <i className="bi bi-shop-window"></i>,
      label: 'Stocks',
      key: 'stocks'
    }
  ];

  return (
    <Menu mode={'vertical'}
          onClick={(e) => {
            navigate(`/home/${e.key}`, {replace: true})
          }}
          selectedKeys={[path]}
          items={menuitems}/>
  )
}
