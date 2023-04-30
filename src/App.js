// import logo from './logo.svg';
  
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Register from './Register';
import Login from './Login';
import User from './User';
import Protected from './Protected';
import { useEffect, useState } from 'react';

function App() {
  const token = localStorage.getItem('token')
  const [isLoggedIn, setIsLoggedIn] = useState(null)
  useEffect(() => {
    if (token) {
      setIsLoggedIn(token)
    }
  }, [isLoggedIn])
  
  //console.log('isLoggedIn ===>>> ', isLoggedIn)
  return (
    <>
    <Router>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route 
          path='/user' 
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <User/>
            </Protected>} 
        />
      </Routes>
    </Router>  
            </>
  );
}

export default App;
