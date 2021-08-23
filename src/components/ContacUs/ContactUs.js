import React from 'react';
import {Decoration} from '../../assets/Decoration';
import {Footer} from '../Footer/Footer';
import './ContactUs.scss';

export const ContactUs = () => {
    return (
        <section className="section__contactUs" id="contactUs">
            <form className="section__contactUs__form">
                <h2>Skontaktuj się z nami</h2>
                <Decoration/>
                <div className="section__contactUs__form--inputs">
                    <div>
                        <p>Wpisz swoje imię</p>
                        <input type="text" placeholder="Małgorzata"/>
                        <p>Wpisz swój email</p>
                        <input type="mail" placeholder="abc@xyz.com"/>
                    </div>
                    <div>    
                        <p>Wpisz swoją wiadomość</p>
                        <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                    </div>
                </div>
                <button>Wyślij</button>
            </form>
            <Footer/>
        </section>
    )
}