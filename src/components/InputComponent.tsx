import React from "react";
import { DEFAULT_ICON_SIZE } from "../app/constants/constants";
import useGetDetailsFromServer from "./useGetDetailsFromServer";

interface ToolTipProps {
  isTooltip?: boolean;
  toolTipPosition?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  toolTipAxis?: "horizontal" | "vertical";
  toolTipContent?: React.ReactNode;
}

interface InputComponentProps extends ToolTipProps {
  Icon?: React.FC<any>;
  label?: string;
  inputClassName?: string;
  wrapperClassName?: string;
  labelSrOnly?: boolean;
  usePredefinedStyles?: boolean;
  type?: string;
  maxLength?: number;
  placeholder?: string;
  onChange ?: (e : React.ChangeEvent<HTMLInputElement>) => void
}

const InputComponent: React.FC<InputComponentProps> = ({
  inputClassName,
  wrapperClassName,
  labelSrOnly = false,
  Icon,
  isTooltip,
  toolTipPosition = "top-right",
  toolTipAxis = "horizontal",
  toolTipContent,
  usePredefinedStyles = true,
  type = "text",
  maxLength,
  onChange,
  placeholder,
}) => {
  const tooltipClasses = {
    "top-right": "top-0 right-0",
    "top-left": "top-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "bottom-left": "bottom-0 left-0",
  };
  return (
    <div
      className={`relative border    flex items-center pl-4 w-full  ${usePredefinedStyles ? " border-blue-600 border rounded-2xl bg-paper-black" : ""} ${wrapperClassName || ""}`}
    >
      
      <input onChange={onChange}
        type={type}
        name="videoUrl"
        maxLength={maxLength}
        placeholder={placeholder}
        className={`block w-full  ${usePredefinedStyles ? "px-2 py-3  rounded bg-transparent text-white text-md md:text-lg lg:text-xl  outline-none" : ""} ${inputClassName || ""}`}
      />

      {isTooltip && toolTipContent && (
        <div
          className={`absolute p-2 text-white bg-black rounded ${tooltipClasses[toolTipPosition]} ${toolTipAxis === "horizontal" ? "w-full" : ""}`}
        >
          {toolTipContent}
        </div>
      )}
      {/* {Icon && 
     <>
       <div onClick={getVideoDetails} className="cursor-pointer absolute right-0 top-1 px-2 py-2 items-center rounded-br-2xl rounded-2xl bg-paper-black text-white flex items- gap-1">
       <Icon  size={DEFAULT_ICON_SIZE} />  Download  
    
       </div>
     </>
      } */}
    </div>
  );
};

export default InputComponent;
