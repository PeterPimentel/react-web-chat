import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../../redux/reducers/messageReducer';
import { Form, Input, Button, Divider } from 'antd';
import ChatBrand from '../SVG/chatBrand';;

class SignIn extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, value) => {
            if (!err) {
                this.props.sendMessage(value.message, this.props.messageContext)
                this.props.form.resetFields();
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="ps-login-content">
                <Form onSubmit={this.handleSubmit}>
                    <div className="ps-align-center">
                        <ChatBrand className="ps-login-brand"/>
                    </div>
                    <Form.Item label="USERNAME">
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your Username!' }],
                        })(
                            <Input className="ps-input-border-less" placeholder="Username" />
                        )}
                    </Form.Item>
                    <div>
                        <Form.Item label="PASSWORD">
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input className="ps-input-border-less" type="password" placeholder="Password" />
                            )}
                        </Form.Item>
                    </div>
                    <div className="ps-align-end" style={{ marginTop: "-3.5vh", paddingBottom: "2vh" }}>
                        <a className="ps-login-link" href="">Forgot Password?</a>
                    </div>
                    <Form.Item>
                        <div className="ps-align-center">
                            <Button className="ps-large-button" type="primary" htmlType="submit">
                                LOGIN
                            </Button>
                        </div>
                    </Form.Item>
                    <Divider style={{ color: "#6d6d6d", fontSize:"x-small" }}>OR CONNECT WITH</Divider>
                    <Form.Item>
                        <div className="ps-align-center">
                            <Button
                                style={{ backgroundColor: "#3b5998", borderColor: "#3b5998" }}
                                icon="facebook" className="ps-social-button" type="primary">
                                FACEBOOK
                            </Button>
                            <Button
                                style={{ backgroundColor: "#d9372c", borderColor: "#d9372c" }}
                                icon="google" className="ps-social-button" type="primary">
                                GOOGLE
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
const SignInForm = Form.create()(SignIn);

const mapStateToProps = store => ({
    messageContext: store.messageReducer.context,
    inputDisabled: store.uiReducer.messageInputDisabled
});
const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);