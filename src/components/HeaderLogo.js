import React from 'react'
import { Link } from 'gatsby'

import Logo from '../../content/assets/LIFFYLOGO.svg';

function HeaderLogo() {
    return (
        <div className="header-logo-container">
            <Link
                to={`/`}
            >
                <img
                    className="header-logo"
                    src={Logo}
                />
            </Link>

        </div>
    )
}

export default HeaderLogo
