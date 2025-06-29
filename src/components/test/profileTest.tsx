"use client";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function ProfileTest() {
  const [usernameMessage, setUsernameMessage] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleUsername: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCookie("username", e.currentTarget.value);
    if (e.currentTarget.value.length <= 3) {
      setUsernameMessage("username characters must be more than 3 ");
    } else {
      setUsernameMessage("username is valid");
    }
  };
  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  const handleAge = (value: string) => {
    setCookie("age", value);
    if (Number(value) < 18) {
      setAge("Sorry! You do not allow to login");
    } else if (Number(value) > 90) {
      setAge("The age is not valid. Please enter a valid age");
    } else {
      setAge(`You are ${value} years old`);
    }
  };

  const handleEmail = (email: string) => {
    setCookie("email", email);
    if (
      (email.includes("@") && email.includes(".com")) ||
      email.includes(".ir") ||
      email.includes(".net")
    ) {
      setEmail("You're email is valid");
    } else {
      setEmail("You're email is not valid");
    }
  };

  const handlePassword = (password: string) => {
    setCookie("password", password);

    if (password.length > 5) {
      setPassword("You're password is strong");
    } else {
      setPassword("You're password should has atleast 6 characters");
    }
  };
  return (
    <>
      <h1 className="text-2xl max-mobile:text-purple-700 max-mobile:ml-10 text-zinc-100 font-bold  mobile:ml-40 ipad:ml-60 tablet:ml-90 laptop:ml-120 tablet:text-4xl laptop:text-4xl pt-4 max-sm:ml-10  laptop:text-purple-700 max-md:ml-45 max-lg:ml-70 max-2xl:text-zinc-100 max-2xl:ml-185 max-xl:ml-150">
        Login
      </h1>
      <form
        action="#"
        onSubmit={(e) => submit(e)}
        className="bg-zinc-100 max-mobile:ml-7 max-mobile:w-90 max-mobile:px-7   mobile:ml-40 ipad:ml-60 tablet:ml-90 laptop:ml-120 max-sm:ml-5 max-sm:w-92 max-md:ml-45 max-lg:ml-70 border-1 border-zinc-100 rounded-xl w-100 fill-white shadow-xl p-10 m-8  max-xl:ml-110 overflow-hidden 2xl:ml-10 max-2xl:ml-145"
      >
        <label htmlFor="username">Username </label>
        <br />
        <input
          type="text"
          onChange={(e) => handleUsername(e)}
          required
          className="border-2 rounded border-gray-500 hover:border-red-600  m-2  w-70 p-2 "
        />
        <br />
        <p className="mb-5">{usernameMessage} </p>
        <label htmlFor="password">Password </label>
        <br />
        <input
          type="password"
          onChange={(e) => handlePassword(e.currentTarget.value)}
          required
          className="border-2 rounded border-gray-500 hover:border-red-600  m-2 w-70 p-2 "
        />
        <br />
        <p className="mb-5">{password} </p>
        <label htmlFor="email">Email </label>
        <br />
        <input
          type="email"
          onChange={(e) => handleEmail(e.currentTarget.value)}
          required
          className="border-2 rounded border-gray-500 hover:border-red-600  m-2 w-70 p-2 "
        />
        <br />
        <p className="mb-5">{email} </p>
        <label htmlFor="age">Age </label>
        <br />
        <input
          type="number"
          onChange={(e) => handleAge(e.currentTarget.value)}
          required
          className="border-2 rounded border-gray-500 hover:border-red-600  m-2 w-70 p-2 "
        />
        <br />
        <p className="mb-5">{age} </p>
        <input
          type="submit"
          value="submit"
          className="cursor-pointer transition duration-300 ease-in-out relative  my-4 border-2 p-2 w-73 rounded-xl border-blue-700 bg-blue-700 text-zinc-100 text-xl hover:bg-zinc-100 hover:border-red-400 hover:border-2 hover:text-red-500 "
        />
      </form>
    </>
  );
}
