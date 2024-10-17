import React from 'react'

export function InstagramIcon({ size = 24 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" id="instagram"><linearGradient id="a" x1="1.464" x2="14.536" y1="14.536" y2="1.464" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#FFC107"></stop><stop offset=".507" stopColor="#F44336"></stop><stop offset=".99" stopColor="#9C27B0"></stop></linearGradient><path fill="url(#a)" d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"></path><linearGradient id="b" x1="5.172" x2="10.828" y1="10.828" y2="5.172" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#FFC107"></stop><stop offset=".507" stopColor="#F44336"></stop><stop offset=".99" stopColor="#9C27B0"></stop></linearGradient><path fill="url(#b)" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"></path><linearGradient id="c" x1="11.923" x2="12.677" y1="4.077" y2="3.323" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#FFC107"></stop><stop offset=".507" stopColor="#F44336"></stop><stop offset=".99" stopColor="#9C27B0"></stop></linearGradient><circle cx="12.3" cy="3.7" r=".533" fill="url(#c)"></circle></svg>
  )
}

export function TwitterIcon({ size = 24 }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill='#fff' viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
}


export default function VimeoIcon({
  size = 24
}) {
  return (
    <svg width={size} height={size} enableBackground="new 0 0 550 550" id="Layer_1" version="1.1" viewBox="0 0 550 550" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g><g><circle cx="275" cy="275" fill="#229CCB" r="256" /><path d="M403.5,215.3c-1.1,25-18.6,59.2-52.4,102.6c-35,45.4-64.6,68-88.8,68c-15,0-27.7-13.8-38-41.5     c-6.9-25.4-13.8-50.8-20.8-76.1c-7.7-27.7-16-41.5-24.8-41.5c-1.9,0-8.6,4-20.2,12.1l-12.1-15.6c12.7-11.1,25.2-22.3,37.5-33.4     c16.9-14.6,29.6-22.3,38-23.1c20-1.9,32.3,11.7,36.9,40.9c5,31.5,8.4,51.1,10.4,58.8c5.8,26.1,12.1,39.2,19,39.2     c5.4,0,13.4-8.4,24.2-25.3c10.8-16.9,16.5-29.8,17.3-38.6c1.5-14.6-4.2-21.9-17.3-21.9c-6.1,0-12.5,1.3-19,4     c12.7-41.1,36.9-61.1,72.7-60C392.6,164.8,405,181.9,403.5,215.3z" fill="#FFFFFF" /></g></g></svg>
  )
}


export function YTIcon({
  size = 24
}) {
  return (
    <svg width={size} height={size} viewBox="0 -38 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M250.346231,28.0746923 C247.358133,17.0320558 238.732098,8.40602109 227.689461,5.41792308 C207.823743,0 127.868333,0 127.868333,0 C127.868333,0 47.9129229,0.164179487 28.0472049,5.58210256 C17.0045684,8.57020058 8.37853373,17.1962353 5.39043571,28.2388718 C-0.618533519,63.5374615 -2.94988224,117.322662 5.5546152,151.209308 C8.54271322,162.251944 17.1687479,170.877979 28.2113844,173.866077 C48.0771024,179.284 128.032513,179.284 128.032513,179.284 C128.032513,179.284 207.987923,179.284 227.853641,173.866077 C238.896277,170.877979 247.522312,162.251944 250.51041,151.209308 C256.847738,115.861464 258.801474,62.1091 250.346231,28.0746923 Z" fill="#FF0000"> </path> <polygon fill="#FFFFFF" points="102.420513 128.06 168.749025 89.642 102.420513 51.224"> </polygon> </g> </g></svg>
  )
}

export function FBIcon(
  { size = 32, fill = "#fff" }
) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill={fill} width={size} height={size} viewBox="0 0 24 24" id="facebook"><path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"></path></svg>
  )
}