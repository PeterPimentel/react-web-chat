import React, { FunctionComponent } from 'react';
import classname from 'classnames';
import styles from './textMessage.module.css';

type TextMessageProps = {
    message: string;
    from: 'USER' | 'BOT';
};

export const TextMessage: FunctionComponent<TextMessageProps> = ({ message, from }) => {
    const containerStyle = classname(styles.container, {
        [styles.botMessage]: from === 'BOT',
        [styles.userMessage]: from === 'USER',
    });

    return (
        <div className={containerStyle}>
            <div className={styles.messageContainer}>
                <p className="typo-h50">{message}</p>
            </div>
        </div>
    );
};
