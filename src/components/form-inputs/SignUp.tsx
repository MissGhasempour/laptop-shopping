"use client";
import React from "react";
import { useActionState } from "react";
import { signUp } from "@/lib/form-inputs/zod/actions";
import { useRouter } from "next/navigation";
import ProfileInfo from "@/components/profile/dashboard/profileInfo";
import { actions } from "@/lib/form-inputs/zod/actions";
export default function SignUp() {
  const [state, action] = useActionState(signUp, {});
  const router = useRouter();
  //console.log(state);
  //console.log(actions);
  const profileInfo = <ProfileInfo state={state} />;
  return (
    <form
      action={() => {
        try{
          router.push("/pages/profile/dashboard");
        }catch(err) {
          console.log(err)
        }
       
      }}
    >
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          defaultValue={state.username}
          className="border"
          required
        />
        {state.errors?.username && (
          <p className="text-sm text-red-500">{state.errors.username}</p>
        )}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          className="border"
          defaultValue={state.password}
        />
        {state.errors?.password && (
          <p className="text-sm text-red-500">{state.errors.password}</p>
        )}
      </div>
      <input type="submit" value="Sign Up" className="border" />
  
    </form>
  );
}
