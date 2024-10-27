"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { account } from "../appwrite/config";
import { useRouter } from "next/navigation";
import Loading from "./Loading";
import { Container, Box, Typography, Button } from "@mui/material";

const Profile = () => {
    const router = useRouter();
    const { user, setUser, setIsLoggedIn } = useAuth();
    const [loading, setLoading] = useState(true);

    const deleteSession = async () => {
        try {
            await account.deleteSession('current');
            setIsLoggedIn(false);
            setUser(null);
            router.push('/pages/login');
        } catch (error) {
            console.error('Failed to delete session:', error);
        }
    };

        useEffect(() => {
        const checkSession = async () => {
            setLoading(true);
            try {
                const session = await account.getSession('current');
                if (session) {
                    const userDetails = await account.get();
                    setUser(userDetails);
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                    router.push('/pages/login');
                }
            } catch (error) {
                console.error('No active session:', error);
                setIsLoggedIn(false);
                router.push('/pages/login');
            } finally {
                setLoading(false);
            }
        };

        if (!user) {
            checkSession();
        } else {
            setLoading(false); // User is already logged in
        }
    }, [user, router, setIsLoggedIn, setUser]);

    if (loading) {
        return <Loading />;
    }

    return (
        <Container maxWidth="sm" sx={{ mt: 5, px: 3 }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 4,
                    borderRadius: 2,
                    boxShadow: 3,
                    textAlign: "center",
                    bgcolor: "background.paper",
                    backgroundColor: '#f8d7da',
                }}
                className="bg-lightredbg"
            >
                {user?.email ? (
                    <>
                        <Typography
                            variant="h4"
                            component="h1"
                            gutterBottom
                            sx={{
                                bgcolor: '#c71550',
                                color: "#ffffff",
                                p: 2,
                                borderRadius: 3,
                                mb: 3,
                                mt: 2,
                                fontWeight: "bold",
                            }}
                        >
                            Welcome, {user.name || 'User'}
                        </Typography>
                        <Typography
                            variant="h6"
                            color="textPrimary"
                            sx={{ mb: 1.5, fontSize: "1.5rem", fontWeight: 500 }}
                        >
                            Username: {user.name || 'No username available'}
                        </Typography>
                        <Typography
                            variant="h6"
                            color="textPrimary"
                            sx={{ mb: 3, fontSize: "1.5rem", fontWeight: 500 }}
                        >
                            Email: {user.email || 'No email available'}
                        </Typography>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={deleteSession}
                            sx={{
                                mt: 2,
                                px: 5,
                                py: 1,
                                fontSize: "1rem",
                                fontWeight: "bold",
                                backgroundColor: "#9C3353",
                                "&:hover": { backgroundColor: "#c71550" },
                            }}
                        >
                            Logout
                        </Button>
                    </>
                ) : (
                    <Typography variant="h6" color="error" sx={{ mt: 5 }}>
                        You are not logged in
                    </Typography>
                )}
            </Box>
        </Container>
    );
};

export default Profile;
