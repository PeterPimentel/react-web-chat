import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalToggle } from '../../redux/layoutStore';
import { getToastState } from '../../redux/selectors/layout';

import styles from './ConnectedToast.module.css';

export const ConnectedToast: FunctionComponent = () => {
    const toastState = useSelector(getToastState);
    const dispatch = useDispatch();

    //Automatic Toast dismmiss
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(
                modalToggle({
                    visible: false,
                    content: '',
                }),
            );
        }, 7000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    if (!toastState.visible) {
        return null;
    }

    return (
        <div className={styles.toast}>
            <p className={`${styles.message} typo-h60`}>{toastState.content}</p>
        </div>
    );
};
