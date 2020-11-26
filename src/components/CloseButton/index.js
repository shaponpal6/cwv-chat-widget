import React from 'react'
import styled from '@emotion/styled'
import { X } from 'react-feather';

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    float: right;
    background: #1e90ff;
    padding: 2px 8px;
    color: #fff;
    border-radius: 4px;
    margin-top: 3px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`

function CloseButton(props) {
    return (
    <div className="wpcwv-widgetClose">
        <Button setClassName="wpcwv-button" onClick={props.onClick} >{props.text} {<X size={16}/>}</Button>
    </div>
    )
}

export default CloseButton;
