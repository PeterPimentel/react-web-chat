import React, { FunctionComponent } from 'react';
import { MoreOutlined } from '@ant-design/icons';

import styles from './header.module.css';

export const Header: FunctionComponent = () => {
    return (
        <header className={styles.header}>
            <div className={styles.avatarContainer}>
                <img
                    className={styles.avatar}
                    src="http://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/robot-03-icon.png"
                    alt="chatbot avatar"
                />
            </div>
            <span className={`${styles.botName} typo-h30`}>Chatbot</span>
            <div className={styles.closeButton}>
                <MoreOutlined className={`${styles.closeButtonIcon} typo-h30`} />
            </div>
        </header>
    );
};
