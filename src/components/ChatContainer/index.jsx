import React from 'react';
import { connect } from 'react-redux';
import Message from '../chat/Message';
import { Flex } from '@rebass/grid';

function ChatContainer(props) {
    const { conversation } = props;
    return (
        <div className="ps-chat-container">
            <Flex flexDirection={"column"}>
                {conversation.map((conv, index) => {
                    return (
                        <Message key={index} conversation={conv}/>
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