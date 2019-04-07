import React from 'react';
import { Box } from '@rebass/grid'
import TextMessage from './TextMessage';
import ImageMessage from './ImageMessage';

export default function SentMessage({ conversation }) {
    return (
        <Box alignSelf="flex-end">
            {conversation.image ?
                <ImageMessage conversation={conversation}/>: 
                <TextMessage conversation={conversation} type={'ps-chat-sent'}/>
            }
        </Box>
    )
}