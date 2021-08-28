import React from 'react';
import './Pagination.scss';

export const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul>
                {pageNumbers.map(nr => (
                    <li key={nr}>
                        <span className="pagination__button" onClick={() => paginate(nr)}>{nr}</span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}