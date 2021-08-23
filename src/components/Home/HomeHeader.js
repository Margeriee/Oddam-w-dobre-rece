import React from 'react';
import {Link} from 'react-router-dom';
import {Decoration} from '../../assets/Decoration';
import Box from './HeroImage.png';
import '../../styles/buttons.scss';
import './HomeHeader.scss';

export const HomeHeader = () => {
    return (
        <section className="section__header">
            <img className="section__header--box" src={Box} alt="box"/>
            <div className="section__header--content">
                <h2>Zacznij pomagać!<br/>Oddaj nichciane rzeczy w zaufane ręce</h2>
                <Decoration/>
                <div className="homeHeader__buttons">
                    <Link to="/login" className="button">Oddaj rzeczy</Link>
                    <Link to="/login" className="button">Zorganizuj zbiórkę</Link>
                </div>
            </div>
        </section>
    )
}