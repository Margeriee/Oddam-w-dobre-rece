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
                        <a className="pagination__button" href='javascript:void(0)' onClick={() => paginate(nr)}>{nr}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}