import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import db from "../../firebase";
import Category from "../../Components/Category/Category";
const Profile = ({about,setAbout}) => {
  const [data,setnewData]=useState([])
 const history  = useNavigate();
  useEffect(()=>{
    //alert(about.email)
    let username=localStorage.getItem("RName")
    let useremail=localStorage.getItem("email")
   
    setAbout({ "name":username,
    "email":useremail})
    async function ofetch() {
      if (about.email !== "undefined") {
        let new_email = about.email.split("@")[0];
        db.ref("users/" + new_email + "/tools/").on(
          "child_added",
          function (snapshot) {
            const messages = snapshot.val();
            //console.log(messages)
            setnewData((data) => [...data, messages]);
          }
        );
      }
    }
    ofetch();
   alert(data)
  },[])

  return (
    <>
      <div className="py-16">
        <div className="p-8 bg-white shadow shadow-xl mt-24">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="grid grid-cols-3 my-3 sm:grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              <div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    history("/profile/landTools");
                  }}
                  class="text-white my-3 mx-1 py-2 px-1 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-small transition transform hover:-translate-y-0.5"
                >
                  {" "}
                  Lend Tools
                </button>
              </div>{" "}
              <div>
                {" "}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    history("/profile/lendland");
                  }}
                  class="text-white my-3 mx-1 py-2 px-1 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-small transition transform hover:-translate-y-0.5"
                >
                  {" "}
                  Lend Land
                </button>
              </div>{" "}
              <div>
                {" "}
                <button className="text-white my-3 mx-2 py-2 px-1 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-small transition transform hover:-translate-y-0.5">
                  {" "}
                  Lend Land
                </button>
              </div>{" "}
              <div>
                {" "}
                <button className="text-white my-3 mx-2 py-2 px-1 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-small transition transform hover:-translate-y-0.5">
                  {" "}
                  Settings
                </button>
              </div>{" "}
            </div>{" "}
            <div className="relative">
              {" "}
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>{" "}
            </div>{" "}
            <div class="space-x-10 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button class="text-white h-min py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-small transition transform hover:-translate-y-0.5">
                Rented Tools
              </button>
              <button class="text-white  h-min py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-small transition transform hover:-translate-y-0.5">
                Cart
              </button>{" "}
            </div>{" "}
          </div>{" "}
          <div className="mt-20 text-center border-b pb-12">
            {" "}

            <h1 class="text-4xl font-small text-gray-700">
              {about.name}, <span class="font-light text-gray-500">27</span>
            </h1>{" "}
            <p class="font-light text-gray-600 mt-3">{about.email}</p>{" "}
            <p class="mt-8 text-gray-500 bg-mid border rounded-md">
              Your Equipments
            </p>
          </div>{" "}

        </div>
      </div>
    </>
  );
};

export default Profile;
