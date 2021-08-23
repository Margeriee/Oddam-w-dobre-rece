import React from 'react';
import {HomeHeader} from '../Home/HomeHeader';
import {HomeThreeColumns} from '../ThreeColumns/HomeThreeColumns';
import {FourSteps} from '../FourSteps/FourSteps';
import {AboutUs} from '../AboutUs/AboutUs';
import {WhoWeHelp} from './../WhoWeHelp/WhoWeHelp';
import {ContactUs} from '../ContacUs/ContactUs';
import './Content.scss';

export const Content = () => {
    return (
        <div className="home">
            <HomeHeader/>
            <HomeThreeColumns/>
            <FourSteps/>
            <AboutUs/>
            <WhoWeHelp/>
            <ContactUs/>
        </div>
    )
}