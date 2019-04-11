import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Message from '../chat/Message';
import { Flex, Box } from '@rebass/grid';
import { Button } from 'antd';
import { sendMessage } from '../../reducers/messageReducer';
import {convertMessage} from '../../utils/messageUtil';

function ChatContainer(props) {
    
    function selectOption(value){
        props.sendMessage(convertMessage('me',value))
    }

    const { conversation } = props;
    return (
        <div className="ps-chat-container">
            <Flex flexDirection={"column"}>
                {conversation.map((conv, index) => {
                    return (
                        <Message key={index} conversation={conv}/>
                    )
                })}
                <Box className="ps-message-options" alignSelf="center">
                    <Button onClick={()=>{selectOption("Olá")}}>Olá</Button>
                    <Button>Teste</Button>
                    <Button>Teste</Button>
                </Box>
            </Flex>
        </div>
    )
}

const mapStateToProps = store => ({
    conversation: store.messageReducer.conversation
});
const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(ChatContainer);