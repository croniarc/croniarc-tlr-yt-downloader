import { RunVideoDownloader, YTDetails } from '@/app/actions'
import { isValidYtLink, useMediaPlatformContext } from '@/context/VideoPlatformContext'
import React, { useEffect } from 'react'

export default function useGetDetailsFromServer() {
    const [videoDetails, setVideoDetails] = React.useState<YTDetails| undefined>(undefined)
    const { mediaPlatform, videoUrl, handleDetailsLoading } = useMediaPlatformContext()
  
    useEffect(() => {
      const getVideoDetails = async () => {
        try {
          if (isValidYtLink(videoUrl) && videoUrl !== '') {
            handleDetailsLoading(true)
            const videoDetails = await RunVideoDownloader(mediaPlatform, videoUrl)
            handleDetailsLoading(false)
            const ifvideoDetails = videoDetails && ('formats' in videoDetails || 'title' in videoDetails)
            if (ifvideoDetails) {
              setVideoDetails(videoDetails)
            }
          }
        } catch (e) {
          console.log(e)
          handleDetailsLoading(false)
        }
      } 
      getVideoDetails()
    }, [videoUrl, mediaPlatform])
    return { videoDetails }
}
