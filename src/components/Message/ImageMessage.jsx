import React, { useState } from 'react';
import {Icon} from 'antd';
import TextMessage from './TextMessage';

export default function ImageMessage({ conversation }) {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <TextMessage conversation={conversation}/>
            <div className="ps-image-message">
                <img alt="Imagem enviada pelo usuário" onClick={()=>{setVisible(true)}} src={conversation.source} />
            </div>
            {visible && <div className="ps-modal">
                <div className="ps-modal-header">
                    <Icon onClick={()=>{setVisible(false)}} className="ps-modal-icon" type="close" />
                </div>
                <div className="ps-modal-content">
                    <img className="ps-modal-image" alt="Imagem enviada pelo usuário" src={conversation.source} />
                </div>
            </div>}
        </div>
    )
}