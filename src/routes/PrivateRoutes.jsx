import { useContext } from "react";
import Loading from "../components/Loading";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const PrivateRoutes = ({ children }) => {

  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user?.email) {
    return children;
  }
  return (
    <div>
      <Navigate state={location.pathname} to={'/login'}></Navigate>
    </div>
  );
};

export default PrivateRoutes;
