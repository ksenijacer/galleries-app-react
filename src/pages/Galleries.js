import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGalleries, selectGalleries } from '../store/galleries';
import { useLocation, useParams } from 'react-router-dom';
import { selectActiveUser } from '../store/auth';
import SingleGallery  from './../components/SingleGallery';

function Galleries() {
    const dispatch = useDispatch();
    let { id } = useParams();
    const authUser = useSelector(selectActiveUser);
    const { pathname } = useLocation();
    const galleries = useSelector(selectGalleries);
    let title = 'Galleries';
  
    if (!id && pathname === '/my-galleries') {
      title = 'My galleries';
      id = authUser?.id;
    }
    useEffect(() => {
      dispatch(getGalleries({ author: id }));
    }, [id]);
  

  return (
    <div>
      <div>
        <h3 style={{ color: "white", backgroundColor: "orange" }}>{title}</h3>
      </div>
      {galleries ? (
        galleries.data.length ? (
          <div className="card-group mt-2" >
            {galleries.data.map((gallery) => (
              <SingleGallery key={gallery.id} gallery={gallery} />
            ))}
          </div>
        ) : (
          'Nothing to show'
        )
      ) : (
        'Loading...'
      )}
    </div>
  );
}

export default Galleries;