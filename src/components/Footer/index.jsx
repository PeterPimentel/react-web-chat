import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../../redux/reducers/messageReducer';
import { Affix, Form, Button, Input } from 'antd';
import { normalizeMessage } from '../../utils/messageUtil';

class Footer extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, value) => {
            if (!err) {
                this.props.sendMessage(normalizeMessage(value.message,this.props.messageContext))
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
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ width: '90vw' }}>
                                {getFieldDecorator("message", {
                                    rules: [{ required: true}],
                                })(
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

const mapStateToProps = store => ({
    messageContext: store.messageReducer.context
});
const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(FooterForm);