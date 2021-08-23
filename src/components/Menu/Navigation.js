import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.scss';

export const Navigation = () => {
    return (
        <div>
            <nav>
                <ul className="navigation">
                    <li><Link to="/">Start</Link></li>
                    <li><a href="#fourSteps">O co chodzi</a></li>
                    <li><a href="#aboutUs">Poznaj nas</a></li>
                    <li><a href="#whoWeHelp">Fundacja i organizacje</a></li>
                    <li><a href="#contactUs">Kontakt</a></li>
                </ul>
            </nav>
        </div>
    )
}