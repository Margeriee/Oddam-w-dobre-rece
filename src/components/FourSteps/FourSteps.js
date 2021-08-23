import React from 'react';
import {Decoration} from '../../assets/Decoration';
import {Link} from 'react-router-dom';
import tshirt from './Icon-tshirt.png'
import shoppingBag from './Icon-shoppingBag.png'
import magnifyingGlass from './Icon-magnifyingGlass.png'
import loop from './Icon-loop.png'
import './FourSteps.scss';

export const FourSteps = () => {
    return (
        <section className="section__4Steps" id="fourSteps">
            <div className="section__4Steps__title">
                <h2>Wystarczą 4 proste kroki</h2>
                <Decoration/>
            </div>
            <div className="section__4Steps__allSteps">
                <div className="section__4Steps__step">
                    <img src={tshirt} alt="koszulka" className="section__4Steps__stepImg"/>
                    <p>Wybierz rzeczy</p>
                    <span>ubrania, zabawki, sprzęt i inne</span>
                </div>
                <div className="section__4Steps__step">
                    <img src={shoppingBag} alt="torba" className="section__4Steps__stepImg"/>
                    <p>Spakuj je</p>
                    <span>skorzystaj z worków na śmieci</span>
                </div>
                <div className="section__4Steps__step">
                    <img src={magnifyingGlass} alt="lupa" className="section__4Steps__stepImg"/>   
                    <p>Zdecyduj komu chcesz pomóc</p>
                    <span>wybierz zaufane miejsce</span>
                </div>
                <div className="section__4Steps__step">
                    <img src={loop} alt="cykl" className="section__4Steps__stepImg"/>
                    <p>Zamów kuriera</p>
                    <span>kurier przyjedzie w dogodnym terminie</span>
                </div>
            </div>
            <div className="section__4Steps__button">
                <Link to="/login" className="button">Oddaj rzeczy</Link>
            </div>
        </section>
    )
}