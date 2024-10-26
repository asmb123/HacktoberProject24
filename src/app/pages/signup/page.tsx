"use client"
import Loading from "@/components/Loading";
import { lazy, Suspense } from "react";
const Signup = lazy(() => import('@/components/Signup'));

const page = () => {
    return (
        <Suspense fallback={<Loading/>}>
            <Signup />
        </Suspense>

    )
}

export default page
