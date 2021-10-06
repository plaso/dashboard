import { Link } from "react-router-dom";
import { logout } from "stores/AccessTokenStore";
import "./Menu.scss";

const Menu = () => {
  return (
    <aside className="Menu">
      <div className="Menu__title">Dashboard</div>

      <div className="Menu__actions">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard/settings">Settings</Link>
        <button onClick={logout}>Logout</button>
      </div>
    </aside>
  );
};

export default Menu;
