import React from 'react';
import {Link} from 'react-router-dom';
import './LoginMenu.scss';

export const LoginMenu = () => {
    return (
        <div className="loginMenu">
            <span><Link to="/login">Zaloguj</Link></span>
            <span><Link to="/register">Załóż konto</Link></span>
        </div>
    )
}