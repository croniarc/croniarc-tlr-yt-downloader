import { useMediaPlatformContext } from "@/context/VideoPlatformContext";
import DownloadButton from "../Buttons/DownloadButton";
import OptionsSelector from "../Selector";
import { YTDetails } from "@/app/actions";

export default function RenderItem({videoDetails} :{ videoDetails :  YTDetails}
  ) {
    function timeConvertFromSeconds(n: number) {
      var num = n;
      var hours = Math.floor(num / 3600);
      var minutes = Math.floor((num % 3600) / 60);
      var seconds = num % 60;
      return hours + ":" + minutes + ":" + seconds;
    }
    const {videoOption} = useMediaPlatformContext()
   return       <>
   <div className="aspect-video   h-40 bg-paper-black rounded-lg relative">
     {videoDetails?.thumbnail ? (
  //  YOU CAN USE NEXT_IMAGE INSTEAD OF RENDERING VIDEO HERE   
     <video autoPlay={false}   src={videoOption?.url} className='h-full w-full rounded-lg' controls={true} 
         poster={videoDetails?.thumbnail} title={`${videoDetails?.title}.${videoOption?.container}` || ''}
         aria-details={videoDetails?.title}
       >
   {/* DOWNLOAD BUTTON IN VIDEO WILL ONLY RENDER IF BROWSER DOES NOT SUPPORT THE VIDEO TAG  */}
         <DownloadButton videoDetails={videoDetails} />
       </video>
  
     ) : (
       <></>
     )}
   </div>
   <div className="px-2 flex flex-col items-center">
     <h3 className="text-md line-clamp-1 max-w-sm">
       {videoDetails?.title}
     </h3>
     <span className="text-md   text-gray-200">
       <span className='font-semibold '>
         Duration :
       </span>
       {videoDetails?.lengthSeconds &&
         timeConvertFromSeconds(parseInt(videoDetails.lengthSeconds))}
  
     </span>
     <div className="flex flex-wrap bg-paper-black rounded-lg border border-sky-500">
       <DownloadButton videoDetails={videoDetails} />
       <OptionsSelector
         options={videoDetails.formats}
       />
     </div>
   </div>
  </>
  }