import { InputHTMLAttributes } from "react";
import "./Input.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

const Input = ({ id, type, value, name, onChange, label }: InputProps) => {
  return (
    <div className="Input">
      <label htmlFor={id}>{label}</label>

      <input type={type} value={value} name={name} onChange={onChange} />
    </div>
  );
};

export default Input;