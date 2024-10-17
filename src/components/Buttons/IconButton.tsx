import { DEFAULT_ICON_SIZE } from '@/app/constants/constants'
import React from 'react'

interface IconButtonProps {
    click : () => void, 
    Icon : React.FC<any>, 
    title : string
}
export default function IconButton({click, Icon, title} : IconButtonProps) {
  const ICON_COLOR = '#000'
  const ICON_SIZE = DEFAULT_ICON_SIZE
    return (
    <button onClick={click} >
      <Icon size={ICON_SIZE} fill={ICON_COLOR} />
      <span>{title}</span> 
    </button>
  )
}
