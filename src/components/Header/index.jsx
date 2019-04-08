import React from 'react';
import {Avatar, Button, Affix } from 'antd';
import {Flex, Box} from '@rebass/grid';

export default function Header() {
    return (
        <Affix>
            <div className="ps-chat-header">
                <Flex flexDirection={"row"} alignItems="center">
                    <Box width={1/12}>
                        <Avatar src="http://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/robot-03-icon.png"/>
                    </Box>
                    <Box width={10/12}>
                        <span className="ps-username-name">Botinho</span>
                    </Box>
                    <Box width={1/12} alignSelf="flex-end">
                        <Button className="ps-transparent-button ps-footer-button" icon="more"></Button>
                    </Box>
                </Flex>
            </div>
        </Affix>
    )
}