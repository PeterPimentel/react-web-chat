import React from 'react';
import DotSpin from './DotSpin';

function StatusRequest () {
    return(
        <div className="ps-message ps-message-received ps-status-request" style={{paddingBottom:'2px'}}>
            <span>Digitando</span>
            <DotSpin/>
        </div>
    )
}

export default StatusRequest;