import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import Menu from "components/common/Menu";
import { selectUser } from "features/userSlice";
import Info from "./Info";
import Settings from "./Settings";
import "./Dashboard.scss";
import { useEffect } from "react";
import { fetchInfo, selectInfo } from "features/infoSlice";
import Button from "components/common/Button";
import { logout } from "stores/AccessTokenStore";

const Dashboard = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const info = useSelector(selectInfo);

  useEffect(() => {
    dispatch(fetchInfo());
  }, [dispatch]);

  const routeText = pathname.endsWith("/dashboard") ? "Dashboard" : "Profile";

  return (
    <div className="Dashboard">
      <Menu title={routeText} />
      <div className="Dashboard__content">
        <div className="Dashboard__content__userInfo">
          <div className="Dashboard__content__userInfo__name">
            {user.displayName}
          </div>
          <div className="Dashboard__content__userInfo__role">
            {user.userName}
          </div>
          <Button action={logout}>Logout</Button>
        </div>

        <div className="Dashboard__content__section">
          <div className="Dashboard__content__section__title">{routeText}</div>

          <div className="Dashboard__content__section__body">
            {info.isFetching || !info.isSuccess ? (
              <div className="Dashboard__content__section__body__loader">
                <BeatLoader size={15} color="#f7b500" />
              </div>
            ) : (
              <Switch>
                <Route exact path="/dashboard" component={Info} />
                <Route exact path="/dashboard/profile" component={Settings} />
              </Switch>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
