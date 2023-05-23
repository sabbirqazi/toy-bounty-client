/* eslint-disable no-unused-vars */
import { FcGoogle } from "react-icons/fc";
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
      <div className="flex flex-col my-5 gap-5 justify-center items-center">
       
      <button className="text-center">
      <FcGoogle className="h-10 w-10" onClick={handleGoogleLogin}></FcGoogle>
      </button>
      
      </div>
    </>
  );
};

export default SocialLogin;
