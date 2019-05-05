import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { singinWithEmail } from '../../redux/reducers/authReducer';
import { Form, Input, Button, Divider } from 'antd';
import {Link} from 'react-router-dom'
import ChatBrand from '../SVG/chatBrand';

class SignIn extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, value) => {
            if (!err) {
                this.props.singinWithEmail(value.email, value.password)
                this.props.form.resetFields('password');
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="ps-login-content">
                <Form onSubmit={this.handleSubmit}>
                    <div className="ps-align-center">
                        <ChatBrand />
                    </div>
                    <Form.Item label="USERNAME">
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: 'Please input your Email!' }],
                        })(
                            <Input className="ps-input-border-less" placeholder="Email" type="email" />
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
                        <Link to="/signup" className="ps-login-link">Create account</Link>
                    </div>
                    <div className="ps-align-end" style={{ marginTop: "-3.5vh", paddingBottom: "2vh" }}>
                        {/* <a className="ps-login-link" href="">Forgot Password?</a> */}
                    </div>
                    <Form.Item>
                        <div className="ps-align-center">
                            <Button loading={this.props.buttonLoading} className="ps-large-button" type="primary" htmlType="submit">
                                LOGIN
                            </Button>
                        </div>
                    </Form.Item>
                    <Divider style={{ color: "#6d6d6d", fontSize:"x-small" }}>OR CONNECT WITH</Divider>
                    <Form.Item>
                        <div className="ps-align-center">
                            <Button disabled
                                style={{ backgroundColor: "#3b5998", borderColor: "#3b5998" }}
                                icon="facebook" className="ps-social-button" type="primary">
                                FACEBOOK
                            </Button>
                            <Button disabled
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
    buttonLoading: store.uiReducer.buttonLoading
});
const mapDispatchToProps = dispatch => bindActionCreators({ singinWithEmail }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);