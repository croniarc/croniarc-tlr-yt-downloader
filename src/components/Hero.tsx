import React from 'react'
import { PlatformProvider } from '@/context/VideoPlatformContext'
import DownloaderMVP from './DownloaderMVP'

export default function HeroScreen() {
  return (
    <div className='min-h-screen flex justify-center px-6  sm:text-center pt-16 sm:pt-24 w-full '>
      <div className="hero-bg-image"></div>
      <div className="">
        <h1 className={`text-3xl pt-1 sm:text-5xl  leading-none max-w-2xl font-semibold tracking-tight sm:font-extrabold text-white`}>
          Paste the Url to download High Quality Videos
        </h1>
        <PlatformProvider >
       <DownloaderMVP />
        </PlatformProvider>
      </div>
    </div>
  )
}
