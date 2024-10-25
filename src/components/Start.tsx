"use client"
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TextField, Button, Typography, Box } from '@mui/material';

const Start = () => {
    const { isLoggedIn } = useAuth();
    const router = useRouter();

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        goalAmount: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? e.target.files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    useEffect(() => {
        const checkSession = async () => {
            if (!isLoggedIn) {
                router.push('/login');
            }
        }
        checkSession();
    }, [isLoggedIn, router]);

    return (
        <Box 
          component="form" 
          onSubmit={handleSubmit} 
          sx={{ maxWidth: '100%', p: 4 }} 
          className="bg-white shadow-lg rounded-lg md:max-w-lg mx-auto"
        >
          <Typography variant="h5" gutterBottom className="text-redbg">
            Create Your Fundraiser
          </Typography>
    
          <TextField
            label="Title"
            name="title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.title}
            onChange={handleChange}
            required
            className="bg-lightredbg"
          />
    
          <TextField
            label="Description"
            name="description"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={formData.description}
            onChange={handleChange}
            required
            className="bg-lightredbg"
          />
    
          <TextField
            label="Goal Amount"
            name="goalAmount"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
            value={formData.goalAmount}
            onChange={handleChange}
            required
            className="bg-lightredbg"
          />
    
          <Button
            variant="contained"
            component="label"
            fullWidth
            className="bg-lightredbg text-white mt-2"
          >
            Upload Image
            <input
              type="file"
              name="image"
              accept="image/*"
              hidden
              onChange={handleChange}
            />
          </Button>
    
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="bg-lightredbg text-white mt-3"
          >
            Submit Fundraiser
          </Button>
        </Box>
    );
};

export default Start;
