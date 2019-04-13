import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Message from '../chat/Message';
import OptionButtons from '../chat/OptionButtons';
import { sendMessage } from '../../reducers/messageReducer';
import { convertMessage } from '../../utils/messageUtil';
import { Scrollbars } from 'react-custom-scrollbars';

function ChatContainer(props) {

    function selectOption(value) {
        props.sendMessage(convertMessage('me', value))
    }
    const { conversation } = props;
    return (
        <Scrollbars autoHide style={{ width: '100vw', height: '87vh' }}>
            <div className="ps-chat-container">
                {conversation.map((conv, index) => {
                    return (
                        <Message key={index} conversation={conv} />
                    )
                })}
                <OptionButtons send={selectOption} />
            </div>
        </Scrollbars>
    )
}

const mapStateToProps = store => ({
    conversation: store.messageReducer.conversation
});
const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);