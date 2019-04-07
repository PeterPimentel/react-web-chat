import React from 'react';
import {Affix, Form, Button, Input} from 'antd';
import {Flex, Box} from '@rebass/grid'

class Footer extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
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
                            <Box width={11/12} alignSelf="flex-start">
                                {getFieldDecorator("message")(
                                    <Input placeholder="Write a message..." />
                                )}
                            </Box>
                            <Box width={1/12} alignSelf="flex-end">
                                <Button htmlType="submit" className="ps-chat-footer-button" icon="arrow-right"></Button>
                            </Box>
                        </Flex>
                    </Form>
                </div>
            </Affix>
        )
    }
}

const FooterForm = Form.create()(Footer);
export default FooterForm;