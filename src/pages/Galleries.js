import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGalleries, selectGalleries } from '../store/galleries';
import { useLocation, useParams } from 'react-router-dom';
import { selectActiveUser } from '../store/auth';
import SingleGallery  from './../components/SingleGallery';
import { setSort } from '../store/galleries';
import Pagination from '../components/Pagination';
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

  
    function handlePageSelected(page) {
      console.log("page selected", page);
      dispatch(getGalleries({ page }));
    }
    function handleLoadMore() {
      dispatch(
        getGalleries({
          page: galleries.current_page + 1,
        })
      );
    }
  

  return (
    <><div>
      <div>
        <h3 style={{ color: "white", backgroundColor: "orange" }}>{title}</h3>
      </div>
      {galleries ? (
        galleries.data.length ? (
          <div className="card-group mt-2">
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
    <Pagination
        // lastPage={galleries.last_page}
        onPageSelect={handlePageSelected} /><button
          onClick={handleLoadMore}
          // disabled={galleries.current_page == galleries.last_page}
        >
        Load more
      </button></>
  );
}

export default Galleries;