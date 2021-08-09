import React from 'react';
import {HomeHeader} from './HomeHeader';
import {HomeThreeColumns} from './HomeThreeColumns';
import {FourSteps} from './FourSteps';
import {AboutUs} from './AboutUs';
import './Content.scss';

export const Content = () => {
    return (
        <div className="home">
            <HomeHeader/>
            <HomeThreeColumns/>
            <FourSteps/>
            <AboutUs/>
            <section>
                Komu pomagamy
            </section>
            <section>
                Skontaktuj się z nami
            </section>
        </div>
    )
}