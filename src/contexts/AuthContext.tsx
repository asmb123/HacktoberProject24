import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { account } from "../appwrite/config";
import { Models } from "appwrite";

// Define the structure of the AuthContext
interface AuthContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: (value: boolean) => void;
    user: Models.User<Models.Preferences> | null;
    setUser: (user: Models.User<Models.Preferences> | null) => void;
}

// Initial context with dummy functions and null user
const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    setIsLoggedIn: () => { },
    user: null,
    setUser: () => { },
});

// Hook to access the AuthContext
export const useAuth = () => useContext(AuthContext);

// Define the type for the children prop of AuthProvider
interface AuthProviderProps {
    children: ReactNode; // Properly typing 'children' to accept JSX
}

// The AuthProvider component
export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Fetch the current logged-in user from Appwrite on initial load
        const fetchUser = async () => {
            try {
                const user = await account.get(); // Fetch user data
                setUser(user);                    // Set the user data
                setIsLoggedIn(true);              // Set the logged-in state
            } catch (error) {
                console.error("Failed to fetch user:", error);
                setUser(null);
                setIsLoggedIn(false);
            }
        };

        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
