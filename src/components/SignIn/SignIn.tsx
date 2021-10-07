import Button from "components/common/Button";
import "./SignIn.scss";

const SignIn = () => {
  return (
    <div className="SignIn">
      <div className="SignIn__container">
        <h1 className="SignIn__container__title">GitBoard</h1>

        <p>
          Welcome to{" "}
          <em>
            <strong>GitBoard</strong>.
          </em>{" "}
        </p>

        <p>An easy way of checking some of your Github account info.</p>

        <p>Just click on the following button and check your profile.</p>

        <Button action={`${process.env.REACT_APP_API_URL}/sign-in`}>
          Sign in with Github
        </Button>
      </div>
    </div>
  );
};

export default SignIn;
