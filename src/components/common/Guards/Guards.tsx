import { selectUser } from "features/userSlice";
import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";

export const PrivateRoute = (props: RouteProps) => {
  const { authenticated } = useSelector(selectUser);

  if (!authenticated) {
    return <Redirect to="/" />;
  }
  return <Route {...props} />;
};

export const PublicRoute = (props: RouteProps) => {
  const { authenticated } = useSelector(selectUser);

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...props} />;
};
