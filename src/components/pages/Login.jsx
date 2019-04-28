import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../../redux/reducers/messageReducer';
import { Form, Input, Button, Divider} from 'antd';
import reactChatBrand from '../../assets/images/react-chat-icon.png'

class Login extends React.Component {

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
                        <img className="ps-login-brand" src={reactChatBrand}></img>
                    </div>
                    <Form.Item label="USERNAME">
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input className="ps-input-border-less" placeholder="Username" />
                        )}
                    </Form.Item>
                    <Form.Item label="PASSWORD">
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input className="ps-input-border-less" type="password" placeholder="Password" />
                        )}
                    </Form.Item>
                    <a className="ps-login-link" href="">Forgot password</a>
                    <Form.Item>
                        <div>
                            {/* <a href="">Forgot password</a> */}
                            <Button className="ps-large-button" type="primary" htmlType="submit">
                                LOGIN
                            </Button>
                            {/* <Divider>OR CONNECT WITH</Divider> */}
                        </div>
                    </Form.Item>
                    <Divider style={{color:"#6d6d6d"}}>OR CONNECT WITH</Divider>
                    <Form.Item>
                        <div>
                            <Button style={{backgroundColor:"#3b5998"}} icon="facebook" className="ps-social-button" type="primary" htmlType="submit">
                                FACEBOOK
                            </Button>
                            <Button style={{backgroundColor:"#d9372c"}} icon="google" className="ps-social-button" type="primary" htmlType="submit">
                                GOOGLE
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
const LoginForm = Form.create()(Login);

const mapStateToProps = store => ({
    messageContext: store.messageReducer.context,
    inputDisabled: store.uiReducer.messageInputDisabled
});
const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);