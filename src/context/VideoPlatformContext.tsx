'use client'
import { MediaPlatforms } from '@/components/UrlComponent';
import React, { createContext, useContext, useEffect, useState } from 'react';


const Context = createContext<{
  mediaPlatform: MediaPlatforms,
  handleMediaPlatorm: (media: MediaPlatforms) => void,
  videoUrl: string,
  videoOption: {
    container: string,
    quality: string | null,
    url: string
  } | null,
  handleVideoOption: (opt: {
    container: string,
    quality: string | null,
    url: string
  }) => void,
  detailsLoading: boolean,
  error: string,
  handleDetailsLoading: (loading: boolean) => void,
  handleVideoUrl: (url: string) => void,
}>({
  mediaPlatform: 'youtube', handleMediaPlatorm() { },
  videoOption: null,
  videoUrl: '',
  handleVideoOption() { },
  handleVideoUrl() { },
  detailsLoading: false,
  handleDetailsLoading() { },
  error: ""
}
);

export const isValidYtLink = (url: string): boolean => {
  const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]+)(\S+)?$/

  return regExp.test(url);
};

// Example usage:
const youtubeUrl = 'https://www.youtube.com/watch?v=VIDEO_ID';
console.log(isValidYtLink(youtubeUrl)); // Should return true if valid


export const PlatformProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [error, setError] = useState('')
  const [detailsLoading, setDetailsLoading] = useState<boolean>(false)
  const [videoOption, setVideoDownload] = useState<{
    container: string,
    quality: string | null,
    url: string
  } | null>(null)
  const handleDetailsLoading = (loading: boolean) => {
    setDetailsLoading(loading)
  }
  const [videoUrl, setVideoUrl] = useState<string>('')

  const handleVideoUrl = (url: string) => {
    if (mediaPlatform === 'youtube') {
      const valid = isValidYtLink(url)
      if (valid) {
        setError('')
        setVideoUrl(url)
      } else {
        setError('Not a valid youtube link ')
      }
    }
  }
  const [mediaPlatform, setMediaPlatform] = useState<MediaPlatforms>("youtube")
  const handleVideoOption = (
    opt: {
      container: string,
      quality: string | null,
      url: string
    }
  ) => {
    setVideoDownload({
      container: opt.container,
      quality: opt.quality ? opt.quality : null,
      url: opt.url
    })
  }
  const handleMediaPlatorm = (media: MediaPlatforms) => {
    setError("")
    setMediaPlatform(media)
  }
  useEffect(()=>{
    if (mediaPlatform !== 'youtube') {
      setError('Only youtube is supported at the moment')
    } else {
      setError('')
    }
    },[mediaPlatform])
  return <Context.Provider value={{
    mediaPlatform, handleMediaPlatorm,
    videoOption, handleVideoOption, videoUrl, handleVideoUrl, detailsLoading, handleDetailsLoading, error
  }}>{children}</Context.Provider>;
};

export const useMediaPlatformContext = () => useContext(Context);