import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Menu from "components/common/Menu";
import { selectUser } from "features/userSlice";
import Info from "./Info";
import Settings from "./Settings";
import "./Dashboard.scss";

const Dashboard = () => {
  const user = useSelector(selectUser);

  return (
    <div className="Dashboard">
      <Menu />
      <div className="Dashboard__content">
        <div className="Dashboard__content__userInfo">
          <div className="Dashboard__content__userInfo__name">
            {user.displayName}
          </div>
          <div className="Dashboard__content__userInfo__role">Admin</div>
        </div>

        <div className="Dashboard__content__section">
          <div className="Dashboard__content__section__title">
            Secret dashboard
          </div>

          <div className="Dashboard__content__section__body">
            <Switch>
              <Route exact path="/dashboard" component={Info} />
              <Route exact path="/dashboard/settings" component={Settings} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
