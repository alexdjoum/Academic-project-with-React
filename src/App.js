// import logo from './logo.svg';
  
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Register from './Register';
import Login from './Login';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>  
            </>
  );
}

export default App;
