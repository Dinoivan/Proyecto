import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Login } from '../public/login/Login';
import { LoginValidation } from '../public/login/LoginValidation';
import { Dashboard } from '../private/dashboard/Dashboard';
import { ModulosDemo } from '../private/modulos/ModulosDemo';
import { ExportacionesPage } from '../private/modulos/exportaciones/ExportacionesPage';
// import { PedidosPage} from '../private/modulos/exportaciones/components/PedidosPage';
import { Outlet } from 'react-router-dom';

function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/validar" element={<LoginValidation />}exact />
                <Route path="/dashboard" element={<Dashboard />} exact/>

                <Route path='/modulos' element={<ModulosDemo/>}>
                    <Route index element={<Outlet/>}/>

                    <Route path='/modulos/exportaciones' element={<ExportacionesPage/>}>
                        <Route index element={<Outlet/>}/>

                        {/* <Route path='pedidos' element={<PedidosPage/>}/> */}

                    </Route>


                </Route>
            </Routes>
        </Router>
    );
}

export default App;