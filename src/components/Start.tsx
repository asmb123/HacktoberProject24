"use client"
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TextField, Button, Typography, Box } from '@mui/material';
import { Databases, ID, Storage } from "appwrite";
import { client } from "@/appwrite/config";

const Start = () => {
	const { user } = useAuth();
	const router = useRouter();
	const storage = new Storage(client);
	const databases = new Databases(client);

	const storeImage = () => {
		if (formData.image) {
			storage.createFile(
				process.env.NEXT_PUBLIC_BUCKET_ID!,
				ID.unique(),
				formData.image
			).then(response => {
				console.log("File uploaded successfully:", response);
			}).catch(error => {
				console.error("File upload failed:", error);
			});
		} else {
			console.log("No image selected for upload.");
		}
	};

	const storeDocs = () => {
		if (formData.title && formData.description && formData.goalAmount && formData.accountNo && formData.IFSC) {
			databases.createDocument(
				process.env.NEXT_PUBLIC_DATABASE_ID!, // Database ID
				process.env.NEXT_PUBLIC_COLLECTION_ID!, // Collection ID
				ID.unique(), // Document ID
				{
					title: formData.title,
					description: formData.description,
					goalAmount: parseFloat(formData.goalAmount), // Convert to number if necessary
					accountNo: formData.accountNo,
					IFSC: formData.IFSC,
					// Optionally, add image ID if it was stored successfully
				}
			).then(response => {
				console.log("Document created successfully:", response);
			}).catch(error => {
				console.error("Failed to create document:", error);
			});
		} else {
			console.log("Please fill out all required fields.");
		}
	};

	const [formData, setFormData] = useState({
		title: '',
		description: '',
		goalAmount: '',
		image: null,
		accountNo: '',
		IFSC: '',
	});

	const handleChange = (e) => {
		const { name, value, type } = e.target;
		setFormData({
			...formData,
			[name]: type === 'file' ? e.target.files[0] : value,
		});
	};

	const handleSubmit = (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		console.log(formData);
		storeImage();
		storeDocs();
	};

	useEffect(() => {
		const checkSession = async () => {
			if (!user) {
				router.push('/pages/login');
			}
		}
		checkSession();
	}, [router, user]);

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
				type="string"
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
