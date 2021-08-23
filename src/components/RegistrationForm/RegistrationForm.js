import React from 'react';
import {Decoration} from '../../assets/Decoration';
import '../LoginForm/LoginForm.scss';

export const RegistrationForm = () => {
    return (
        <>
        <div className="loginForm">
            <p>Załóż konto</p>
            <Decoration/>
            <form>
                <div className="loginForm__form">
                    <span>E-mail</span>
                    <input type="email"/>
                    <span>Hasło</span>
                    <input type="text"/>
                    <span>Powtórz hasło</span>
                    <input type="text"/>
                </div>
                <div className="loginForm__buttons">
                    <a href="/login">Zaloguj się</a>  
                    <button>Załóż konto</button>
                </div>           
            </form>
        </div>
        </>
    )
}