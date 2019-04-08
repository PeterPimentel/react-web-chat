import React from 'react';
import { Box } from '@rebass/grid'
import TextMessage from './TextMessage';
import ImageMessage from './ImageMessage';

export default function Message({ conversation }) {
    const align = conversation.from === 'me' ? 'flex-end' : 'flex-start';
    return (
        <Box alignSelf={align}>
            {conversation.image ?
                <ImageMessage conversation={conversation}/>: 
                <TextMessage conversation={conversation}/>
            }
        </Box>
    )
}