import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Login } from '../public/login/Login';
import { LoginValidation } from '../public/login/LoginValidation';

function App(){
    return(
        <Router>
            <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/validar" element={<LoginValidation />}exact="true" />
            </Routes>
        </Router>

    );
}

export default App;