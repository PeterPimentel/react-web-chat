import React from 'react';
import { Box } from '@rebass/grid';
import { Button } from 'antd';

export default function OptionButtons({ send, conversation }) {
    const options = [
        {
            text:"Texto 1",
            value: "1"
        },
        {
            text:"Texto 2",
            value: "2"
        },
        {
            text:"Texto 3",
            value: "3"
        }

    ]
    return (
        <Box className="ps-message-options" alignSelf="center">
            <label htmlFor="option-1">CLK</label>
            <input type="radio" name="radio-buttons" id="option-1" style={{display:"none"}} />
            <Button onClick={() => { send("Olá") }}>Olá</Button>
            
            <label htmlFor="option-2">CLK 1</label>
            <input type="radio" name="radio-buttons" id="option-2" style={{display:"none"}} />
            <Button>Teste</Button>
            
            <label htmlFor="option-3">CLK 2</label>
            <input type="radio" name="radio-buttons" id="option-3" style={{display:"none"}} />            
            <Button>Teste</Button>
            {/* {
                options.map((option,index) =>{
                    return(
                        <>
                        <label key={'label'+index} htmlFor={`option-${index}`}>--></label>
                        <input key={'input'+index} type="radio" name="radio-buttons" id={`option-${index}`} style={{display:"none"}} />
                        <Button key={'btn'+index} onClick={() => { send(option.value) }}>{option.text}</Button>
                        </>
                    )
                })
            } */}
        </Box>
    )
}