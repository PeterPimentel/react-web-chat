import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../../reducers/messageReducer';
import { Affix, Form, Button, Input} from 'antd';

class Footer extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, value) => {
            if (!err) {
                const message = {
                    from: 'me',
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
                        <div style={{display:'flex', alignItems:'center'}}>
                            <div style={{ width: '90vw' }}>
                                {getFieldDecorator("message")(
                                    <Input autoComplete="off" placeholder="Write a message..." />
                                )}
                            </div>
                            <div style={{ width: '10vw' }}>
                                <Button htmlType="submit" className="ps-transparent-button ps-footer-button" icon="arrow-right"></Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </Affix>
        )
    }
}
const FooterForm = Form.create()(Footer);

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);
export default connect(null, mapDispatchToProps)(FooterForm);