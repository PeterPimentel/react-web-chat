import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import Message from '../chat/Message';

function ChatContainer(props) {
    const { conversation } = props;
    const scrollbar = useRef(null)

    useEffect(() => {
        if (scrollbar)
            scrollbar.current.scrollTop = scrollbar.current.scrollHeight;
    }, [conversation]);

    return (
        <div ref={scrollbar} className="ps-chat-container" style={{ width: '100vw', height: '87vh' }}>
            {conversation.map((conv) => {
                return (
                    <Message key={conv.id} conversation={conv} />
                )
            })}
        </div>
    )
}

const mapStateToProps = store => ({
    conversation: store.messageReducer.conversation
});

export default connect(mapStateToProps)(ChatContainer);