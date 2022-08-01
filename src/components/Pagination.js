import React from "react";

export default function Pagination({ last_page, onPageSelect }) {

  const pages = Array(last_page)
    .fill(0)
    .map((el, index) => index + 1);

  return (
    <div>
      {pages.map((page) => (
        <button 
        className="btn mb-2"
        style={{color: 'white', backgroundColor: 'orange'}}
        onClick={() => onPageSelect(page)} key={page}>
          {page}
        </button>
      ))}
    </div>
  );
}