import React from 'react';
import {Decoration} from '../../assets/Decoration';
import People from './People.png';
import Signature from './Signature.svg';
import './AboutUs.scss';

export const AboutUs = () => {
    return (
        <section className="section__aboutUs" id="aboutUs">
            <div className="section__aboutUs__description">
                <div>
                    <h2>O nas</h2>
                    <Decoration/>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>
                    <img src={Signature} alt="Signature" className="section__aboutUs__signature" />
                </div>
            </div>
            <img src={People} alt="People" className="section__aboutUs__image" />
        </section>
    )
}