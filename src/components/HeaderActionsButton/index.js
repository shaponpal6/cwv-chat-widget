import React, { useState } from 'react'
import PropTypes from 'prop-types'
import OptionsMenu from '../OptionsMenu';
import { ArrowDownLeft, Settings, Bell, ArrowDown } from 'react-feather';

function HeaderActionsButton({ onCloseWidget }) {
    const [menuState, setMenuState] = useState(false);
    return (
        <div>
            <div className="wpcwv-chatEventsRight">
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
                    <ArrowDown />
                </div>
            </div>
            {menuState && <OptionsMenu />}
        </div>

    )
}

HeaderActionsButton.propTypes = {
    onCloseWidget: PropTypes.func.isRequired,

}

export default HeaderActionsButton

