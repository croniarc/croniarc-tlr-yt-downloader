import { useMediaPlatformContext } from "@/context/VideoPlatformContext";
import { useEffect, useState } from "react";

const OptionsSelector = ({
  options,
}: {
  options: {
    container: string;
    quality: string | null;
    url: string;
  }[];
}) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const { handleVideoOption } = useMediaPlatformContext();
 useEffect(()=>{
    handleVideoOption(selectedOption)
 },[selectedOption, handleVideoOption])
  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = e.target.selectedIndex;
    setSelectedOption(options[selectedIndex]);
    handleVideoOption(options[selectedIndex]);
  };
  
  const optionQualityCheck = (quality: string | null) => {
    const qualityFromString = quality ? quality.match(/\d+p/g) : '';
    if (!qualityFromString) return '';
    const qualityValue = parseInt(qualityFromString[0].replace('p', ''));
    if (qualityValue >= 1080) return 'text-green-500';
    if (qualityValue >= 720) return 'text-blue-500';
    if (qualityValue >= 480) return 'text-yellow-500';
    if (qualityValue >= 360) return 'text-red-500';
    return '';
  };

  return (
    <div className="bg-paper-black flex h-full items-center p-3 rounded-2xl shadow-md max-w-sm mx-auto">
      <select
        value={selectedOption.url}
        onChange={handleOptionChange}
        className="bg-paper-black focus:border-none border-none ring-0 rounded-2xl outline-none  text-white relative"
      >
        {options.map((option, index) => (
          <option key={index} className={optionQualityCheck(option.quality)} value={option.url}>
            {option.container} {option.quality ? option.quality : ''}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OptionsSelector;
