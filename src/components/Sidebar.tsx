// NOT NEEDED FOR NOW , MAY USE IN THE  FUTURE
// import Link from "next/link";
// import React from "react";
// type AppHeaderProps = {
//   sideBar: boolean;
//   closeSideBar: () => void;
//   direction: "ltr" | "rtl";
//   component: React.ReactElement;
//   md?: boolean;
// };
// export function Sidebar({
//   sideBar,
//   closeSideBar,
//   direction = "rtl",
//   component,
//   md = false,
// }: AppHeaderProps) {
//   return (
//     <div
//       className={`fixed z-40   ${
//         md ? "md:hidden" : ""
//       }  h-screen ease-in-out duration-300 transition-all  w-full md:w-96 top-0  bg-dark ${
//         direction === "rtl"
//           ? sideBar
//             ? "right-0 z-30  opacity-100"
//             : "opacity-0 -right-[100vw] "
//           : sideBar
//           ? "left-0   opacity-100  rounded-tr-xl"
//           : "-left-[100vw] opacity-0"
//       }`}
//     >
//       <div className="py-3 text-xl px-3 flex w-full justify-around items-center  mb-4">
//       <Link href={`/`} className={`text-2xl   lg:text-3xl uppercase font-semibold  px-3 rounded-md flex items-center `}
//         >
//           {/* <Image src={logo} className="rounded-full" height={40} width={40} alt="coder_saadi" /> */}
//           <span className=":text-surface font-bold text-surface font-serif">Downloader</span>
//         </Link>
      
//         <div className="cursor-pointer" onClick={() => closeSideBar()}>
//         close
//         </div>
//       </div>
//       {component}
//     </div>
//   );
// }