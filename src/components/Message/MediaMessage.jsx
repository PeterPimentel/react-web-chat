import React from 'react';
import TextMessage from './TextMessage';
import ReactPlayer from 'react-player'

export default function MediaMessage({ conversation }) {
    return (
        <div>
            <TextMessage conversation={conversation}/>
            <div className="ps-image-message">
                <ReactPlayer className="ps-media-message" style={{width:'70vw', height:'auto'}} url={conversation.source}/>
            </div>
        </div>
    )
}