import { Redirect, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import SignIn from "components/SignIn";
import Dashboard from "components/Dashboard";
import SignInGateway from "components/SignInGateway";
import { decode } from "features/userSlice";
import { useEffect } from "react";
import { getAccessToken } from "stores/AccessTokenStore";
import { PrivateRoute, PublicRoute } from "components/common/Guards/Guards";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (getAccessToken()) {
      dispatch(decode(getAccessToken()));
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PublicRoute exact path="/" component={SignIn} />
        <PublicRoute exact path="/auth" component={SignInGateway} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
