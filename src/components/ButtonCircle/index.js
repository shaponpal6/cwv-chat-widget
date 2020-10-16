import React from 'react'

import './style.css'

function ButtonCircle(props) {
    console.log('props', props)
    return (
        <button
            className={"wpcwv-button wpcwv-widgetButton wpcwv-theme " + (props.setClassName ?? '')}
            onClick={props.onClick}
        >
            {props.image && props.image}
        </button>
    )
}

export default ButtonCircle
