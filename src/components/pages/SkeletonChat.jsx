import React from 'react';
import { Skeleton, Avatar} from 'antd';

function SkeletonChat (){
    const bgColor = '#f2f2f2';
    const skelentonLines = ['10vw','30vw','80vw','60vw','50vw','60vw','20vw','40vw']
    return(
        <div style={{paddingLeft:'2vw'}}>
            {/* HEADER */}
            <div style={{display:'flex', alignItems:'center', paddingTop:'2vh'}}>
                <div style={{ width: '10vw'}}>
                    <Avatar style={{backgroundColor:bgColor}}/>
                </div>
                <div style={{ width: '80vw' }}>
                    <div style={{width:'35vw', height:'3vh', marginLeft:'10vw', backgroundColor:bgColor}}></div>
                </div>
                <div style={{ width: '10vw' }}>
                    <div style={{width:'1vw',height:'3vh', backgroundColor:bgColor}}></div>
                </div>
            </div>
            {/* CHAT CONTENT */}
            <div style={{marginTop:'5vh'}}>
                <Skeleton active paragraph={{ rows: 8, width:skelentonLines }}/>
            </div>
            {/*FOOTER */}
            <div style={{display:'flex', alignItems:'center', position:'absolute',bottom:'5px',right:'5px'}} >
                <div style={{ display:'flex', alignItems:'center',width: '90vw', height:'5vh'}}>
                    <div style={{width:'80vw',height:'4vh', borderRadius:'20px', backgroundColor:bgColor, marginLeft:'5vw'}}></div>
                </div>
                <div style={{ width: '10vw', display:'flex', justifyContent:'center' }}>
                    <div style={{width:'5vw', height:'2vh', borderRadius:'25px', backgroundColor:bgColor}}></div>
                </div>
            </div>
        </div>
    )
}

export default SkeletonChat;