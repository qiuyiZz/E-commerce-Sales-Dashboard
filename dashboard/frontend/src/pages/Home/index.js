import {Outlet, useNavigate, Link} from 'react-router-dom';
import {Menus} from "./components/Menus";
import {AuthConsumer as useAuth} from "../../auth";
import {authedRequest} from "../../http";
import StoreImage from '../../store.png';
export const Home = () => {
  const navigate = useNavigate();
  const {logout} = useAuth();
  const handleClickLogout = async () => {
    await authedRequest.get(`/api/users/logout`);
    logout()
      .then(() => {
        navigate('/login', {replace: true})
      })
  }
  return (
    <div className={'container-fluid p-0'} style={{height: '100vh'}}>
      <nav style={{height: '10vg', boxSizing: 'border-box'}} className={'navbar p-3 navbar-expand-lg navbar-light bg-light d-flex align-items-center m-0'}>
        <img className={'me-auto'} src={StoreImage} width={60}/>
        <button onClick={handleClickLogout} className={'btn btn-link'}>Logout</button>
        <Link to={'/customer'}>Customer</Link>
      </nav>
      <div className={'row'}>
        <div className={'col-2 h-100'}>
          <Menus />
        </div>
        <div style={{maxHeight: '90vh', overflow: 'auto'}}  className={'col-10'}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
