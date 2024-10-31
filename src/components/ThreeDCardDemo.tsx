"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { client } from "@/appwrite/config";
import { Databases, Storage } from "appwrite";
import Loading from "./Loading";
import ProgressBar2 from "./Percentage";
import { Modal, Box, Typography, Button, TextField } from "@mui/material";
import { motion } from "framer-motion";

type FundraiserData = {
  $id: string;
  title: string;
  description: string;
  imageId: string | null;
  imageUrl: string | null;
  goalAmount: number;
};

export function ThreeDCard() {
  const [dataList, setDataList] = useState<FundraiserData[]>([]);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [collectedFund, setCollectedFund] = useState<number>(50);
  const [selectedData, setSelectedData] = useState<FundraiserData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [donateAmount, setDonateAmount] = useState<number | "">("");
  const [showDonateInput, setShowDonateInput] = useState(false);

  const databases = new Databases(client);
  const storage = new Storage(client);
  const defaultImageUrl = "/images/noimage.jpg";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await databases.listDocuments(
          process.env.NEXT_PUBLIC_DATABASE_ID!,
          process.env.NEXT_PUBLIC_COLLECTION_ID!
        );

        const dataWithImageUrls = await Promise.all(
          response.documents.map(async (doc) => {
            const document = doc as unknown as FundraiserData;
            let imageUrl = defaultImageUrl;

            if (document.imageId) {
              const imageResponse = storage.getFileView(
                process.env.NEXT_PUBLIC_BUCKET_ID!,
                document.imageId
              );
              imageUrl = imageResponse;
              console.log(imageUrl);
            }

            return {
              ...document,
              imageUrl,
            };
          })
        );

        setDataList(dataWithImageUrls);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (data: FundraiserData) => {
    setSelectedData(data);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedData(null);
    setShowDonateInput(false);
    setDonateAmount("");
  };

  const handleDonateClick = () => {
    setShowDonateInput(true);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDonateAmount(Number(event.target.value));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="w-screen text-center text-4xl font-mono font-semibold md:text-5xl">
        Support a fundraiser
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-4 gap-x-6">
        {dataList.map((data) => (
          <CardContainer
            key={data.$id}
            className="inter-var max-w-[12rem] sm:max-w-[14rem] md:max-w-[16rem] lg:max-w-[18rem]"
            onClick={() => handleCardClick(data)}
          >
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-lightredbg dark:border-white/[0.2] border-black/[0.1] min-w-full h-auto rounded-lg p-4 sm:p-5 border">
              <CardItem
                translateZ="30"
                className="text-lg sm:text-xl font-semibold text-black-600 dark:text-black line-clamp-1 overflow-hidden text-ellipsis"
              >
                {data.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="40"
                className="text-black-500 text-xs sm:text-sm max-w-xs mt-1 dark:text-black-300"
              >
                Requires {data.goalAmount}
              </CardItem>
              <CardItem translateZ="60" className="w-full mt-3">
                <Image
                  src={data.imageUrl || defaultImageUrl}
                  height="200"
                  width="300"
                  className="h-32 sm:h-40 w-full object-cover rounded-lg group-hover/card:shadow-xl"
                  alt={data.title}
                />
              </CardItem>
              <CardItem as="p" translateZ="40" className="w-full pt-2 ">
                <ProgressBar2 percent={collectedFund} />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      {/* Modal */}
      <Modal open={isModalOpen} onClose={handleCloseModal} component={motion.div}
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ ease: "easeIn", duration: 0.2 }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            borderRadius: "8px",
          }}
        >
          {selectedData && (
            <>
              <Typography variant="h6" component="h2">
                {selectedData.title}
              </Typography>
              <Image
                src={selectedData.imageUrl || defaultImageUrl}
                height="200"
                width="300"
                className="h-32 sm:h-40 w-full object-cover rounded-lg"
                alt={selectedData.title}
              />
              <Typography sx={{ mt: 2 }}>
                {selectedData.description}
              </Typography>
              <Typography sx={{ mt: 1 }}>
                Goal Amount: {selectedData.goalAmount}
              </Typography>
              <ProgressBar2 percent={collectedFund} />
              <Button onClick={handleDonateClick} sx={{ mt: 2 }}>
                Donate
              </Button>
              {showDonateInput && (
                <TextField
                  label="Enter Amount"
                  type="number"
                  value={donateAmount}
                  onChange={handleAmountChange}
                  fullWidth
                  sx={{ mt: 2 }}
                />
              )}
              <Button onClick={handleCloseModal} sx={{ mt: 2 }}>
                Close
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
}
