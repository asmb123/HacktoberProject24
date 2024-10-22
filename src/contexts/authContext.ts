import { createContext } from "react";
import { Models } from "appwrite";

interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  user: Models.User<Models.Preferences> | null;
  setUser: (user: Models.User<Models.Preferences> | null) => void;
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  user: {
    $id: "",
    $createdAt: "",
    $updatedAt: "",
    name: "",
    registration: "",
    status: false,
    labels: [],
    passwordUpdate: "",
    email: "",
    phone: "",
    emailVerification: false,
    phoneVerification: false,
    mfa: false,
    prefs: {},
    targets: [],
    accessedAt: "",
  },
  setUser: () => {},
});

export const AuthProvider = AuthContext.Provider;

export default AuthContext;
