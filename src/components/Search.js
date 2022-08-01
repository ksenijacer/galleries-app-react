import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

function Search() {
  const location = useLocation();
  const history = useHistory();
  const [search, setSearch] = useState('');

  function handleFilter(e) {
    e.preventDefault();
    setSearch('');
    history.push({
      pathname: location.pathname,
      search: `filter=${search}`,
    });
  }

  return (
    <form onSubmit={handleFilter}>
      <div className="input-group" style={{padding: 5,}}>
        <div className="form-outline">
          <input style={{}}
            type="search"
            id="search-form"
            className="form-control"
            value={search}
            onChange={({ target }) => setSearch(target.value)}
            placeholder="Search galleries"
          />
        </div>
        <button
          className="btn" 
          style={{color:'white', backgroundColor: 'green'}}
          onClick={handleFilter}
        >
          <i className="fas fa-search">Filter</i>
        </button>

      </div>
    </form>
  );
}

export default Search;