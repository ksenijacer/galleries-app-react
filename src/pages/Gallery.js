import React, { useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  getGallery,
  selectGallery,
  deleteGallery,
} from '../store/galleries/index';
import useFormattedDate from '../hooks/useFromattedDate';
import { selectActiveUser } from '../store/auth';
import CommentForm from '../components/CommentForm';
import Comment from './../components/Comment';
import CarouselComponent from '../components/CarouselComponent';

function SingleGallery() {
  const history = useHistory();
  const dispatch = useDispatch();
  const authUser = useSelector(selectActiveUser);
  const { id } = useParams();

  const gallery = useSelector(selectGallery);

  function handleNotFoundAction() {
    history.push('/', { replace: true });
  }

  useEffect(() => {
    dispatch(
      getGallery({
        id,
        meta: { onNotFound: handleNotFoundAction },
      })
    );
  }, []);

  if (!gallery) {
    return <div className="container">Loading...</div>;
  }

  const {
    id: galleryId,
    name,
    created_at,
    images,
    description,
    user,
    comments,
  } = gallery;

  function handleDeleteSuccess() {
    history.push('/my-galleries');
  }

  function handleDelete() {
    const confirm = window.confirm("Do you want to delete gallery?")
    if (confirm) {
      dispatch(
        deleteGallery({
          id: galleryId,
          meta: { onDelete: handleDeleteSuccess },
        })
      );
    }
  }

  function handleEdit() {
    history.push(`/edit-gallery/${galleryId}`);
  }

  return (
    <div className="container">
      <div className="">
        <h3>{name}</h3>
        {authUser?.id === user?.id && (
          <>
            <button
              type="button"
              className="btn btn-warning btn-sm mx-1 col-1"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger btn-sm mx-1 col-1"
              onClick={handleDelete}
            >
              Delete
            </button>
          </>
        )}
      </div>
      <p>
        Author:{' '}
        <Link to={`/authors/${user?.id}`}>
          {user?.first_name} {user?.last_name}
        </Link>
      </p>
      <p>Created at: {created_at}</p>
      <p>Description: {description}</p>
      <CarouselComponent images={images} />
      <div className="">
        {comments?.map((comment, index) => (
          <div key={index} className="">
            <Comment comment={comment} />
          </div>
        ))}
        {authUser?.id && <CommentForm />}
      </div>
    </div>
  );
}
export default SingleGallery;