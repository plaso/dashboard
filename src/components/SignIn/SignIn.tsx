import Button from "components/common/Button";
import Input from "components/common/Input";
import "./SignIn.scss";

const SignIn = () => {
  return (
    <div className="SignIn">
      <div className="SignIn__container">
        <h1 className="SignIn__container__title">Sign In</h1>

        <form className="SignIn__container__form">
          <Input id="email" label="Email" />
          <Input id="password" label="Password" />

          <Button>Sign In</Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
