import { Redirect, Route, Switch } from "react-router-dom";
import SignIn from "components/SignIn";
import Dashboard from "components/Dashboard";
import SignInGateway from "components/SignInGateway";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={SignIn} />
        <Route exact path="/auth" component={SignInGateway} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
