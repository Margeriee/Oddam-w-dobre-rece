import React from 'react';
import {Posts} from './Posts';
import {Pagination} from './Pagination';
import './Institutions.scss'

export const Institutions = ({description, posts, loading, postsPerPage, currentPosts, paginate}) => {

    return (
        <>
            <div className="section__whoWeHelp__container__descriptions">
                <p>{description}</p>
                <Posts currentPosts={currentPosts} loading={loading}/>
            </div>
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
        </>
    )
}