import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CloseOutlined } from '@ant-design/icons';
import { modalHide } from '../../redux/layoutStore';
import { getModalState } from '../../redux/selectors/layout';
import styles from './modal.module.css';

export const Modal: FunctionComponent = () => {
    const { visible, content } = useSelector(getModalState);
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(modalHide());
    };

    if (!visible) {
        return null;
    }

    return (
        <div className={styles.modal}>
            <header className={styles.modalHeader}>
                <div className={styles.closeButton} onClick={closeModal}>
                    <CloseOutlined className={`${styles.closeButtonIcon} typo-h30`} />
                </div>
            </header>
            <section className={styles.modalContent}>
                <img src={content} alt="modal" />
            </section>
        </div>
    );
};
