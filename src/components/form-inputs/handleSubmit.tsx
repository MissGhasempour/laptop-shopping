'use client'
import React from "react"
import { useActionState, useState } from "react"
import { signUpFormSchema } from "@/app/lib/form-inputs/zod/actions"
import { ValidatedInput } from "./validatedInput"
import { signUp } from "@/app/lib/form-inputs/zod/actions"
import { useRouter } from "next/navigation"
//import {SignUpActionState} from '../formInputs/zod/actions'
export default function SignUpForm() {
  const [wasSubmitted, setWasSubmitted] = useState(false)

  const [state, action, isPending] = useActionState(signUp, {})

  const router = useRouter()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setWasSubmitted(true)
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)
    console.log(data, formData);
    const prevState = {
      username  : data.username,
      password  : data.password,
      form: {
        username: data.username,
        email: data.email,
        password: data.password
      },
      errors: {
        username: data.username,
        email: data.email,
        password: data.password
      }

    }
    signUp(prevState, data)
    const validationResult = signUpFormSchema.safeParse(data)
    if (!validationResult.success) {
      event.preventDefault()
      //router.push('/pages/profile/dashboard')
    }
    // else{
    //     router.push('/')
    // }

  }

  return (
    <form onSubmit={handleSubmit} action={action} noValidate>
      <div>
        <label htmlFor="email">Email:</label>
        <ValidatedInput
          type="email"
          name="email"
          wasSubmitted={wasSubmitted}
          fieldSchema={signUpFormSchema.shape["email"]}
          defaultValue={state.form?.email}
          errors={state.errors?.email}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <ValidatedInput
          type="password"
          name="password"
          fieldSchema={signUpFormSchema.shape["password"]}
          wasSubmitted={wasSubmitted}
          defaultValue={state.form?.password}
          errors={state.errors?.password}
        />
      </div>
      <div>
        <button type="submit" disabled={isPending}>
          Continue
        </button>
      </div>
    </form>
  )
}