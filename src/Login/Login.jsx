import React, { use } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import google from "../assets/google.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
 // const token = localStorage.getItem("token");

  // useEffect(() => {
  //   if (token) {
  //     navigate("/");
  //   } else {
  //     navigate("/login");
  //   }
  // }, [token, navigate]);

  useEffect(()=>{
     const urlParams = new URLSearchParams(window.location.search);
     const token = urlParams.get("token");

    axios
        .get("https://hiring.reachinbox.xyz/api/v1/onebox", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          navigate("/");
        })
        .catch(() => {
          
          navigate("/login");
          
        });
  },[navigate]);

  const handleGoogleLogin = () => {
    window.location.href =
      "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:5173/";
  };
  return (
    <div>
      <Header />
      <div className="bg-black text-white flex flex-col justify-center items-center w-screen h-screen ">
        <div className="bg-[#111214]  border border-[#343A40] text-center py-5 sm:space-y-10 sm:px-20 rounded-lg">
          <div className="">
            <div className="text-2xl  font-medium  mt-6">
              Create a new account
            </div>
            <button
              className="mt-6 border-white/40 border  px-10 mr-4 sm:px-28 py-3 text-sm font-normal  flex items-center text-[#CCCCCC] rounded-md cursor-pointer mb-14"
              onClick={handleGoogleLogin}
            >
              <img src={google} alt="google" className="w-5 mr-3"></img>
              Sign Up with Google
            </button>
          </div>

          <div className="mt-6">
            <Link
              to="/login"
              className="mx-16 px-10  rounded-md cursor-pointer bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] text-md py-3"
            >
              Create an Account
            </Link>
            
            <div className="my-8 mb-10 text-[#909296]">
              Already have an account?{" "}
              <Link to="/signin" className="text-[#C1C2C5]">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
