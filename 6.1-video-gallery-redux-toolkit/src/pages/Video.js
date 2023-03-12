import React, { useEffect } from 'react';
import Player from '../components/description/Player';
import VideoDescription from '../components/description/VideoDescription';
import RelatedVideoList from '../components/List/RelatedVideoList';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideo } from '../features/video/videoSlice';
import Loading from '../components/ui/Loading';


const Video = () => {
    const { videoId } = useParams();
    const dispatch = useDispatch();
    const { video, isLoading, isError, error } = useSelector(state => state.video)
    const { id, tags, link } = video || {};
    useEffect(() => {
        dispatch(fetchVideo(videoId))
    }, [dispatch, videoId])


    let content;
    if (isLoading) {
        content = <Loading />
    }

    if (!isLoading && isError) {
        content = <div className='col-span-12'>{error}</div>
    }

    if (!isLoading && !isError && video?.id) {
        content = <div className='col-span-12'>No video available</div>
    }

    if (!isLoading && !isError && video?.id) {
        content = <div className="col-span-full w-full space-y-8 lg:col-span-2">
            <Player link={link} />
            <VideoDescription video={video} />
        </div>
    }
    return (
        <section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    {content}
                    <RelatedVideoList currentVideoId={id} tags={tags} />
                </div>
            </div>
        </section>
    );
};

export default Video;