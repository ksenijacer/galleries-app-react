// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// function Search() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [search, setSearch] = useState('');

//   function handleFilter(e) {
//     e.preventDefault();
//     setSearch('');
//     navigate({
//       pathname: location.pathname,
//       search: search && `filter=${search}`,
//     });
//   }

//   return (
//     <form onSubmit={handleFilter}>
//       <div className="input-group">
//         <div className="form-outline">
//           <input
//             type="search"
//             id="form1"
//             className="form-control"
//             value={search}
//             onChange={({ target }) => setSearch(target.value)}
//             placeholder="Search"
//           />
//         </div>
//         <button className="btn btn-primary" onClick={handleFilter}>
//           <i className="fas fa-search">Filter</i>
//         </button>
//       </div>
//     </form>
//   );
// }

// export default Search;