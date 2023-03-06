import {Route, Routes, Navigate} from 'react-router-dom';
import {Home} from "./pages/Home";
import {ProtectedRoute} from "./auth/protected.route";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import {Orders} from "./pages/Home/modules/Orders";
import {Stocks} from "./pages/Home/modules/Stocks";
import {Analysis} from "./pages/Home/modules/Analysis";
import {Customer} from "./pages/Customer";

function App() {
  return (
    <div >
      <Routes>
        <Route path={''} index element={<Navigate to={'home'}/>}/>
        <Route path={'home'} element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }>
          <Route path={''} index element={<Navigate to={'analysis'}/>}/>
          <Route path={'analysis'} element={<Analysis />}/>
          <Route path={'orders'} element={<Orders />} />
          <Route path={'stocks'} element={<Stocks />} />
        </Route>
        <Route path={'login'} element={<Login />}/>
        <Route path={'register'} element={<Register />} />
        <Route path={'customer'} element={<Customer />}/>
      </Routes>
    </div>
  );
}

export default App;
