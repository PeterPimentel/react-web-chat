import React from 'react';
import { Box } from '@rebass/grid'
import TextMessageReceived from './TextMessageReceived';
import ImageMessage from './ImageMessage';

export default function ReceivedMessage({ conversation }) {
    return (
        <Box alignSelf="flex-start">
            {conversation.image ?
                <ImageMessage conversation={conversation}/>:
                <TextMessageReceived conversation={conversation}/>
            }
        </Box>
    )
}