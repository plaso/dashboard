import { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import useQuery from "hooks/useQuery";
import BeatLoader from "react-spinners/BeatLoader";
import { login } from "services/AuthService";
import { setAccessToken } from "stores/AccessTokenStore";
import "./SignInGateway.scss";
import { decode } from "features/userSlice";

const SignInGateway = () => {
  const { push } = useHistory();
  const dispatch = useDispatch();

  const query = useQuery();
  const code = query.get("code");

  const loginFn = useCallback(async () => {
    if (code) {
      const { access_token } = await login(code);
      setAccessToken(access_token);
      dispatch(decode(access_token));
      push("/dashboard");
    }
  }, [code, push, dispatch]);

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
