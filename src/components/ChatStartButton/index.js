import React from 'react'
import styled from '@emotion/styled'

const Div = styled.div`
display: block;
padding: 0 1.5em;
margin: 0 auto;
`
const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
pointer-events: initial;
cursor: pointer;
border-width: 0px;
border-style: initial;
border-color: initial;
border-image: initial;
outline: none;
background-color: dodgerblue;
padding: 10px 25px;
color: white;
border-radius: 15px;
text-align: center;
transition: all .2s;
overflow: auto;
margin-bottom: 15px;
cursor: pointer;
font-size: 1.8em;
font-weight: bold;
letter-spacing: .1em;
  &:hover {
    background-color: SteelBlue;
  }
`

function ChatStartButton(props) {
    return (
      <Div className="">
        <Button className="" onClick={props.onClick}>{props.text} <svg width="19" height="14" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 9H22M12 1.5L20.9333 8.2C21.4667 8.6 21.4667 9.4 20.9333 9.8L12 16.5" stroke="white" strokeWidth="3" />
            </svg>
        </Button>
      </Div>
    )
}

export default ChatStartButton;
