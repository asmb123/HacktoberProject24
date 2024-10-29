"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { client } from "@/appwrite/config";
import { Databases, Storage } from "appwrite";
import Loading from "./Loading";
import ProgressBar2 from "./Percentage";

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
  const [collectedFund,setcollectedFund]=useState<number>(50);
  const databases = new Databases(client);
  const storage = new Storage(client);
  const defaultImageUrl = "/images/heroImg.jpg";

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading/>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-0">
      {dataList.map((data) => (
        <CardContainer
          key={data.$id}
          className="inter-var max-w-[12rem] sm:max-w-[14rem] md:max-w-[16rem] lg:max-w-[18rem]"
        >
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-lightredbg dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-lg p-4 sm:p-5 border">
            <CardItem
              translateZ="30"
              className="text-lg sm:text-xl font-semibold text-black-600 dark:text-black"
            >
              {data.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="40"
              className="text-black-500 text-xs sm:text-sm max-w-xs mt-1 dark:text-black-300"
            >
              require {data.goalAmount}
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
              <ProgressBar2 percent={collectedFund}/>
            </CardItem>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
