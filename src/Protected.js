import { Navigate } from "react-router-dom";
const Protected = ({ isLoggedIn, children }) => {
  if (!localStorage.getItem('token')) {
    ///console.log('ici le test pour savoir si protegé')
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default Protected;