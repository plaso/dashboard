import useQuery from "hooks/useQuery";
import { useCallback, useEffect } from "react";
import jwt from "jsonwebtoken";
import BeatLoader from "react-spinners/BeatLoader";
import { login } from "services/AuthService";
import "./SignInGateway.scss";

const SignInGateway = () => {
  const query = useQuery();
  const code = query.get("code");

  const loginFn = useCallback(async () => {
    if (code) {
      const result = await login(code);
      const decoded = jwt.decode(result.access_token, { complete: true });
      console.log(decoded?.payload._doc);
      debugger;
    }
  }, [code]);

  useEffect(() => {
    loginFn();
  }, [loginFn]);

  return (
    <div className="SignInGateway">
      <BeatLoader size={15} color="#f7b500" />
    </div>
  );
};

export default SignInGateway;
