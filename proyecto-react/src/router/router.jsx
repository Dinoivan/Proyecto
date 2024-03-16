import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Login } from '../public/login/Login';
import { LoginValidation } from '../public/login/LoginValidation';
import { Dashboard } from '../private/dashboard/Dashboard';

function App(){
    return(
        <Router>
            <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/validar" element={<LoginValidation />}exact="true" />
            <Route path="/dashboard" element={<Dashboard />} exact="true"/>
            </Routes>
        </Router>
    );
}

export default App;