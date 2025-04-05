'use client'
import { useRouter } from 'next/router'
import React, { ChangeEventHandler, useState } from 'react'
import { FormEvent } from 'react'
import ProfileInfo from '../../profile/profileInfo';

export default function Submit() {
    const [id, setId] = useState('name')
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
   // event.preventDefault()
    const router = useRouter();
    router.push('/pages/profile')
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })
 
    // Handle response if necessary
    const data = await response.json()
    console.log(data);
    // ...

  }
  const profileInfo = <ProfileInfo id={id} />
  const nameInput: React.ChangeEventHandler<HTMLInputElement> = (e ) => {
    console.log(e)
    setId(e.target.value)
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" className='border rounded m-4 block' id={id} onChange={nameInput} />
      <button type="submit" className='bg-blue-700 text-zinc-100 p-2 w-25 rounded m-4 mx-16'>Submit</button>
    </form>
  )
}