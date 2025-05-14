'use client'
import React from "react";
import ProfileInfo from "./profileInfo";
import { useActionState } from "react";
import { signUp } from "@/lib/form-inputs/zod/actions";
export default function Page () {
    const [state, action] = useActionState(signUp, {});
    const id = 'name'
    return <div>
        <ProfileInfo state={state} />
    </div>
}