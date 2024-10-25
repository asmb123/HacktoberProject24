"use client"
import { lazy, Suspense } from "react";
const Login = lazy(() => import('@/components/Login'));

const page = () => {
    return (
        <Suspense fallback={<div>...Loading</div>}>
            <Login />
        </Suspense>

    )
}

export default page
