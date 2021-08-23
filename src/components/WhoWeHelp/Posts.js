import React from 'react';
import './Posts.scss'

export const Posts = ({currentPosts, loading}) => {
    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <ul className="organizationsPosts">
           {currentPosts.map(post => (
               <li key={post.id}>
                    <div>
                        <span className="organizationsPosts--institution">{post.institution}</span>
                        <span className="organizationsPosts--description">{post.description}</span>
                    </div>
                    <span className="organizationsPosts--needs">{post.needs}</span>
               </li>
           ))}
        </ul>
    )
}