import React from 'react';
import {Decoration} from './../../assets/Decoration';
import './LoginForm.scss';

export const LoginForm = () => {
    return (
        <div className="loginForm">
            <p>Zaloguj się</p>
            <Decoration/>
            <form>
                <div className="loginForm__form">
                    <span>E-mail</span>
                    <input type="email"/>
                    <span>Hasło</span>
                    <input type="text"/>
                </div>
                <div className="loginForm__buttons">
                    <a href="/register">Załóż konto</a>    
                    <button>Zaloguj się</button>
                </div>           
            </form>
        </div>
    )
}