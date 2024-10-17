import { DEFAULT_ICON_SIZE } from '@/app/constants/constants'
import React from 'react'

export default function Button({click, title, className, isActive, activeClassName, Icon, iconSize} :{
    click : () => void, title : string, className ?: string, isActive? : boolean, activeClassName? : string, Icon : React.FC<any>, iconSize? : number 
}) {
  return (
    <button
    className={`px-6 !bg-paper-black text-white flex gap-1 items-center  border py-2  font-semibold  ${isActive ? " text-white !bg-sky-600  " :""}  ${className ? className : 'text-teal-400 font-semibold    mt-2 ' }
     
      `}
    onClick={click}>
{Icon &&       <Icon size={iconSize ? iconSize : DEFAULT_ICON_SIZE}/>}
      {title}

    </button>
  )
}
