import React from 'react'

import '../styles/index.scss'

import HeaderLogo from './HeaderLogo'
import Menu from './Menu';

class Layout extends React.Component {
    render() {
        const { location, title, children } = this.props
        const rootPath = `${__PATH_PREFIX__}/`

        return (
            <div className="main-layout">
                <HeaderLogo/>
                <Menu
                    showHome={location.pathname !== rootPath}
                    siteTitle={title}
                />
                {children}
                <footer>
                    © Liffy Designs
                </footer>
            </div>
        )
    }
}

export default Layout
