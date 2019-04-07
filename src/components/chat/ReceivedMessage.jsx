import React from 'react';
import { Box } from '@rebass/grid'
import TextMessage from './TextMessage';
import ImageMessage from './ImageMessage';

export default function ReceivedMessage({ conversation }) {
    return (
        <Box alignSelf="flex-start">
            {conversation.image ?
                <ImageMessage conversation={conversation}/>: 
                <TextMessage conversation={conversation} type={'ps-chat-received'}/>
            }
        </Box>
    )
}