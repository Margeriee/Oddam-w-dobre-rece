import React from 'react';
import {HomeHeader} from './HomeHeader';
import {HomeThreeColumns} from './HomeThreeColumns';
import './Content.scss';
import HeroImage from './HeroImage.png';

export const Content = () => {
    return (
        <div className="home">
            <section className="section__Header">
                <img src={HeroImage} alt="picture"></img>
                <div className="section__Header__HomeHeader">
                    <HomeHeader/>
                </div>
            </section>
            <HomeThreeColumns/>
            <section className="section__4Steps">
                Cztery kroki
            </section>
            <section className="section__aboutUs">
                O nas
            </section>
            <section>
                Komu pomagamy
            </section>
            <section>
                Skontaktuj się z nami
            </section>
        </div>
    )
}