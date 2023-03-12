import React from 'react';
import { Link } from 'react-router-dom';

const RelatedVideoListItem = ({ relatedVideo }) => {
    const { id, title, thumbnail, duration, views, date } = relatedVideo;
    return (
        <div class="w-full flex flex-row gap-2 mb-4">
            <div
                class="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]"
            >
                <Link to={`/video/${id}`}>
                    <img
                        src={thumbnail}
                        class="object-cover"
                        alt="Some video title"
                    />
                </Link>
                <p
                    class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py"
                >
                    {duration}
                </p>
            </div>

            <div class="flex flex-col w-full">
                <Link to="/video/1">
                    <p class="text-slate-900 text-sm font-semibold">
                        {title}
                    </p>
                </Link>
                <Link
                    class="text-gray-400 text-xs mt-2 hover:text-gray-600"
                    to={`/video/${id}`}
                >
                    Learn with Sumit
                </Link>
                <p class="text-gray-400 text-xs mt-1">
                    {views} views . {date}
                </p>
            </div>
        </div>
    );
};

export default RelatedVideoListItem;