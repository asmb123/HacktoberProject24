"use client"
import { lazy, Suspense } from "react";
// import { account } from "@/appwrite/config";
const Login = lazy(() => import('@/components/Login'));

const page = () => {


  return (
    <Suspense fallback={<div>...Loading</div>}>
      <Login/>
    </Suspense>

  )
}

export default page
