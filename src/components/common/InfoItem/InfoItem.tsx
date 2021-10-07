import "./InfoItem.scss";

const InfoItem = ({
  data,
  title,
}: {
  data: string | number;
  title: string;
}) => {
  return (
    <div className="InfoItem">
      <p className="InfoItem__data">{data}</p>
      <p className="InfoItem__title">{title}</p>
    </div>
  );
};

export default InfoItem;
