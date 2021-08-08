import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.scss';

export const Navigation = () => {
    return (
        <div>
            <nav>
                <ul className="navigation">
                    <li><Link to="/">Start</Link></li>
                    <li><a href="/">O co chodzi</a></li>
                    <li><a href="/">Poznaj nas</a></li>
                    <li><a href="/">Fundacja i organizacje</a></li>
                    <li><a href="/">Kontakt</a></li>
                </ul>
            </nav>
        </div>
    )
}