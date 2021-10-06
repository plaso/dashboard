import "./SignIn.scss";

const SignIn = () => {
  return (
    <div className="SignIn">
      <div className="SignIn__container">
        <h1 className="SignIn__container__title">Sign In</h1>

        <a href={`${process.env.REACT_APP_API_URL}/sign-in`}>
          Sign in with Github
        </a>
      </div>
    </div>
  );
};

export default SignIn;
