import React, { useState } from "react";
import db from "../../firebase";
//import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router";
//import bcrypt  from "bcryptjs"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = ({handleAuthentication}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (email && password && confirmPassword && password === confirmPassword) {
      let new_email=email.split("@")[0]
      let flag=0;
      db.ref("users/"+ new_email).on("value", async (snapn) => {
        console.log("shivam")
        if (!flag&&snapn.exists()) {
          if(!flag)
          toast.warning("Username is already exist")
          return;
        }
        else {
          flag=1;
          //let hpass= bcrypt.hashSync(password,8)
          let hpass=password
          await db.ref("users/"+new_email + "/details/").set({
            "email": new_email,
            "name": name,
            "password": hpass,
          })
          localStorage.setItem("RLog", "yes");
          localStorage.setItem("RName", name);
          localStorage.setItem("email", email);
          localStorage.setItem("signed",true);
      setEmail("");
      setPassword("");
      setName("");
      // console.log("Email : ", email);
      // console.log("Password : ", password);
      // console.log("Confirm Password : ", confirmPassword);
      handleAuthentication(true);
      
     // toast.success("Sign Up is successfull")
     // navigate("/")
      return
    }
  })

    }
    else {
      toast("Enter valid credentials")
    }
    
}
  return (
    <div className="pt-32 pb-20 bg-[#feffeb]">
      <div className="py-6 px-10 xl:w-4/12 lg:w-6/12 md:w-7/12 w-10/12 mx-auto border-2 border-[#1a4d2d] rounded-md gap-4 flex flex-col bg-gradient-to-b from-[#AFF1DA] to-[#F9EA8F]">
        <h2 className="text-center text-xl font-semibold">Signup</h2>
        {handleAuthentication&&<ToastContainer/>}
        <div>
          
        <label>Full name : </label>
          <input
            type="text"
            className="border rounded-md w-full px-2 py-1 bg-[#feffeb] border-[#1a4d2d]"
            placeholder="Full name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
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
          <label>Create Password : </label>
          <input
            type="password"
            className="border rounded-md w-full px-2 py-1 bg-[#feffeb] border-[#1a4d2d]"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <div className="py-2"></div>
          <input
            type="password"
            className="border rounded-md w-full px-2 py-1 bg-[#feffeb] border-[#1a4d2d]"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <button
          className="hover:scale-100 hover:bg-gradient-to-r hover:from-[#fa3c16] hover:to-[#ed8f07] py-2"
          onClick={(e)=>handleSubmit(e)}
        >
          Create account
        </button>
        <p className="text-center">Or</p>
        <button
          className="hover:scale-100 hover:bg-gradient-to-r hover:from-[#fa3c16] hover:to-[#ed8f07] py-2"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Signup;
