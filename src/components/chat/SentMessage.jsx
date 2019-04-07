import React from 'react';
import { Box } from '@rebass/grid'

export default function SentMessage({ conversation }) {
    return (
        <Box alignSelf="flex-end">
            <div className="ps-chat-message ps-chat-sent">
                <span>{conversation.message}</span>
            </div>
        </Box>
    )
}