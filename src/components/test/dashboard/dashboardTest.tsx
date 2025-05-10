"use server";
import { cookies } from "next/headers";
import "@/components/test/dashboard/dashboard.css";

export default async function DashboardTest() {
  const cookie = await cookies();
  const usernameParam = cookie.get("username");
  const ageParam = cookie.get("age");
  const emailParam = cookie.get("email");
  const passwordParam = cookie.get("password");

  return (
    <div className="m-4" id="container">
      <div className="text-center text-xl max-sm:text-stone-100 max-sm:text-xl max-lg:text-xl max-lg:text-left max-sm:text-left" id="back-img">
        <p className="inline-block m-4">Hello {usernameParam?.value} </p>
        <p className="m-4">{ageParam?.value} years old </p>
        <p className="m-4">{emailParam?.value} </p>
        <p className="m-4">password : {passwordParam?.value} </p>
      </div>
    </div>
  );
}
