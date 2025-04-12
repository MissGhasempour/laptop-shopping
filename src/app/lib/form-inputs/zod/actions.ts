import {z} from 'zod'


export const signUpFormSchema = z.object({
    username: z.string(),
    email: z.string().email({ message: "Please enter a valid email." }).trim(),
    password: z
      .string()
      .min(8, { message: "Be at least 8 characters long" })
      .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
      .regex(/[0-9]/, { message: "Contain at least one number." })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Contain at least one special character."
      })
      .trim()
  })
  
  export type SignUpActionState = {
    username?: string;
    password?: string;
    form?: {
      username?: string;
      email?: string
      password?: string
    }
    errors?: {
      username?: string[];
      email?: string[]
      password?: string[]
    }
  }

  export async function signUp(
    _prevState: SignUpActionState,
    form: FormData
  ): Promise<SignUpActionState> {
    const username = form.get("username") as string;
    const password = form.get("password") as string;
  
    const validatedFields = signUpFormSchema.safeParse({
      username,
      password,
    });
  
    if (!validatedFields.success) {
      return {
        username,
        password,
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }
  
    // process validated form inputs here

    return { username, password };
  }

export const actions = signUp
  