import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createGallery,
  editGallery,
  getGallery,
  selectCreateErrors,
  selectGallery,
} from '../store/gallery/index';
import { useNavigate, useParams } from 'react-router-dom';
import { selectActiveUser } from '../store/auth';

function CreateGallery() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const galleryForUpdate = useSelector(selectGallery);
  const authUser = useSelector(selectActiveUser);

  const [gallery, setGallery] = useState({
    name: '',
    description: '',
    url: [''],
  });
  const createErrors = useSelector(selectCreateErrors);

  // If id param exist -> get gallery
  useEffect(() => {
    if (id) {
      dispatch(
        getGallery({
          id,
          meta: { onNotFound: handleNotFoundAction },
        })
      );
    } else {
      handleResetForm();
    }
  }, [id]);

  // If gallery belongs to the user -> fill the form
  useEffect(() => {
    if (
      id &&
      galleryForUpdate &&
      authUser?.id &&
      galleryForUpdate?.user_id === authUser?.id
    ) {
      const { name, description, images } = galleryForUpdate;
      const url = images?.map(({ url }) => url);
      setGallery({ name, description, url });
    }
  }, [galleryForUpdate, authUser?.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(
        editGallery({
          id,
          gallery,
          meta: { onSuccess: handleActionSuccess },
        })
      );
    } else {
      dispatch(
        createGallery({
          gallery,
          meta: { onSuccess: handleActionSuccess },
        })
      );
    }
  };

  function handleActionSuccess() {
    navigate(id ? `/galleries/${id}` : '/my-galleries');
  }

  function handleNotFoundAction() {
    navigate('/', { replace: true });
  }

  const handleResetForm = () => {
    setGallery({
      name: '',
      description: '',
      url: [''],
    });
  };

  // show loading... while data is loading, if gallery does not exist -> redirect
  if (id && (!galleryForUpdate || !authUser?.id)) {
    return <div>Loading...</div>;
  } else if (id && galleryForUpdate?.user_id !== authUser?.id) {
    handleNotFoundAction();
  }

  //Image URL - handlers
  const handleUpdateUrl = (target, index) => {
    const newUrl = [...gallery.url];
    newUrl[index] = target.value;
    setGallery({ ...gallery, url: newUrl });
  };

  const handleAddUrl = () => {
    setGallery({ ...gallery, url: [...gallery.url, ''] });
  };

  const handleRemoveUrl = (index) => {
    if (gallery.url.length > 1) {
      const newUrl = [
        ...gallery.url.slice(0, index),
        ...gallery.url.slice(index + 1),
      ];
      setGallery({ ...gallery, url: newUrl });
    }
  };

  const handleChangeUrlPosition = (index, step) => {
    const newUrl = gallery.url.filter((product, i) => i !== index);
    newUrl.splice(Math.max(index + step, 0), 0, gallery.url[index]);
    setGallery({ ...gallery, url: newUrl });
  };
  //Image URL - handlers - end
  return (
    <div className="container">
      <h3>{id ? 'Edit gallery' : 'Create New Gallery'}</h3>
      <form onSubmit={handleSubmit} className="mb-5">
        <input
          className="form-control mb-3"
          placeholder="name"
          name="name"
          type="text"
          onChange={({ target }) =>
            setGallery({ ...gallery, [target.name]: target.value })
          }
          value={gallery.name}
        />
        {createErrors && <p className="text-danger">{createErrors.name}</p>}

        <textarea
          className="form-control mb-3"
          placeholder="description"
          name="description"
          rows="4"
          onChange={({ target }) =>
            setGallery({ ...gallery, [target.name]: target.value })
          }
          value={gallery.description}
        />
        {createErrors && (
          <p className="text-danger">{createErrors.description}</p>
        )}

        {gallery?.url?.map((image, index) => (
          <div key={index}>
            <div className="d-flex">
              <input
                required
                className="form-control mb-2"
                placeholder="image"
                name="url"
                type="url"
                onChange={({ target }) => handleUpdateUrl(target, index)}
                value={gallery.url[index]}
              />

              <div className="btn-group btn-group-sm gap-1 col-3">
                <button
                  className="btn btn-primary mb-2"
                  disabled={index === 0}
                  type="button"
                  onClick={() => handleChangeUrlPosition(index, -1)}
                >
                  Move Up
                </button>
                <button
                  className="btn btn-primary mb-2"
                  disabled={gallery.url.length - 1 === index}
                  type="button"
                  onClick={() => handleChangeUrlPosition(index, 1)}
                >
                  Move Down
                </button>
                <button
                  className="btn btn-sm btn-danger mb-2 "
                  disabled={gallery.url.length === 1}
                  type="button"
                  onClick={() => handleRemoveUrl(index)}
                >
                  Remove
                </button>
              </div>
            </div>
            {createErrors && (
              <div className="text-danger">{createErrors[`url.${index}`]}</div>
            )}
          </div>
        ))}
        <button className="btn btn-sm btn-primary my-2 mx-3">
          {id ? 'Edit gallery' : 'Add gallery'}
        </button>
        <button
          className="btn btn-sm btn-warning my-2 mx-3"
          type="button"
          onClick={handleResetForm}
        >
          clear form
        </button>
        <button
          className="btn btn-sm btn-warning my-2 mx-3"
          type="button"
          onClick={handleActionSuccess}
        >
          cancel
        </button>
        <button
          className="btn btn-sm btn-info my-2 mx-3 "
          type="button"
          onClick={handleAddUrl}
        >
          Add another URL
        </button>
      </form>
    </div>
  );
}

export default CreateGallery;