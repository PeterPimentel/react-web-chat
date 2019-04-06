import React from 'react';
import { Row, Col, Icon, Affix, Form, Button, Input } from 'antd';

class Footer extends React.Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Affix offsetBottom={0}>
                <div className="ps-chat-footer">
                    <Form layout="inline">
                        <Row type="flex" align="middle" justify="end">
                            <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                                <Form.Item>
                                    {getFieldDecorator('message')(
                                        <Input placeholder="Write a message..." />
                                    )}
                                </Form.Item>
                            </Col>
                            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" icon="up">
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Affix>
        )
    }
}

const FooterForm = Form.create()(Footer);
export default FooterForm;