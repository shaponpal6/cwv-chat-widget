import React from 'react'

import './style.css'

function ButtonCircle(props) {
    console.log('props', props)
    return (
        <button
            className={"wpcwv-button " + (props.type === "circle" ? ' wpcwv-widgetButton wpcwv-theme ' : '') + (props.setClassName ?? '')}
            onClick={props.onClick}
        >
            {props.content && props.content}
            {props.image && props.image}
        </button>
    )
}

export default ButtonCircle
