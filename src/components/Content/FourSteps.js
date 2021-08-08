import React from 'react';
import {Decoration} from '../../assets/Decoration';
import {Link} from 'react-router-dom';
import Icon from './Icon.png'
import Icon1 from './Icon-1.png'
import Icon2 from './Icon-2.png'
import Icon3 from './Icon-3.png'
import './FourSteps.scss';

export const FourSteps = () => {
    return (
        <section className="section__4Steps">
            <div className="section__4Steps__title">
                <div>Wystarczą 4 proste kroki</div>
                <Decoration/>
            </div>
            <div className="section__4Steps__allSteps">
                <div className="section__4Steps__step">
                    <img src={Icon} alt="Icon" className="section__4Steps__stepImg"/>
                    <p>Wybierz rzeczy</p>
                    <span>ubrania, zabawki, sprzęt i inne</span>
                </div>
                <div className="section__4Steps__step">
                    <img src={Icon1} alt="Icon1" className="section__4Steps__stepImg"/>
                    <p>Spakuj je</p>
                    <span>skorzystaj z worków na śmieci</span>
                </div>
                <div className="section__4Steps__step">
                    <img src={Icon2} alt="Icon2" className="section__4Steps__stepImg"/>   
                    <p>Zdecyduj komu chcesz pomóc</p>
                    <span>wybierz zaufane miejsce</span>
                </div>
                <div className="section__4Steps__step">
                    <img src={Icon3} alt="Icon3" className="section__4Steps__stepImg"/>
                    <p>Zamów kuriera</p>
                    <span>kurier przyjedzie w dogodnym terminie</span>
                </div>
            </div>
            <Link to="/login" className="button">Oddaj rzeczy</Link>
        </section>
    )
}