"use client"
import Loading from "@/components/Loading";
import { lazy, Suspense } from "react";
const Login = lazy(() => import('@/components/Login'));

const page = () => {
    return (
        <Suspense fallback={<Loading/>}>
            <Login />
        </Suspense>

    )
}

export default page
