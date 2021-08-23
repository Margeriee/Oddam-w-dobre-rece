import React from 'react';
import Facebook from './Facebook.png';
import Instagram from './Instagram.png';
import './Footer.scss';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__text">Małgorzata Brzuska</div>
            <div className="footer__images">
                <img src={Facebook} alt="Facebook" />
                <img src={Instagram} alt="Instagram" />
            </div>
        </footer>
    )
}