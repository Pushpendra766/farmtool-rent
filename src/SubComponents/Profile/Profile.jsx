import React, { useEffect, useState } from "react";
import db from "../../firebase";
const Profile = ({about}) => {
  

  useEffect(()=>{
  //   async function ofetch() {
      
  //     db.ref("users/").on("child_added", function (snapshot) {
  //       const messages = snapshot.val();
  //       // console.log(messages)
  //       setnewData((data) => [...data, messages]);
  //     });
  //   }
  //  // ofetch();
  //  console.log(about)
  },[])
  return (
    <>
      <div class="py-16">
        <div class="p-8 bg-white shadow mt-24">
          {" "}
          <div class="grid grid-cols-1 md:grid-cols-3">
            <div class="grid grid-cols-3 my-3 sm:grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              <div>
              <button class="text-white my-3 mx-1 py-2 px-1 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-small transition transform hover:-translate-y-0.5">
                {" "}
                Lend Tools
              </button>
              </div>{" "}
              <div>
                {" "}
                <button class="text-white my-3 mx-1 py-2 px-1 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-small transition transform hover:-translate-y-0.5">
                {" "}
                Lend Land
              </button>
              </div>{" "}
              <div>
                {" "}
                <button class="text-white my-3 mx-1 py-2 px-1 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-small transition transform hover:-translate-y-0.5">
                {" "}
                Settings
              </button>
              </div>{" "}
            </div>{" "}
            <div class="relative">
              {" "}
              <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-24 w-24"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {" "}
                  
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
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
          <div class="mt-20 text-center border-b pb-12">
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
