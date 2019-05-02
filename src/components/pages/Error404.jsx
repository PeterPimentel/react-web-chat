import React from 'react';
import ErrorImage from '../../assets/images/erro_404.png'
import { Link } from 'react-router-dom';
import { Button } from 'antd';

function Error404() {
    return(
        <div className="ps-error-page-content">
            <img src={ErrorImage} style={{maxWidth:"100vw"}} alt="A 404 error a boy in the sea."/>
            <div className="ps-button-link">
                <Link to="/">Go Home</Link>
            </div>
        </div>
    )
}

export default Error404;
