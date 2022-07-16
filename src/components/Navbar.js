import MainLogo from '../images/main-logo.svg'
import Avatar from '../images/account.svg'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'


const Navbar = () => {
    const [sidebar, setSidebar] = useState()
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav flex flex--justify-between flex--align-center">
                    <div className="header__logo"><img src={ MainLogo } alt="logo"/></div>
                    <div className="header__menu flex">
                        <Link to="/" className="header__item">Фильмы</Link>
                        <Link to="/" className="header__item">Сериалы</Link>
                        <Link to="/" className="header__item">Мультфильмы</Link>
                    </div>
                    <div className="header__menu flex flex--align-center">
                        <Link to="/" className="btn btn--attention | header__cta">Купить</Link>
                        <Link to="/" className="header__account"><img src={ Avatar } /></Link>
                    </div>
                    <Link to="/" class="header__humburger">
                        {!sidebar ? <FaIcons.FaBars onClick={showSidebar} /> : <AiIcons.AiOutlineClose onClick={showSidebar} /> }
                    </Link>
                </nav>
            </div>
            <nav className={sidebar ? "sidebar-menu active" : "sidebar-menu"}>
                <Link to="/" className="sidebar-menu__item">Фильмы</Link>
                <Link to="/" className="sidebar-menu__item">Сериалы</Link>
                <Link to="/" className="sidebar-menu__item">Мультфильмы</Link>
                <Link to="/" className="sidebar-menu__item">Подписка</Link>
                <Link to="/" className="sidebar-menu__item">Аккаунт</Link>
            </nav>
        </header>
    );
}
 
export default Navbar;