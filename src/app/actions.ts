import { MediaPlatforms } from "@/components/UrlComponent";

export type YTDetails = {
  title?: string;
  lengthSeconds?: string;
  thumbnail?: string;
  formats: {
    container: string;
    quality: string | null;
    url: string;
    itag: number;
  }[];
};

export type YoutubeDetailsResponse = YTDetails | undefined;

// Type guard to check if the platform is YouTube
// USING BEST PRACTICES
function isYoutubePlatform(platform: MediaPlatforms): platform is 'youtube' {
  return platform === 'youtube';
}

type VideoDownloader = (platform: MediaPlatforms, url: string) => Promise<YoutubeDetailsResponse>;

export const RunVideoDownloader: VideoDownloader = async (platform, url) => {
  try {
    const response = await fetch(`/api/download/${platform}?videoUrl=${url}`, {
      cache: 'no-cache',
    });
    const data: YTDetails | undefined = await response.json();
    
    // Use the type guard to narrow the type
    if (isYoutubePlatform(platform)) {
      return data;
    }
    return undefined;
  } catch (error) {
    console.error(error);
  }
};
