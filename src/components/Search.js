import { useEffect, useState } from "react";
 import { useDispatch, useSelector } from "react-redux";
 import { getGalleries, setSearchTerm } from "../store/galleries/slice";
 import { selectSearchTerm, selectSearchUserId, } from "../store/galleries/selectors";

 export default function Search() {
     const dispatch = useDispatch();

     const term = useSelector(selectSearchTerm);

     const userId = useSelector(selectSearchUserId);

     function handleChangeSearchTerm(event) {
         dispatch(setSearchTerm(event.target.value));
     }

     function handleSearch() {
         dispatch(getGalleries({page: 1, term: term, userId: userId}));
     }

     return (
         <div style={{ padding: "12px" }}>
             <input type="text" onChange={handleChangeSearchTerm} placeholder="Search..." />
             <button onClick={handleSearch}>Search</button>
         </div>
     );
}