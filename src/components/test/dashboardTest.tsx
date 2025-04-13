'use server'
import {cookies} from 'next/headers'
import { ReactNode } from 'react';
export default async function DashboardTest () {

    const cookie = await cookies();
    const params = cookie.get('username')
    console.log(params);
    return <>
    <h1 className='inline-block'>username : </h1>
    <p className='inline-block'> {params?.value} </p>
    </>
}