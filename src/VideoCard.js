function VideoCard(props){
    return(
        <div className='video-card'>
            <div>
            <img src={props.videoThumbnail} className='thumbnail'alt="" />
            </div>
            <div className="inner-details">
                <p className="title">{props.title}</p>
                <div className="channel-details">
                    <img src={props.channelLogoUrl} className="channel-logo" alt="" />
                    <p>{props.channelName}</p>
                </div>
                <div className="details">
                    <p>{props.views}k views </p>
                    <p>{props.likes}k likes</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;