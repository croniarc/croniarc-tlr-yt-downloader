'use client'
import React from 'react'
import InputComponent from './InputComponent'
import ButtonsBar from './Buttons/ButtonsBar'
import DownloadIcon from '@/assets/DownloadIcon'
import { useMediaPlatformContext } from '@/context/VideoPlatformContext'
export type MediaPlatforms = 'youtube' | 'facebook' | 'twitter' | 'instagram' | 'vimeo' | 'whatsapp'
export default function URLComponent() {
  const OnPasteUrl = () => {
  }
  const { mediaPlatform, handleMediaPlatorm, handleVideoUrl } = useMediaPlatformContext()

  return (
    <div className='w-full flex  justify-center items-center mt-4 flex-col'>
      <ButtonsBar active={mediaPlatform} onChange={handleMediaPlatorm} />
      <div className="w-full relative">
        <InputComponent onChange={(e) => {
          handleVideoUrl(e.target.value)
        }} placeholder={`Paste the ${mediaPlatform} video Url to download your video`} Icon={DownloadIcon} />

      </div>
    </div>

  )
}
