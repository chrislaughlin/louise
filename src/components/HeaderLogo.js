import React from 'react'

import Logo from '../../content/assets/LIFFYLOGO.svg';

function HeaderLogo() {
    return (
        <div className="header-logo-container">
            <img
                className="header-logo"
                src={Logo}
            />
        </div>
    )
}

export default HeaderLogo
