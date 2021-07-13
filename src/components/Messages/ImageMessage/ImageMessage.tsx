import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import classname from 'classnames';
import { modalShow } from '../../../redux/layoutStore';
import styles from './imageMessage.module.css';

type ImageMessageProps = {
    source: string;
    from: 'USER' | 'BOT';
};

export const ImageMessage: FunctionComponent<ImageMessageProps> = ({ source, from }) => {
    const dipatch = useDispatch();
    const containerStyle = classname(styles.container, {
        [styles.botMessage]: from === 'BOT',
        [styles.userMessage]: from === 'USER',
    });

    const handleImageClick = () => {
        dipatch(
            modalShow({
                visible: true,
                content: source,
            }),
        );
    };

    return (
        <div className={containerStyle}>
            <div className={styles.messageContainer} onClick={handleImageClick}>
                <img className="typo-h50" src={source} alt="" />
            </div>
        </div>
    );
};
