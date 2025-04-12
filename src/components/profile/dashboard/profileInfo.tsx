import React from "react";

export default function ProfileInfo ({state} : {state : {}}) {
  // console.log(id)
  // const name = document.getElementById(id);
  // console.log(name);
  const fillObject = JSON.stringify(state)
  console.log(state)
   return <div>
        <h1>profile info : {fillObject} </h1>
        {/* <HandleSubmit /> */}
    </div>
}