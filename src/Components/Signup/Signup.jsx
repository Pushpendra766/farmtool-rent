import React, { useState } from "react";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const handleSubmit = async () => {
    if (email && password && confirmPassword && password === confirmPassword) {
      await addDoc(collection(db, "credentials"), {
        email: email,
        password: password,
      });
    }
    setEmail("");
    setPassword("");
    console.log("Email : ", email);
    console.log("Password : ", password);
    console.log("Confirm Password : ", confirmPassword);
  };
  return (
    <div className="pt-32 pb-20 bg-[#feffeb]">
      <div className="py-6 px-10 xl:w-4/12 lg:w-6/12 md:w-7/12 w-10/12 mx-auto border-2 border-[#1a4d2d] rounded-md gap-4 flex flex-col bg-gradient-to-b from-[#AFF1DA] to-[#F9EA8F]">
        <h2 className="text-center text-xl font-semibold">Signup</h2>
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
          onClick={handleSubmit}
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
