"use client"

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";

interface MediaItemProps {
    data: Song;
    onClick?: (id: string) => void;

}

const MediaItem: React.FC<MediaItemProps> = ({
    data,
    onClick
}) => {

    const imageUrl = useLoadImage(data);

    const handleClick = () => {
        if (onClick) {
            return onClick(data.id);
        }
        
        //we'll add default to turn on player because we don't have a player yet
    }

    return ( 
        <div 
            onClick={handleClick}
             className="
                    flex
                    items-center
                    gap-x-3
                    cursor-pointer
                    hover:bg-neutral-800/50
                    w-full
                    p-2
                    rounded-md
             "
        >
            <div
                className="
                    relative
                    rounded-md
                    min-h-[48px]
                    min-w-[48px]
                    overflow-hidden
                "
            >
                <Image 
                    className="object-cover"
                    fill
                    src={imageUrl || 'images/liked.png'}
                    alt="Media Item"
                />
            </div>
        </div>
     );
}
 
export default MediaItem;