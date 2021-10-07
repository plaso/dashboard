import { selectInfo } from "features/infoSlice";
import { selectUser } from "features/userSlice";
import { useSelector } from "react-redux";
import "./Settings.scss";

const Settings = () => {
  const { info } = useSelector(selectInfo);
  const user = useSelector(selectUser);

  return (
    <div className="Settings">
      {info.avatar_url && (
        <div className="Settings__avatar">
          <img src={info.avatar_url} alt="profile" />
        </div>
      )}
      <h1>{user.displayName}</h1>
      <p>{user.userName}</p>
    </div>
  );
};

export default Settings;
