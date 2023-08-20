import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-inline-block my-2 my-lg-0 mx-auto"
      style={{ width: '50%' }}
    >
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Buscar"
        aria-label="Buscar"
        style={{ width: '100%' }}
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchBar;
