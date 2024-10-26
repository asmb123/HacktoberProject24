"use client";
import { Container, Box, Typography, Button } from "@mui/material";

const AboutUs = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 5, px: 3 }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 4,
                    borderRadius: 4,
                    boxShadow: 3,
                    textAlign: "center",
                    bgcolor: "background.paper",
                    backgroundColor: "#F18EAD",
                }}
            >
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    sx={{
                        bgcolor: "#9C3353",
                        color: "#ffffff",
                        p: 2,
                        borderRadius: 4,
                        mb: 3,
                        mt: 2,
                        fontWeight: "bold",
                    }}
                >
                    About ScholarLift
                </Typography>
                <Typography
                    variant="h6"
                    color="textPrimary"
                    sx={{ mb: 3, fontSize: "1.6rem", fontWeight: 500 }}
                >
                    ScholarLift is a dedicated crowdfunding platform focused on providing financial aid and support for students in need. Our mission is to empower education by connecting donors and students to make a difference, one scholarship at a time.
                </Typography>
                <Typography
                    variant="h6"
                    color="textPrimary"
                    sx={{ mb: 3, fontSize: "1.4rem", fontWeight: 450 }}
                >
                    We believe every student deserves an opportunity to reach their full potential. ScholarLift ensures transparent and effective ways to bridge the gap between donors and students with educational dreams.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        mt: 2,
                        px: 5,
                        py: 1,
                        fontSize: "1rem",
                        fontWeight: "bold",
                        bgcolor: "#9C3353",
                        color: "#ffffff",
                        "&:hover": { backgroundColor: "#c11d60" },
                    }}
                >
                    Learn More
                </Button>
            </Box>
        </Container>
    );
};

export default AboutUs;
