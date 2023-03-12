import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../../features/videos/videosSlice';
import VideoGridItem from './VideoGridItem';
import Loading from '../ui/Loading';
import { fetchTags } from '../../features/tags/tagsSlice';

const VideoGrid = () => {
    const dispatch = useDispatch();
    const { videos, isLoading, isError, error } = useSelector(state => state.videos)
    const tags = useSelector(state => state.tags)

    useEffect(() => {
        dispatch(fetchVideos());
        dispatch(fetchTags());
    }, [dispatch])

    let content = null;
    if (isLoading) {
        content = <Loading />
    }

    if (!isLoading && isError) {
        content = <div>{error}</div>
    }

    if (!isLoading && !isError && videos.length === 0) {
        content = <div>No videos available</div>
    }

    if (!isLoading && !isError && videos.length > 0) {
        content =
            videos.map(video => <VideoGridItem key={video.id} video={video} />)
    }

    return (
        <section className="pt-12">
            <section className="pt-12">
                <div
                    className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
                >
                    {content}
                </div>
            </section>
        </section>
    );
};

export default VideoGrid;