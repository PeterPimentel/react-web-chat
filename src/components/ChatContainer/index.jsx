import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Message from '../chat/Message';
import OptionButtons from '../chat/OptionButtons';
import { sendMessage } from '../../reducers/messageReducer';
import { convertMessage } from '../../utils/messageUtil';

function ChatContainer(props) {
    const { conversation } = props;
    const scrollbar = useRef(null)

    useEffect(() => {
        if (scrollbar)
            scrollbar.current.scrollTop = scrollbar.current.scrollHeight;
    }, [conversation]);

    function selectOption(value) {
        props.sendMessage(convertMessage('me', value))
    }
    return (
        <div ref={scrollbar} className="ps-chat-container" style={{ width: '100vw', height: '87vh' }}>
            {conversation.map((conv, index) => {
                return (
                    <Message key={index} conversation={conv} />
                )
            })}
            <OptionButtons send={selectOption} />
        </div>
    )
}

const mapStateToProps = store => ({
    conversation: store.messageReducer.conversation
});
const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);