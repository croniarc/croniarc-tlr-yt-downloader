import VimeoIcon, { FBIcon, InstagramIcon, TwitterIcon, YTIcon } from '@/assets/Socialcons'
import { url } from 'inspector'
//  additional styles to each button can be added, in case of using some state functionality on these , you should use memo and callback with proper dependencies
export default function useButtonsBar() {
    const buttons = [
    {
        title : 'Youtube',
        className :``,
        Icon : YTIcon,
        url : 'https://www.youtube.com',
        
    }
  ]
  return buttons
}
