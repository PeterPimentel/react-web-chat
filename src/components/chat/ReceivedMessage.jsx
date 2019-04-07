import React from 'react';
import { Box } from '@rebass/grid'

export default function ReceivedMessage({ conversation }) {
    return (
        <Box alignSelf="flex-start">
            <div className="ps-chat-message ps-chat-received">
                <span>{conversation.message}</span>
            </div>
        </Box>
    )
}