import React from 'react';
import DotSpin from './DotSpin';

function StatusRequest ({error}) {
    return(
        <div style={{paddingBottom:'5vh'}}>
            <div className="ps-message ps-message-received ps-status-request" style={{paddingBottom:'2px'}}>
                {
                    !error ? <DotSpin/> : <span className="ps-chat-error-feedback">{error.message}</span>
                }
            </div>
        </div>
    )
}

export default StatusRequest;