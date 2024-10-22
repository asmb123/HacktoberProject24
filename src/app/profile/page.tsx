"use client"
import React from 'react'
import { account } from '@/appwrite/config'

const page = () => {

    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
            <button onClick={() => {
                account.deleteSession("current")
            }}>
                Logout
            </button>
        </div>
    )
}

export default page
