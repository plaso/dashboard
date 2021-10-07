import { NavLink } from "react-router-dom";
import { logout } from "stores/AccessTokenStore";
import "./Menu.scss";

const Menu = ({ title }: { title: string }) => {
  return (
    <aside className="Menu">
      <div className="Menu__title">{title}</div>

      <div className="Menu__actions">
        <NavLink
          className="Menu__actions__link"
          activeClassName="Menu__actions__link--active"
          exact
          to="/dashboard"
        >
          Dashboard
        </NavLink>
        <NavLink
          className="Menu__actions__link"
          activeClassName="Menu__actions__link--active"
          to="/dashboard/profile"
        >
          Profile
        </NavLink>
        <button className="Menu__actions__link" onClick={logout}>
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Menu;
