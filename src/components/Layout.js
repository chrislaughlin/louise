import React from 'react'
import { Link } from 'gatsby'

import '../styles/index.scss';

import HeaderLogo from './HeaderLogo';

class Layout extends React.Component {
    render() {
        const { location, title, children } = this.props
        const rootPath = `${__PATH_PREFIX__}/`
        let header

        if (location.pathname === rootPath) {
            header = (
                <h1>
                    <Link
                        to={`/`}
                    >
                        {title}
                    </Link>
                </h1>
            )
        } else {
            header = (
                <h3>
                    <Link
                        to={`/`}
                    >
                        {title}
                    </Link>
                </h3>
            )
        }
        return (
            <div>
                <HeaderLogo/>
                {header}
                {children}
                <footer>
          © 2018, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </div>
        )
    }
}

export default Layout
