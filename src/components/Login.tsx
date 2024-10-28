import { account } from "@/appwrite/config";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { OAuthProvider, Models } from "appwrite";
import { toast, Toaster } from "react-hot-toast";
// import useAuth from "@/contexts/useAuth";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import { motion } from "framer-motion";


export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setIsLoggedIn, setUser, isLoggedIn } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            await account.createEmailPasswordSession(email, password);
            // Fetch the user data and set it in context
            const user: Models.User<Models.Preferences> = await account.get();
            setUser(user);
            console.log(user);
            setIsLoggedIn(true);
            toast("success");
            router.push('/pages/profile');
        } catch (error) {
            console.log(error);
        }
    };
    const handleGoogle = () => {
        account.createOAuth2Session(
            OAuthProvider.Google, // provider
            `${process.env.NEXT_PUBLIC_FRONTEND}pages/profile`, // redirect here on success
            `${process.env.NEXT_PUBLIC_FRONTEND}pages/login`, // redirect here on failure
        );
    }

    useEffect(() => {
        if (isLoggedIn) {
            router.push('/pages/profile');
        }
    })

    return (
        <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.1 }}
        >
            <Toaster />
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a
                    href="#"
                    className="flex items-center mb-6 text-2xl font-semibold text-black dark:text-white"
                ></a>
                <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-lightredbg">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl ">
                            Log in to your account
                        </h1>
                        <form
                            className="space-y-4 md:space-y-6 flex flex-col justify-center align-middle"
                            onSubmit={handleSubmit}
                        >

                            <div>
                                <TextField required
                                    className="w-full"
                                    id="filled-basic"
                                    label="Email"
                                    variant="filled"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                            </div>
                            <div>

                                <TextField
                                    required
                                    className="w-full"
                                    id="filled-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="filled"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}

                                />
                            </div>

                            <Button
                                type="submit"
                                className=" font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-white bg-redbg"
                            >
                                Login
                            </Button>
                        </form>
                        <h1 className="font-semibold text-center">or</h1>
                        <div className="flex items-center justify-center   ">
                            <button onClick={handleGoogle} className="flex gap-2 items-center  dark:bg-gray-900 border hover:bg-white hover:text-black rounded-lg shadow-md px-6 py-2 text-sm font-medium  dark:text-white  focus:outline-none  ">
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
                                <span>Continue with Google</span>

                            </button>
                        </div>
                        <p className="text-sm font-light text-center text-black">
                            <Link className="hover:underline" href={'/pages/signup'}>Don&apos;t have an account yet?</Link>
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
