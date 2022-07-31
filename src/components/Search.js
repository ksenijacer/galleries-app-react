// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { setFilters } from "../store/cars";

// export default function CarSearch() {
//   const dispatch = useDispatch();

//   const [searchTerms, setSearchTerms] = useState({
//     name: "",
//     description: "",
    
//   });

//   useEffect(() => {
//     dispatch(setFilters(searchTerms));
//   }, [searchTerms]);

//   return (
//     <>
//       <input
//         type="text"
//         value={searchTerms.name}
//         placeholder="Brand"
//         onChange={({ target }) =>
//           setSearchTerms({ ...searchTerms, brand: target.value })
//         }
//       />
//       <input
//         type="text"
//         value={searchTerms.model}
//         placeholder="Model"
//         onChange={({ target }) =>
//           setSearchTerms({ ...searchTerms, model: target.value })
//         }
//       />
//     </>
//   );
// }