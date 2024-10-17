import React, { useEffect } from 'react';
import useButtonsBar from './app-buttons';
import { AppButton } from '.';
import { MediaPlatforms } from '../UrlComponent';

export default function ButtonsBar({ onChange, active }: {
    onChange: (media: MediaPlatforms) => void, active: MediaPlatforms
}) {
    useEffect(() => {
        console.log(document.documentElement.attributes);
        console.log(document.body.attributes);
    }, []);

    const buttons = useButtonsBar();

    function isBtnActive(btn: any) {
        return active === btn.title.toLowerCase();
    }

    const handleClick = (btn: any) => {
        onChange(btn.title.toLowerCase() as MediaPlatforms);
    }

    return (
        <div className='flex w-full flex-wrap justify-center py-2 items-center rounded-t-xl'>
            {
                buttons.map((btn: any, index) => (
                    <a 
                        key={index} 
                        href={btn.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={() => handleClick(btn)}
                    >
                        <AppButton
                            Icon={btn.Icon}
                            isActive={isBtnActive(btn)}
                            className={`
                                md:first:rounded-l-2xl
                                md:last:rounded-r-2xl
                                !py-1 
                                bg-white
                                hover:bg-paper-black
                                hover:text-white 
                                m-2
                            `}
                            title={btn.title}
                        />
                    </a>
                ))
            }
        </div>
    );
}