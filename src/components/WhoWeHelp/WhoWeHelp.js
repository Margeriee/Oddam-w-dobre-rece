import React, {useState, useEffect} from 'react';
// import ReactPaginate from 'react-paginate';
import axios from 'axios';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {Decoration} from './../../assets/Decoration';
import {Institutions} from './Institutions';
import './WhoWeHelp.scss';
import './../../assets/Decoration.scss';
import './../../styles/buttons.scss';

export const WhoWeHelp = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
    const [link, setLink] = useState("fundations");
    // const [description, setDescription] = useState("W naszej bazie znajdziesz listę zweryfikowanych fundacji")

    useEffect(() => {
        console.log(link);
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get(`http://localhost:3000/${link}`);
            setPosts(res.data);
            setLoading(false);
        }

        fetchPosts()
    }, [link]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const changeLink = (e, link) => {
        e.preventDefault();
        setLink(link);
        console.log(e, link);
    }

    return (
        <section className="section__whoWeHelp" id="whoWeHelp">
            <div className="section__whoWeHelp__container">
                <h2>Komu pomagamy?</h2>
                <Decoration/>
                <div className="section__whoWeHelp__container__institutions" >
                    <div className="section__whoWeHelp__container__institutions--buttons">
                        <a className="button" onClick={e => changeLink(e, 'fundations')}>Fundacje</a>
                        <a className="button" onClick={e => changeLink(e, 'organizations')}>Organizacje</a>
                        <a className="button" onClick={e => changeLink(e, 'localCharity')}>Zbiórki lokalne</a>
                    </div>
                    <Institutions 
                            posts={posts} 
                            currentPosts={currentPosts} 
                            loading={loading} 
                            postsPerPage={postsPerPage} 
                            paginate={paginate}
                            description={""}
                    />
                </div>
            </div>
        </section>
    )
}