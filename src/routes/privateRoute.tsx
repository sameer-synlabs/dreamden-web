import { Navigate } from "react-router-dom";
import { getToken } from "../utils";

const PrivateRoute = ({ children }: any) => {
  const token = getToken();

  if (!token) {
    return <Navigate to="/auth" />;
  }

  return children;
};

export default PrivateRoute;
