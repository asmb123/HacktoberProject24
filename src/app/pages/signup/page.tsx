"use client"
import { lazy, Suspense } from "react";
const Signup = lazy(() => import('@/components/Signup'));

const page = () => {
    return (
        <Suspense fallback={<div>...Loading</div>}>
            <Signup />
        </Suspense>

    )
}

export default page
