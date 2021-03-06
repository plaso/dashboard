import Button from "components/common/Button";
import InfoItem from "components/common/InfoItem";
import { selectInfo } from "features/infoSlice";
import { useSelector } from "react-redux";
import "./Info.scss";

const Info = () => {
  const { info } = useSelector(selectInfo);

  return (
    <div className="Info">
      <div className="Info__data">
        {(info.followers || info.followers === 0) && (
          <InfoItem data={info.followers} title="Followers" />
        )}
        {(info.following || info.following === 0) && (
          <InfoItem data={info.following} title="Following" />
        )}
        {(info.public_repos || info.public_repos === 0) && (
          <InfoItem data={info.public_repos} title="Repositories" />
        )}
        {(info.public_gists || info.public_gists === 0) && (
          <InfoItem data={info.public_gists} title="Gists" />
        )}
      </div>

      <p>
        <strong>Quick links:</strong>
      </p>

      <ul>
        <li>
          <a href={info.html_url} target="_blank" rel="noreferrer">
            Profile
          </a>
        </li>
        <li>
          <a
            href={`${info.html_url}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
          >
            Repositories
          </a>
        </li>
      </ul>

      <p>
        <strong>Latest repositories:</strong>
      </p>
      <div className="Info__repos">
        {info.repos?.map((repo) => (
          <div className="Info__repos__item" key={repo.id}>
            <p>{repo.name}</p>
            <Button action={repo.html_url}>See on Github</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
