'use client'
import React from 'react'
import { useMediaPlatformContext } from '@/context/VideoPlatformContext'
import InAppLoader from '../InAppLoader'
import  RenderVideoDetails  from './renderItem'
import { YTDetails } from '@/app/actions'

export default function ItemPreview({
  videoDetails,
}: {
  videoDetails: YTDetails | undefined
}) {

  const { detailsLoading, error } = useMediaPlatformContext()

  return (
    <>
     <p className={`${ error !== "" ? "text-red-400" :"text-white"}`}>
      {error}
      </p>
      {detailsLoading && <InAppLoader />}
      <div className="p-2 flex flex-wrap justify-center min-h-46 w-full border-sky-500 text-white bg-paper-black border-paper-black/10 border rounded-lg sm:mt-4">
        {
        videoDetails ? 
        <RenderVideoDetails videoDetails={videoDetails}/>
        : <NoVideoDetails />
         }
      </div>
    </>
  )

}




export function NoVideoDetails() {
  return  (
      <div >
        <h3 className={`text-md line-clamp-1 text-xl font-bold leading-normal tracking-tighter  max-w-sm`}>
        Your Video Details will appear here
        </h3>
      </div>
    )
}
