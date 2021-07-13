import React, { FunctionComponent, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { getMessages } from '../../redux/selectors/message';
import { MessageHandler } from '../Messages/MessageHandler';
import { Modal } from '../Modal/Modal';

import styles from './connectedChat.module.css';

export const ConnectedChat: FunctionComponent = () => {
    const messages = useSelector(getMessages);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    });

    return (
        <main className={styles.chat}>
            {messages.map((msg) => (
                <MessageHandler key={msg.id} message={msg.message} from={msg.from} type={msg.type} />
            ))}
            <div ref={ref} />
            <Modal />
        </main>
    );
};
