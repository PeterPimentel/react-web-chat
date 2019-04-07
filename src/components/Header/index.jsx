import React from 'react';
import { Row, Col, Avatar, Button, Affix } from 'antd';
import {Flex, Box} from '@rebass/grid';

export default function Header() {
    return (
        <Affix>
            <Flex className="ps-chat-header" flexDirection={"row"} alignItems="center">
                <Box width={1/12}>
                    <Avatar icon="user"/>
                </Box>
                <Box width={10/12}>
                    <span className="ps-username-name">Nome do Bot</span>
                </Box>
                <Box width={1/12} alignSelf="flex-end">
                    <Button className="ps-transparent-button ps-chat-footer-button" icon="more"></Button>
                </Box>
            </Flex>            
        </Affix>
    )
}