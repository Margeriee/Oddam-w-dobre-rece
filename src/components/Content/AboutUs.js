import React from 'react';
import {Decoration} from '../../assets/Decoration';
import People from './People.png';
import './AboutUs.scss';

export const AboutUs = () => {
    return (
        <section className="section__aboutUs">
            <div className="section__aboutUs__description">
                <div>
                    <p>O nas</p>
                    <Decoration/>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                </div>
            </div>
            <img src={People} alt="People" className="section__aboutUs__image"></img>
        </section>
    )
}