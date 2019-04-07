import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../../reducers/messageReducer';
import { Affix, Form, Button, Input} from 'antd';
import { Flex, Box } from '@rebass/grid';

class Footer extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, value) => {
            if (!err) {
                console.log('Received values of form: ', value);
                const message = {
                    type: 'sent',
                    message: value.message,
                    sentAt: '3:08:35 PM',
                }
                this.props.sendMessage(message)
                this.props.form.resetFields();
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Affix offsetBottom={0}>
                <div className="ps-chat-footer">
                    <Form layout="inline" onSubmit={this.handleSubmit}>
                        <Flex flexDirection={"row"}>
                            <Box width={11 / 12} alignSelf="flex-start">
                                {getFieldDecorator("message")(
                                    <Input placeholder="Write a message..." />
                                )}
                            </Box>
                            <Box width={1 / 12} alignSelf="flex-end">
                                <Button htmlType="submit" className="ps-transparent-button ps-footer-button" icon="arrow-right"></Button>
                            </Box>
                        </Flex>
                    </Form>
                </div>
            </Affix>
        )
    }
}
const FooterForm = Form.create()(Footer);

const mapDispatchToProps = dispatch =>
    bindActionCreators({ sendMessage }, dispatch);
export default connect(null, mapDispatchToProps)(FooterForm);