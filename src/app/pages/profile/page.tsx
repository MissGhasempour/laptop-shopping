'use client'
import React, { useState } from "react"
import Profile from "./profile"
import ProfileInfo from "./profileInfo"
export default function Page () {
    const [id, setId] = useState('name')
    return <div>
        <Profile />
        <ProfileInfo id={id}/>
    </div>
}