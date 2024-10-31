"use client";
import { useState } from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { Toaster, toast } from "react-hot-toast";
import { motion } from "framer-motion";

const ContactUs = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            // const response = await fetch('/api/contact', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ email, message }), // Send both email and message
            // });

            // // Check if the response is okay
            // if (!response.ok) {
            //     const errorData = await response.json();
            //     toast.error(errorData.error || 'Failed to send message. Please try again later.');
            //     setStatus('Failed to send message. Please try again later.');
            //     return;
            // }

            // const data = await response.json();
            toast.success('Thank you, we will contact you soon!');
            setStatus('Thank you for reaching out! We will contact you soon.');
            setEmail(''); // Clear the email input
            setMessage(''); // Clear the message input
        } catch (error) {
            setStatus('Failed to send message. Please try again later.');
            console.error('Failed to send message:', error);
        }
    };

    return (
        <Container
            component={motion.div}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.1 }}
            maxWidth="sm" sx={{ mt: 5, px: 3 }}>
            <Toaster />
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
                    backgroundColor: "#FBB6CC", // Light green background styling
                }}
            >
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    sx={{
                        bgcolor: "#F18EAD",
                        color: "#9C3353",
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
                            backgroundColor: "#9C3353",
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
