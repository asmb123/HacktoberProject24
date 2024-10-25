"use client";
import { useState } from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";

const ContactUs = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Replace with actual email-sending function
        try {
            // Send email using your backend or Appwrite function here
            setStatus('Thank you for reaching out! We will contact you soon.');
        } catch (error) {
            setStatus('Failed to send message. Please try again later.');
            console.error('Failed to send message:', error);
        }
    };

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
                    backgroundColor: "#f1f8e9", // Light green background styling
                }}
            >
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    sx={{
                        bgcolor: "#c5e1a5",
                        color: "#33691e",
                        p: 2,
                        borderRadius: 1,
                        mb: 3,
                        fontWeight: "bold",
                    }}
                >
                    Contact Us
                </Typography>
                
                {/* Displaying Address and Contact Info */}
                <Typography
                    variant="h6"
                    color="textPrimary"
                    sx={{ mb: 3, fontSize: "1.2rem", fontWeight: 500 }}
                >
                    ScholarLift Headquarters
                </Typography>
                <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{ mb: 2 }}
                >
                    1234 Scholar Street, Knowledge City, Edu Country
                </Typography>
                <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{ mb: 3 }}
                >
                    Email: contact@scholarlift.org
                </Typography>

                {/* Contact Form */}
                <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
                    <TextField
                        label="Your Email"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{ mb: 2 }}
                        required
                    />
                    <TextField
                        label="Your Message"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        sx={{ mb: 2 }}
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        sx={{
                            mt: 2,
                            px: 5,
                            py: 1,
                            fontSize: "1rem",
                            fontWeight: "bold",
                            backgroundColor: "#558b2f",
                            "&:hover": { backgroundColor: "#33691e" },
                        }}
                    >
                        Send Message
                    </Button>
                    {status && (
                        <Typography variant="body2" color="success" sx={{ mt: 2 }}>
                            {status}
                        </Typography>
                    )}
                </Box>
            </Box>
        </Container>
    );
};

export default ContactUs;
