// import logo from './logo.svg';
  
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Register from './Register';
import Login from './Login';
import User from './User';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user' element={<User/>} />
      </Routes>
    </Router>  
            </>
  );
}

export default App;
