'use client'
import React from "react";
import URLComponent from "./UrlComponent";
import ItemPreview from "./item-preview/ItemPreview";
import useGetDetailsFromServer from "./useGetDetailsFromServer";

export default function DownloaderMVP() {
  const {videoDetails } = useGetDetailsFromServer()
  return (
    <>
    {/* URL COMPONENT TAKES THE URL , IT IS AN INPUT ELEMENT BASICALLY */}
      <URLComponent />
      <h3 className="text-sm text-gray-300 font-semibold mt-5">
        By using this service you agree to our terms and conditions
      </h3>
      {/* DOWNLOAD ITEM PREVIEW */}
    <ItemPreview  videoDetails={videoDetails} />
   
    </>
  );
}
