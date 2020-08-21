import React from 'react';
import "./SearchPage.css"
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
    const location = useLocation()
    const term = location.pathname
    console.log(term)
    return (
        <div className="searchPage">
            sp
        </div>
    );
};

export default SearchPage;