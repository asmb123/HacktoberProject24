import { NextRequest, NextResponse } from "next/server";
// import useAuth from "./contexts/useAuth";
import toast from "react-hot-toast";

export async function middleware(request: NextRequest) {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const { isLoggedIn } = useAuth();
    const session = localStorage.getItem("appwriteSession");
    if (!session) {
      const response = NextResponse.redirect(new URL("/login", request.url));
      return response;
    }
    return NextResponse.next();
  } catch (error) {
    if (error instanceof Error) {
      toast.error(error.message);
    } else {
      toast.error("An unknown error occurred");
    }
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/sd"],
};
