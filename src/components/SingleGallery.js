import React from 'react';
import { Link } from 'react-router-dom';
import useFormattedDate from '../hooks/useFromattedDate';

function SingleGallery({ gallery }) {
    const { id, name, created_at, first_image, user } = gallery;
    return (
      <div className="row mb-4" >
        <div className="col-12">
          <div className="card h-100" style={{ width: "250px" }}>
            <img src={first_image?.url} className="card-img-top" alt="gallery" />
            <div className="card-body">
              <Link to={`/galleries/${id}`}>
                <h5 className="card-title" style={{ color: "white", backgroundColor: "orange" }}>{name}</h5>
              </Link>
              <p className="card-text" style={{ color: "white", backgroundColor: "lightgreen" }}>
                <Link to={`/authors/${user.id}`}>
                  {user?.first_name} {user?.last_name}
                </Link>
              </p>
              <p className="card-text" style={{ color: "green"}}>Created: {useFormattedDate(created_at)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default SingleGallery;