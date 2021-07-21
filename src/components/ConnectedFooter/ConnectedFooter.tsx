import React, { FunctionComponent, useState, useCallback, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowRightOutlined } from '@ant-design/icons';
import { sendMessage } from '../../redux/messageStore';
import { getContext } from '../../redux/selectors/context';
import { generateUID } from '../../util/uidGeneratorUtil';

import styles from './connectedFooter.module.css';

export const ConnectedFooter: FunctionComponent = () => {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const context = useSelector(getContext);

    const handleInput = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            setMessage(event.target.value);
        },
        [setMessage],
    );

    const handleSendMessage = useCallback(() => {
        const uid = generateUID();

        if (message && message.trim().length > 0) {
            dispatch(
                sendMessage(
                    {
                        uid,
                        message,
                        type: 'TEXT',
                        from: 'USER',
                    },
                    context,
                ),
            );
        }
        setMessage('');
    }, [message, setMessage, dispatch]);

    const handleKeyPress = useCallback(
        (event: React.KeyboardEvent) => {
            if (event.key === 'Enter') {
                handleSendMessage();
            }
        },
        [handleSendMessage],
    );

    return (
        <footer className={styles.footer}>
            <div className={styles.inputContainer}>
                <input
                    tabIndex={1}
                    className="typo-h50"
                    type="text"
                    value={message}
                    onChange={handleInput}
                    onKeyPress={handleKeyPress}
                />
                <ArrowRightOutlined
                    tabIndex={2}
                    className={`${styles.action} typo-h40`}
                    onClick={handleSendMessage}
                    onKeyPress={handleKeyPress}
                />
            </div>
        </footer>
    );
};
