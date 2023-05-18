/* eslint-disable no-unused-vars */
import  { useContext } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const { googleSignIn, githubSignIn } = useContext(AuthContext); // Login with google
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <>
      <div className="flex flex-col my-5 gap-5">
        <button
          onClick={handleGoogleLogin}
          type="button"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
        >
          Google
        </button>
      
      </div>
    </>
  );
};

export default SocialLogin;
