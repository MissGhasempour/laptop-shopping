import React from "react";
export default function ProfileInfo ({id} : {id : string}) {
  // console.log(id)
  const name = document.getElementById(id);
  console.log(name);
   return <div>
        <h1>{} </h1>
    </div>
}