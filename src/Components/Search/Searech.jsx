import React,{useEffect, useState} from "react";

const Search=(props)=>{
    const [activeSearch, setactiveSearch] = useState(false);
    const handleToggle=() => {
        setactiveSearch(!activeSearch);
    };

    return(
        <div className={`search-form ${activeSearch ? "search-active" : ""}`}>
            <a href="#" onClick={handleToggle} className="search-opener"><i className="fal fa-search"></i></a>
            <form className="form">
                <div className="form-group">
                    <input type="search" className="form-control" placeholder="Serch here..." />
                    <button type="submit" className="btn"><i className="fal fa-search"></i></button>
                </div>
            </form>
        </div>
    )
}

export default Search;
