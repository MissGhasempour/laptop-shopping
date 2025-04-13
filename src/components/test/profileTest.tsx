"use client";
import { ChangeEventHandler, FormEventHandler, MouseEventHandler, useState } from "react";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
export default function ProfileTest() {
  const [usernameMessage, setUsernameMessage] = useState("");
  const router  = useRouter();
  const handleUsername: ChangeEventHandler<HTMLInputElement> = (e) => {
    const cookies = setCookie("username" , e.currentTarget.value)
    if (e.currentTarget.value.length <= 3) {
      setUsernameMessage("username characters must be more than 3 ");
    } else {
      setUsernameMessage("username is valid");
    }
  };
  const submit:FormEventHandler = (e) => {
    e.preventDefault();
    router.push('/test/dashboard-test');
  }
  return (
    <>
      <form action="#" onSubmit={(e) => submit(e)} >
        <label htmlFor="username">Username : </label>
        <br />
        <input type="text" onChange={(e) => handleUsername(e)} />
        <br />
        <p>{usernameMessage} </p>
        <label htmlFor="password">Password :</label>
        <br />
        <input type="password" />
        <br />
        <label htmlFor="email">Email : </label>
        <input type="email" />
        <br />
        <label htmlFor="age">Age :</label>
        <br />
        <input type="number" /><br />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}
