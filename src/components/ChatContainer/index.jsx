import React from 'react';
import { connect } from 'react-redux';
import SentMessage from '../chat/SentMessage';
import ReceivedMessage from '../chat/ReceivedMessage';
import { Flex } from '@rebass/grid';

function ChatContainer(props) {
    const { conversation } = props;
    return (
        <div className="ps-chat-container">
            <Flex flexDirection={"column"}>
                {conversation.map((conv, index) => {
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

const mapStateToProps = store => ({
    conversation: store.messageReducer.conversation
});
export default connect(mapStateToProps)(ChatContainer);