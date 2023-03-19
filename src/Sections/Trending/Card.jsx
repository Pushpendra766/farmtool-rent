import React, { useState } from "react";
import "./Card.css"
const Card = ({title,lnk,scale}) => {
  return (
   <div className={
        scale === true
          ? " z-30 rounded-3xl shadow-md shadow-[#0e7490] scale-125 mb-2"
          : "shadow-[#0e7490]  rounded-3xl shadow-md "
      }>
     
      <div className="w-full card">
            {lnk?<img src={lnk} />:<p ></p>}
            <p className="title">{title}</p>
            <p className="text"><button >RENT IT</button></p>
         
      </div>
      
   </div>
    
  );
};



export default Card;
