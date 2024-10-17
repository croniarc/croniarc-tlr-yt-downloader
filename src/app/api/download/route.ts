/*
NOT USING THIS FOR NOW:
MAY REQUIRE SOME CHANGES FOR DIRECT DOWNLOAD WITH A BUTTON, 
CURRENT IMPLEMENTATION WILL DOWNLOAD THE VIDEO ON THE SERVER INSTEAD OF DOWNLOADING IT TO CLIENT
*/
import { NextRequest, NextResponse } from "next/server";
// import  ytdl from 'ytdl-core'
// import fs from 'fs'
export async function GET(request: NextRequest, response : NextResponse
) {
    // const searchParams = request.nextUrl.searchParams
    // const url = searchParams.get('videoUrl')
    // const outputPath = searchParams.get('outputPath')
    // const container = searchParams.get('container') as any
    // const quality = searchParams.get('quality')
    // if (!url) {
    //     return new Response('Missing videoUrl parameter', { status: 400 })
    // }
    // if (!outputPath) {
    //     return new Response('Missing outputPath parameter', { status: 400 })
    // }
    // if (!container) {
    //     return new Response('Missing container parameter', { status: 400 })
    // }
    // if (!quality) {
    //     return new Response('Missing quality parameter', { status: 400 })
    // }
    // const responseHeaders = new Headers(response.headers);
    // const randomName = Math.random().toString(36).substring(2, 15);

    // responseHeaders.set(
    //   "Content-Disposition",
    //   `attachment; filename="${randomName}.mp4"`,
    // );
  
    // responseHeaders.set(
    //   "User-Agent",
    //   "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
    // );
  
    // const stream  = fs.createWriteStream(outputPath)
    // stream.on('finish', () => {
    //     console.log(`${outputPath} downloaded successfully`);
    //   });
    //   const videoStream = ytdl(url, {
    //     quality : "highestaudio" , 
    //     filter(format) {
    //         return format.container == container && format.itag == parseInt(quality, 10)
    //     },
    //   }).pipe(stream);
    //    videoStream.on('open', ()=>{
    //     console.log('downloading video');
    //    })
    //   // Convert the stream to a buffer
    //   const chunks: Buffer[] = [];
    //   videoStream.on('data', (chunk) => {
    //       chunks.push(chunk);
    //   });
  
    //   await new Promise((resolve) => {
    //       videoStream.on('end', resolve);
    //   });
  

    //   const videoBuffer = Buffer.concat(chunks);

  
    //   return new Response(videoBuffer, {
    //       headers: responseHeaders,
    //   })
    return new Response('Uncomment the above comment')
    }