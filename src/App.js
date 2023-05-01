// import logo from './logo.svg';
  
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Register from './Register';
import Login from './Login';
import User from './User';
import Protected from './Protected';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/user' 
            element={
              <Protected>
                <User />
              </Protected>
            } 
          />
        </Routes>
      </Router>  
    </>
  );
}

export default App;
