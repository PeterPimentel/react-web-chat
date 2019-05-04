import React from 'react';
import TextMessage from './TextMessage';
import ImageMessage from './ImageMessage';
import ListMessage from './ListMessage';
import MediaMessage from './MediaMessage';
import MessageTime from './MessageTime';

export default function Message({ conversation }) {
    const align = conversation.from === 'me' ? 'flex-end' : 'flex-start';
    const message = (msg) => {
        switch (msg.type) {
            case 'text':
                return <TextMessage conversation={msg}/>
            case 'option':
                return <ListMessage conversation={msg}/>
            case 'image':
                return <ImageMessage conversation={msg}/>
            case 'media':
                return <MediaMessage conversation={msg}/>
            default:
                return <TextMessage conversation={msg}/>
        }
    }
    return (
        <div style={{alignSelf:align}}>
            {message(conversation)}
            <MessageTime align={align} conversation={conversation}/>
        </div>
    )
}