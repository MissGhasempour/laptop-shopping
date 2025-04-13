"use client";
import React from "react";
import Submit from "../form-validation/submit";
import SignUp from "../form-inputs/SignUp";
// import { Form, useSubmit } from "react-router-dom";
export default function Profile() {
  // const submit = useSubmit();
  return (
    <div>
      {/* <Submit /> */}
      {/* <Form onChange={(event) => submit(event.currentTarget)} /> */}
      <SignUp />
    </div>
  );
}
