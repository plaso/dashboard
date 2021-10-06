import Menu from 'components/common/Menu';
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Menu />
      <div className="Dashboard__content">
        <div className="Dashboard__content__userInfo">
          <div className="Dashboard__content__userInfo__name">Martin Dunn</div>
          <div className="Dashboard__content__userInfo__role">Admin</div>
        </div>

        <div className="Dashboard__content__section">
          <div className="Dashboard__content__section__title">
            Secret dashboard
          </div>

          <div className="Dashboard__content__section__body">
            body
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;