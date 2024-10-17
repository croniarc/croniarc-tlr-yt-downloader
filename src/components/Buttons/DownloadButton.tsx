'use client'
import React from 'react'
import { useMediaPlatformContext } from '@/context/VideoPlatformContext'
export default function DownloadButton({ videoDetails } :{
  videoDetails: any

}) {
  const { videoOption, videoUrl } = useMediaPlatformContext()
  // Check for videoOption and extract the quality
  const qualityFromString = videoOption?.quality ? videoOption?.quality.match(/\d+p/g) : ''
  if (!qualityFromString) return ''
 const outputPath = `${videoDetails.title}.${videoOption?.container}`
  const quality = parseInt(qualityFromString[0].replace('p', ''))
  const videoTitle = encodeURIComponent(videoDetails.title)
  // DIRECT DOWNLOAD FROM A BUTTON IS NOT COMPLETED, IT MAY REQUIRE SOME CHANGES IN THE 
  // /src/app/api/download/route.ts
  // // USING THE CURRENT IMPLEMENTATION OF THIS FUNCTION  WILL DOWNLOAD THE VIDEO ON THE SERVER INSTEAD OF DOWNLOADING IT TO CLIENT
  // const onDownload = async () =>{
  //   const url = `/api/download?videoUrl=${videoUrl}&outputPath=${outputPath}&quality=${quality}&container=${videoOption?.container}`
  //   const response =  await fetch(url)
    
  //   const blob = await response.blob();

  //   const blobUrl = URL.createObjectURL(blob);

  //   // Trigger the download
  //   const link = document.createElement('a');
  //   link.href = blobUrl;
  //   link.download = outputPath; 
  //   link.click();
  //   URL.revokeObjectURL(blobUrl);
  // }
  const urlParams = new URLSearchParams({
    title: videoTitle,
  }).toString()

  const url = `${videoOption?.url}&${urlParams}` || ''

  return (
    <a 
      data-quality={quality}
      title={`video format: ${quality}`}
      className="px-6 !bg-paper-black text-white flex gap-1 items-center border py-2 font-semibold"
      download={`${videoDetails.title}.${videoOption?.container}`}
      datatype={videoOption?.container}
      href={url}
    >
      Download
    </a>
  )
}

