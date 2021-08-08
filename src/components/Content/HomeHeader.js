import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/buttons.scss';
import './HomeHeader.scss';
import {Decoration} from '../../assets/Decoration';

export const HomeHeader = () => {
    return (
        <section className="section__Header">
                <p>Zacznij pomagać!</p>
                <p>Oddaj nichciane rzeczy w zaufane ręce</p>
                <Decoration/>
                <div className="homeHeader__buttons">
                    <Link to="/login" className="button">Oddaj rzeczy</Link>
                    <Link to="/login" className="button">Zorganizuj zbiórkę</Link>
                </div>
        </section>
    )
}