
import React, { useEffect} from "react";
import db from "../firebase";
import {data} from "../data"
import { async } from "@firebase/util";
const FirebaseData = () => {
    useEffect(()=>{
      //  console.log(data)
      //    async function fetchData(){

      //        data.forEach(async (item, index)=>{
      //            await db.ref("users/"+"shivam/"+"tools/"+index).set({
      //               "type": item.type,
      //               "url": item.url,
      //               "name": item.name,
      //               "price":item.price,
      //               "description":item.description,
      //                "lender":"shivam"
      //             })
      //       })
      //    }
      //   fetchData()
        
     },[])
    

  return (
    <>
   
    </>
  );
};

export default FirebaseData;