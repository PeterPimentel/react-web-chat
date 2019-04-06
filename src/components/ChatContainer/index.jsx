import React from 'react';
import SentMessage from '../chat/SentMessage';
import ReceivedMessage from '../chat/ReceivedMessage';
import Data from './Data';
import {Flex} from '@rebass/grid'

export default function ChatContainer() {
    return (
        <div className="ps-chat-container">
            <Flex flexDirection={"column"}>
                {Data.map((conv, index) => {
                    return (
                        conv.type === 'sent' ?
                        <SentMessage key={index} conversation={conv} /> :
                        <ReceivedMessage key={index} conversation={conv} />
                    )
                })}
            </Flex>
        </div>
    )
}