import React from "react";
import Layout from "@/components/layout";
import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableFooter,
  Table,
} from "@/components/ui/table";
import { GetServerSideProps } from "next";
import { Card } from "@/components/ui/card";
import { ScanFaceIcon, Upload, Video } from "lucide-react";

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data here if needed, using context.params or context.query

  // Example static data

  return {
    props: {}, // Pass videos as props to the component
  };
};

type VideoType = {
  userId: string;
  s3ObjectKey: string;
  videoId: string;
  submitted: Date;
  processedDate: Date;
  finished: boolean;
  status: "Finished" | "Processing" | "Failed" | null;
};

type MyVideosProps = {
  videos: VideoType[];
};

const MyVideos = () => {
  const videos = [
    {
      userId: "jan",
      s3ObjectKey: "fakdfjakfajkfjakjf",
      videoId: "fajifadifhadifa",
      submitted: new Date("2024-01-30"),
      processedDate: new Date("2024-01-25"),
      finished: false,
      status: "Processing",
    },
    {
      userId: "jan",
      s3ObjectKey: "fakdfjakfajkfjakjf",
      videoId: "fajifadifhadifa",
      submitted: new Date("2024-01-30"),
      processedDate: new Date("2024-01-25"),
      finished: false,
      status: "Processing",
    },
    {
      userId: "jan",
      s3ObjectKey: "fakdfjakfajkfjakjf",
      videoId: "fajifadifhadifa",
      submitted: new Date("2024-01-30"),
      processedDate: new Date("2024-01-25"),
      finished: false,
      status: "Processing",
    },
    {
      userId: "jan",
      s3ObjectKey: "fakdfjakfajkfjakjf",
      videoId: "fajifadifhadifa",
      submitted: new Date("2024-01-30"),
      processedDate: new Date("2024-01-25"),
      finished: false,
      status: "Processing",
    },
  ];

  const dateObj = (video: VideoType) => {
    const month = video.submitted.getUTCMonth() + 1; // months from 1-12
    const day = video.submitted.getUTCDate();
    const year = video.submitted.getUTCFullYear();

    // Using template literals:
    const newDate = `${year}/${month}/${day}`;

    // Using padded values, so that 2023/1/7 becomes 2023/01/07
    const pMonth = month.toString().padStart(2, "0");
    const pDay = day.toString().padStart(2, "0");
    return newDate;
  };

  return (
    <Layout>
      <div className="grid place-items-center p-24 h-full gap-3">
        <div className="text-3xl py-5 font-bold text-left justify">
          My Videos
        </div>
        <Card>
          <Table className="w-[500px]">
            <TableCaption>A list of your videos.</TableCaption>
            <TableHeader>
              <TableRow className="flex flex-row gap-4 items-center "> 
                <TableHead className=" flex flex-row items-center gap-2">
                  {" "}
                  <Video />
                  Video ID
                </TableHead>
                <TableHead className="gap-2 flex flex-row items-center">
                  <Upload />
                  Submitted
                </TableHead>
                <TableHead className=" flex flex-row items-center gap-2">
                  <ScanFaceIcon/>
                  Status
                  </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {videos.map((video) => (
                <TableRow key={video.videoId} className="flex flex-row gap-5 items-center">
                  <TableCell className="font-medium flex">{video.videoId}</TableCell>
                  <TableCell className="">July 28, 2023</TableCell>
                  <TableCell className="justify-self-end">{video.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </Layout>
  );
};

export default MyVideos;
