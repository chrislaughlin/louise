import React from 'react'
import { Link } from 'gatsby'

const Menu = ({
    showHome,
    siteTitle
}) => {
    return (
        <div className="main-menu">
            {
                showHome &&
                <Link to={'/'}>
                    {siteTitle}
                </Link>
            }
            <a
                href='https://www.etsy.com/uk/shop/LYPortraits'
                target="_blank"
            >
                Shop
            </a>
        </div>
    )
}

export default Menu

