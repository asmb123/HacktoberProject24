"use client"
import React from 'react'
import { account } from '@/appwrite/config'
import ProtectedRoute from '@/components/ProtectedRoute'

const page = () => {
    return (
        <ProtectedRoute>
            <div className='w-screen h-screen flex flex-col justify-center items-center'>
                Vipraasmit
                <button onClick={() => account.deleteSession("current")}>Logout</button>
            </div>
        </ProtectedRoute>

    )
}

export default page
