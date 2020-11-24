import React, { useState } from 'react'
import PropTypes from 'prop-types'
import OptionsMenu from '../OptionsMenu';
import { ChevronDown, Settings, Bell, ArrowDown } from 'react-feather';
// import './style.css';
import styled from '@emotion/styled'

const Div = styled.div`
display: flex;
justify-content: space-between;
margin-left: 6px;
`

function HeaderActionsButton({ onCloseWidget }) {
    const [menuState, setMenuState] = useState(false);
    return (
        <div className="wpcwv-chatEventsRight">
            <Div className="wpcwv-chatActions">
                <div
                    className="wpcwv-chatEventsMenu"
                    onClick={() => setMenuState(!menuState)}
                >
                    <Bell />
                </div>

                <div
                    className="wpcwv-chatEventsMenu"
                    onClick={() => setMenuState(!menuState)}
                >
                    <Settings />
                </div>
                <div
                    className="wpcwv-chatWidgetClose"
                    onClick={() => onCloseWidget()}
                >
                    <ChevronDown />
                </div>
            </Div>
            {menuState && <OptionsMenu />}
        </div>

    )
}

HeaderActionsButton.propTypes = {
    onCloseWidget: PropTypes.func.isRequired,

}

export default HeaderActionsButton

