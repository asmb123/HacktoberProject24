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
        imageId = response.$id; // Store the image ID
        console.log("File uploaded successfully:", response);
      } catch (error) {
        console.error("File upload failed:", error);
        return; // Stop if image upload fails
      }
    }

    // Store document
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
            imageId: imageId, // Link the image ID to the document
          }
        );
        console.log("Document created successfully");
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
        await account.getSession('current'); // Check if a session exists
        setLoading(false); // Stop loading if session exists
      } catch (error) {
        // Redirect if no session exists or an error occurs
        router.push('/pages/login');
        console.log(error);
      }
    };

    checkSession();
  }, [router]); // Adding router as a dependency is also good practice


  if (loading) {
    return <Loading />;
  }

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
        variant="filled"
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
        variant="filled"
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
        variant="filled"
        fullWidth
        margin="normal"
        type="number"
        value={formData.goalAmount}
        onChange={handleChange}
        required
        className="bg-lightredbg"
      />
      <TextField
        label="Account number"
        name="accountNo"
        variant="filled"
        fullWidth
        margin="normal"
        type="number"
        value={formData.accountNo}
        onChange={handleChange}
        required
        className="bg-lightredbg"
      />
      <TextField
        label="IFSC number"
        name="IFSC"
        variant="filled"
        fullWidth
        margin="normal"
        type="text"
        value={formData.IFSC}
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
          id="uploader"
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
