import React from 'react';

function SearchBar() {
    return (
        <form className="d-inline-block my-2 my-lg-0 mx-auto" style={{width: '50%'}}>
            <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Buscar" style={{width: '100%'}}/>
        </form>
    )
}

export default SearchBar;
