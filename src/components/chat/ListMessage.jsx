import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../../reducers/messageReducer';
import {normalizeMessage} from '../../utils/messageUtil';

function ListMessage (props) {
    return(
        <div>
            <div className='ps-message ps-message-received'>
                <span>{props.conversation.message}</span>
            </div>
            <ul style={{listStyle:'none', paddingLeft:'1vw'}}>
                {
                    props.conversation.options.map((option,idx)=>{
                        return(
                            <li className='ps-message ps-li-message' key={'list-itn'+idx}>                            
                                <div onClick={()=>{props.sendMessage(normalizeMessage(option.value))}}>
                                    {option.text}
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);
export default connect(null, mapDispatchToProps)(ListMessage);