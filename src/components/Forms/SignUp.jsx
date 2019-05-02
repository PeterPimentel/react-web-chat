import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { singupWithEmail } from '../../redux/reducers/authReducer';
import { Form, Input, Button, Divider } from 'antd';
import ChatBrand from '../SVG/chatBrand';;

class SignUp extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, value) => {
            if (!err) {
                this.props.singupWithEmail(value.email, value.password)
                this.props.form.resetFields();
            }
        });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
          callback('Two passwords that you enter is inconsistent!');
        } else {
          callback();
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="ps-login-content">
                <Form onSubmit={this.handleSubmit}>
                    <div className="ps-align-center">
                        <ChatBrand/>
                    </div>
                    <Form.Item label="USERNAME">
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: 'Please input your email!' }],
                        })(
                            <Input className="ps-input-border-less" type="email" placeholder="Email" />
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
                    <div>
                        <Form.Item label="CONFIRM PASSWORD">
                            {getFieldDecorator('confirm', {
                                rules: [{ required: true, message: 'Please input your Password!' },{
                                    validator: this.compareToFirstPassword}
                                ],
                            })(
                                <Input className="ps-input-border-less" type="password" placeholder="Password" />
                            )}
                        </Form.Item>
                    </div>
                    <div className="ps-align-end" style={{ marginTop: "-3.5vh", paddingBottom: "2vh" }}>
                    </div>
                    <Form.Item>
                        <div className="ps-align-center">
                            <Button loading={this.props.buttonLoading} className="ps-large-button" type="primary" htmlType="submit">
                                REGISTER
                            </Button>
                        </div>
                    </Form.Item>
                    <Divider style={{ color: "#6d6d6d", fontSize:"x-small" }}>OR REGISTER WITH</Divider>
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
const SignUpForm = Form.create()(SignUp);

const mapStateToProps = store => ({
    buttonLoading: store.uiReducer.buttonLoading
});
const mapDispatchToProps = dispatch => bindActionCreators({ singupWithEmail }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);