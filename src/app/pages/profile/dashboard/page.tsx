'use client'
import React from "react";
import ProfileInfo from "@/components/profile/dashboard/profileInfo";
import { useActionState } from "react";
import { signUp } from "@/app/lib/form-inputs/zod/actions";
export default function Page () {
    const [state, action] = useActionState(signUp, {});
    const id = 'name'
    return <div>
        <ProfileInfo state={state} />
    </div>
}