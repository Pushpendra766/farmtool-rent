import React, { useState } from "react";
import db from "../../firebase";
import { ToastContainer, toast ,Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router";
//import bcrypt  from "bcryptjs"
const Login = ({handleAuthentication,setAbout}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault()
    let new_email=email.split("@")[0]
    db.ref("users/" + new_email + "/details").on("value", snapshot => {

      if (!snapshot.exists() || !snapshot.val().name || !snapshot.val().password) {
        toast("Entered email and password are incorrect ")
      }
     let fireemail = snapshot.val().email
     let fireuser = snapshot.val().name
     let firepass = snapshot.val().password
     
      //let bpass=bcrypt.compareSync(password, firepass); 
      if (new_email != fireemail ||
        firepass!=password)
       toast.warning("Entered email or password are incorrect ");
      else {
       
        localStorage.setItem("RLog", "yes");
        localStorage.setItem("RName", fireuser);
        localStorage.setItem("email", email);
        localStorage.setItem("logged", true);
       // toast.success("Successfully logged in...")
       
      setEmail("");
      setPassword("");
      handleAuthentication(true);
      
  };
})}
  return (
    <div className="pt-32 pb-20 bg-[#feffeb]">
      <div className="py-6 px-10 xl:w-4/12 lg:w-6/12 md:w-7/12 w-10/12 mx-auto border-2 border-[#1a4d2d] rounded-md gap-4 flex flex-col bg-gradient-to-b from-[#AFF1DA] to-[#F9EA8F]">
        <h2 className="text-center text-xl font-semibold">Login</h2>
       
        <div>

          <label>Email : </label>
          <input
            type="email"
            className="border rounded-md w-full px-2 py-1 bg-[#feffeb] border-[#1a4d2d]"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>

        <div>
          <label>Password : </label>
          <input
            type="password"
            className="border rounded-md w-full px-2 py-1 bg-[#feffeb] border-[#1a4d2d]"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <button
          className="hover:scale-100 hover:bg-gradient-to-r hover:from-[#fa3c16] hover:to-[#ed8f07] py-2"
          onClick={(e)=>handleLogin(e)}
        >
          Login
        </button>
        <p className="text-center">Or</p>
        <button
          className="hover:scale-100 hover:bg-gradient-to-r hover:from-[#fa3c16] hover:to-[#ed8f07] py-2"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Create new account
        </button>
        {handleAuthentication&&<ToastContainer transition={Slide} />}
      </div>
    </div>
  );
};

export default Login;
