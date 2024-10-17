import React from 'react'

export default function InAppLoader({size ='medium'}   :{size? : 'small' | 'medium' | 'large'}) {
  let defaultSize = 'w-12 h-12'
  if (size === 'small') {
    defaultSize = 'w-16 h-16'
  } else if (size === 'large'){
    defaultSize = 'w-32 h-32'
  }
  return (

    <div className="flex justify-center items-center">
    <div className={`animate-spin rounded-full ${defaultSize} border-t-2 border-r-2 border-sky-500`}></div>
  </div>
  )
}
