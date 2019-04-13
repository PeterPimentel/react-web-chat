import React from 'react';
import { Avatar, Button } from 'antd';

export default function Header() {
    return (
        <div className="ps-chat-header">
            <div style={{ width: '10vw' }}>
                <Avatar src="http://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/robot-03-icon.png" />
            </div>
            <div style={{ width: '80vw' }}>
                <span className="ps-bot-name">Botinho</span>
            </div>
            <div style={{ width: '10vw' }}>
                <Button className="ps-transparent-button ps-footer-button" icon="more"></Button>
            </div>
        </div>
    )
}