import React from 'react';
import { Row, Col, Avatar, Icon, Affix } from 'antd';

export default function Header() {
    return (
        <Affix>
            <Row className="ps-chat-header" type="flex" align="middle" justify="start">
                <Col xs={4} sm={4} md={2} lg={2} xl={1}>
                    <Avatar icon="user"/>
                </Col>
                <Col xs={16} sm={16} md={20} lg={20} xl={22}>Nome do Bot</Col>
                <Col xs={4} sm={4} md={2} lg={2} xl={1}>
                    <Icon type="more"/>
                </Col>
            </Row>
        </Affix>
    )
}