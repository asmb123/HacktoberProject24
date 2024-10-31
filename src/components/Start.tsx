"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TextField, Button, Typography, Box } from '@mui/material';
import { Databases, ID, Storage } from "appwrite";
import { account, client } from "@/appwrite/config";
import Loading from "./Loading";

const Start = () => {
  const router = useRouter();
  const storage = new Storage(client);
  const databases = new Databases(client);

  const [loading, setLoading] = useState<boolean>();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    goalAmount: '',
    image: null,
    accountNo: '',
    IFSC: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' && e.target.files ? e.target.files[0] : value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formData);

    let imageId = null;
    // Store image and get its ID
    if (formData.image) {
      try {
        const response = await storage.createFile(
          process.env.NEXT_PUBLIC_BUCKET_ID!,
          ID.unique(),
          formData.image
        );
        imageId = response.$id;
        console.log("File uploaded successfully:", response);
      } catch (error) {
        console.error("File upload failed:", error);
        return;
      }
    }

    if (formData.title && formData.description && formData.goalAmount && formData.accountNo && formData.IFSC) {
      try {
        await databases.createDocument(
          process.env.NEXT_PUBLIC_DATABASE_ID!,
          process.env.NEXT_PUBLIC_COLLECTION_ID!,
          ID.unique(),
          {
            title: formData.title,
            description: formData.description,
            goalAmount: parseFloat(formData.goalAmount),
            accountNo: formData.accountNo,
            IFSC: formData.IFSC,
            imageId: imageId,
          }
        );
        console.log("Document created successfully");
        router.push('/pages/ourstories');
      } catch (error) {
        console.error("Failed to create document:", error);
      }
    } else {
      console.log("Please fill out all required fields.");
    }
  };

  useEffect(() => {
    const checkSession = async () => {
      setLoading(true);
      try {
        await account.getSession('current');
        setLoading(false);
      } catch (error) {
        router.push('/pages/login');
        console.log(error);
      }
    };

    checkSession();
  }, [router]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: { xs: '90%', sm: '75%', md: '50%', lg: '40%' },
        padding: 4,
        bgcolor: '#F18EAD',
        boxShadow: 3,
        borderRadius: 2,
        mx: 'auto',
        mt: 5,
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ color: '#9C3353', textAlign: 'center' }}>
        Create Your Fundraiser
      </Typography>

      <TextField
        label="Title"
        name="title"
        variant="filled"
        fullWidth
        margin="normal"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <TextField
        label="Description"
        name="description"
        variant="filled"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        value={formData.description}
        onChange={handleChange}
        required
      />

      <TextField
        label="Goal Amount"
        name="goalAmount"
        variant="filled"
        fullWidth
        margin="normal"
        type="number"
        value={formData.goalAmount}
        onChange={handleChange}
        required
      />

      <TextField
        label="Account Number"
        name="accountNo"
        variant="filled"
        fullWidth
        margin="normal"
        type="number"
        value={formData.accountNo}
        onChange={handleChange}
        required
      />

      <TextField
        label="IFSC Code"
        name="IFSC"
        variant="filled"
        fullWidth
        margin="normal"
        type="text"
        value={formData.IFSC}
        onChange={handleChange}
        required
      />

      <Button
        variant="contained"
        component="label"
        fullWidth
        sx={{ mt: 2, backgroundColor: '#9C3353', color: '#FFFFFF' }}
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
        fullWidth
        sx={{ mt: 3, backgroundColor: '#9C3353', color: '#FFFFFF' }}
      >
        Submit Fundraiser
      </Button>
    </Box>
  );
};

export default Start;
