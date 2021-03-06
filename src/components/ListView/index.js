import React, { useState } from 'react'
import { Minus, Plus } from 'react-feather';
// import './style.css'
import { jsx, css, Global, ClassNames } from '@emotion/core'
import converted from './style.js';

function ListViewComponent(props) {
    const [listExpend, setListExpend] = useState(false);

    // Close Chat Widget
    const onListStateChange = () => {
        setListExpend(!listExpend);
    };

    // console.log('props', props)
    const childrenWithProps = React.Children.map(props.children, child => {
        // checking isValidElement is the safe way and avoids a typescript error too
        const props = child.props;
        if (React.isValidElement(child)) {
            return React.cloneElement(child, props);
        }
        return child;
    });


    return (
        <>
    <Global styles={converted}/>
        <div className="wpcwv-cardComponent wpcwv-listComponent" onClick={onListStateChange}>
            {props.title && <div className="wpcwv-listTitle"><h4>{props.title}</h4><span>{listExpend ? <Minus size={12} /> : <Plus size={12} />}</span></div>}

            {listExpend &&
                <div className="wpcwv-listDesc">
                    {props.content && <p>{props.content}</p>}
                    {childrenWithProps}
                </div>
            }
        </div>
        </>
    )
}

export default ListViewComponent
