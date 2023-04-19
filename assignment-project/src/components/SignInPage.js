import SignInForm from "./SignInForm";
import { GoogleLogin } from "@react-oauth/google";
import FacebookLogin from "@greatsumini/react-facebook-login";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();
  return (
    <div className="signin-form">
      <SignInForm />
      <div style={{ textAlign: "center", marginTop: "15px" }}>(OR)</div>
      <hr />
      <div className="login-btn">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            navigate("/uploadfiles");
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        <FacebookLogin
          appId="2580552828759637"
          style={{
            backgroundColor: "#4267b2",
            color: "#fff",
            fontSize: "14px",
            padding: "12px 24px",
            border: "none",
            borderRadius: "4px",
          }}
          onSuccess={(response) => {
            navigate("/uploadfiles");
          }}
          onFail={(error) => {
            console.log("Login Failed!", error);
          }}
          onProfileSuccess={(response) => {
            console.log("Get Profile Success!", response);
          }}
        />
      </div>
    </div>
  );
};

export default SignInPage;
