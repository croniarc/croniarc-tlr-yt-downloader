// HEPLERS ARE API ROUTES HELPERS, THIS HAS BEEN USED IN 
// /src/app/api/download/[platform]/route.ts 
import { NextRequest } from 'next/server';
import  ytdl, { videoFormat } from 'ytdl-core';

function extractVideoId(videoUrl: string): string | null {
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s?]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})$/;
    const match = videoUrl.match(regex);
    return match ? match[1] : null;
}
export async function PlatformYoutube(request : NextRequest,videoUrl : string){
    const videoId = extractVideoId(videoUrl)
    if (!videoId) {
        return new Response('Invalid videoUrl parameter', { status: 400 })
    }
    
    const videoDetails = await ytdl.getInfo(videoId)
    const formats = videoDetails.formats.map((format : videoFormat) => {
        return {
            container : format.container,
            quality : format.qualityLabel,
            url : format.url,
            itag : format.itag
        }
    })
    const value = {
        title: videoDetails.videoDetails.title,
        lengthSeconds: videoDetails.videoDetails.lengthSeconds,
        formats,
        thumbnail: videoDetails.videoDetails.thumbnails[0].url,
    }
    const headers = new Headers(request.headers)
    headers.set('content-type', 'octet/stream')
    headers.set('content-disposition', `attachment; filename="${value.title}.mp4"`)
    return new Response(JSON.stringify(value), {
        headers
    })
}