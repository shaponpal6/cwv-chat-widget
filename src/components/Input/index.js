import React from 'react'
import styled from '@emotion/styled'

const InputStyle = styled.input`
border: 1px solid;
width: 100%;
padding: 6px;
margin-top: 10px;
border-radius: 2px;
  &:hover {
    border: 1px solid #333;
  }
`

function Input(props) {
    return (<InputStyle type="text" className={props.className} placeholder={props.placeholder} onChange={props.onChange} />)
}

export default Input;
