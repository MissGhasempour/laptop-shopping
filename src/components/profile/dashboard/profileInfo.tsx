import React from "react";

export default function ProfileInfo({ state }: { state: {} }) {
  const fillObject = JSON.stringify(state);
  console.log(state);
  return (
    <div>
      <h1>profile info : {fillObject} </h1>
    </div>
  );
}
