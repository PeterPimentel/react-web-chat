import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import Message from '../Message';
import StatusRequest from '../Feedback/StatusRequest';

function ChatContainer(props) {
    const { conversation } = props;
    const scrollbar = useRef(null)

    useEffect(() => {
        if (scrollbar)
            scrollbar.current.scrollTop = scrollbar.current.scrollHeight;
    }, [conversation]);

    return (
        <div ref={scrollbar} className="ps-chat-container" style={{ width: '100vw', height: '90vh' }}>
            {conversation.map((conv) => {
                return (
                    <Message key={conv.id} conversation={conv} />
                )
            })}
            {
                props.botTyping && <StatusRequest error={props.errorOnMessage}/>
            }
        </div>
    )
}

const mapStateToProps = store => ({
    conversation: store.messageReducer.conversation,
    errorOnMessage: store.messageReducer.errorOnSendMessage,
    botTyping: store.uiReducer.botTyping
});

export default connect(mapStateToProps)(ChatContainer);