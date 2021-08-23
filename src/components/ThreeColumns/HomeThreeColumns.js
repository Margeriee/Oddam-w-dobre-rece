import React from 'react';
import './HomeThreeColumns.scss';

export const HomeThreeColumns = () => {
    return (
        <section className="section__ThreeColumns">
            <div className="section__ThreeColumns__OneColumn">
                <span className="number">10</span>
                <p className="title">oddanych worków</p>
                <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className="section__ThreeColumns__OneColumn">
                <span className="number">5</span>
                <p className="title">wspartych organizacji</p>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="section__ThreeColumns__OneColumn">
                <span className="number">7</span>
                <p className="title">zorganizowanych zbiórek</p>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </section>
    )
}