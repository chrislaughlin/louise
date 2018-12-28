import React from 'react'
import { Link } from 'gatsby'

import '../styles/index.scss'

import HeaderLogo from './HeaderLogo'

class Layout extends React.Component {
    render() {
        const { location, title, children } = this.props
        const rootPath = `${__PATH_PREFIX__}/`
        let header = null;


        if (location.pathname !== rootPath) {
            header = (
                <h1>
                    <Link
                        to={`/`}
                    >
                        {title}
                    </Link>
                </h1>
            )
        }

        return (
            <div>
                <HeaderLogo/>
                {header}
                {children}
                <footer>
                    © Liffy Designs
                </footer>
            </div>
        )
    }
}

export default Layout
