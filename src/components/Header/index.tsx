import React from 'react';
import { NavLink } from 'react-router-dom';
import {routeMain as routeMainPage} from 'pages/MainPage';
import {routeMain as routeNewsList} from 'pages/NewsListPage';
import {routeMain as routeContacts} from 'pages/Contacts';
import './styles.scss'

const Header = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <h3 className='logo-text'>Новостник</h3>
            </div>
            <nav className='navbar'>
                <NavLink to={routeMainPage()} activeClassName={'linkActive'}>
                    Главная
                </NavLink>
                <NavLink to={routeNewsList()} activeClassName={'linkActive'}>
                    Новости
                </NavLink>
                <NavLink to={'/contacts'} activeClassName={'linkActive'}>
                    Контакты
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;