import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedVideos } from '../../features/relatedVideos/relatedVideosSlice';
import Loading from '../ui/Loading';
import RelatedVideoListItem from './RelatedVideoListItem';

const RelatedVideoList = ({ currentVideoId, tags }) => {
    const dispatch = useDispatch();

    const { relatedVideos, isLoading, isError, error } = useSelector(state => state.relatedVideos);

    useEffect(() => {
        dispatch(fetchRelatedVideos({ tags, id: currentVideoId }))
    }, [dispatch, currentVideoId, tags])


    let content;
    if (isLoading) {
        content = <Loading />
    }

    if (!isLoading && isError) {
        content = <div className='col-span-12'>{error}</div>
    }

    if (!isLoading && !isError && relatedVideos.length === 0) {
        content = <div className='col-span-12'>No related videos available</div>
    }

    if (!isLoading && !isError && relatedVideos.length > 0) {
        content =
            <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
                {relatedVideos.map(relatedVideo => <RelatedVideoListItem relatedVideo={relatedVideo} />)}
            </div>
    }

    return (
        <>
            {content}
        </>)
};

export default RelatedVideoList;