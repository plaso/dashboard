import { Link } from "react-router-dom";
import "./Button.scss";

interface ButtonProps {
  children: string;
  action?: string | (() => void);
}

const Button = ({ children, action }: ButtonProps) => {
  if (typeof action === "string") {
    return (
      <Link to={action} className="Button">
        {children}
      </Link>
    );
  }

  return (
    <button onClick={action} className="Button">
      {children}
    </button>
  );
};

export default Button;
