import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createGallery, editGallery, getGallery, selectCreateErrors,
         selectGallery, setCreateErrors } from '../store/galleries/index';
import { useHistory, useParams } from 'react-router-dom';
import { selectActiveUser } from '../store/auth';

function CreateGallery() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const galleryForUpdate = useSelector(selectGallery);
  const authUser = useSelector(selectActiveUser);

  const [gallery, setGallery] = useState({
    name: '',
    description: '',
    url: [''],
  });
  const createErrors = useSelector(selectCreateErrors);


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
    dispatch(setCreateErrors(''));
  }, [id]);

  useEffect(() => {
    if (id && galleryForUpdate && authUser?.id) {
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
          gallery: gallery,
          meta: {onSuccess: handleActionSuccess},
        })
      );
    } else {
      dispatch(
        createGallery({
          gallery: gallery,
          meta: {
            onSuccess: handleActionSuccess
          },
        })
      );
    }
  };

  function handleActionSuccess() {
    history.push(id ? `/galleries/${id}` : '/my-galleries');
  }

  function handleNotFoundAction() {
    history.push('/', { replace: true });
  }

  const handleResetForm = () => {
    setGallery({
      name: '',
      description: '',
      url: [''],
    });
  };

  
  if (id && (!galleryForUpdate || !authUser?.id)) {
    return <div>Loading...</div>;
  } else if (id && galleryForUpdate?.user_id !== authUser?.id) {
    handleNotFoundAction();
  }


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

  return (
    <div >
      <h3 style={{ color: "white", backgroundColor: "orange" }}>{id ? 'Edit gallery' : 'Create new gallery'}</h3>
      <form onSubmit={handleSubmit}>
        <input style={{ margin: 5, width: 500}}
          placeholder="Name your gallery"
          name="name"
          type="text"
          onChange={({ target }) =>
            setGallery({ ...gallery, [target.name]: target.value })
          }
          value={gallery.name}
        />
        {createErrors && <p className="text-danger">{createErrors.name}</p>}
        < br/>


        <textarea style={{ margin: 5, width: 500}}
          placeholder="Description"
          name="description"
          rows="5"
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
            <div>
              <input style={{ margin: 5, width: 500}}
                required
                placeholder="Image url"
                name="url"
                type="url"
                onChange={({ target }) => handleUpdateUrl(target, index)}
                value={gallery.url[index]}
              />
              < br/>

              <div className="btn btn-group-sm gap-1 col-3"  style={{ margin: 5 }} >
                <button
                  className="btn btn-primary mb-2"
                  disabled={index === 0}
                  type="button"
                  onClick={() => handleChangeUrlPosition(index, -1)}>Move Up
                </button>

                <button
                  className="btn btn-primary mb-2"
                  disabled={gallery.url.length - 1 === index}
                  type="button"
                  onClick={() => handleChangeUrlPosition(index, 1)}>Move Down
                </button>

                <button
                  className="btn btn-sm btn-danger mb-2 "
                  disabled={gallery.url.length === 1}
                  type="button"
                  onClick={() => handleRemoveUrl(index)}>Remove
                </button>
                < br/>
              </div>
            </div>
            {createErrors && (
              <div className="text-danger">{createErrors[`url.${index}`]}</div>
            )}
          </div>
        ))}
        <br/>
        <button 
        className="btn btn-sm btn-primary my-2 mx-3" 
        style={{ color: "white", backgroundColor: "green" }}  
        onClick={handleSubmit}>
          Submit
        </button>
        <button
          className="btn btn-sm btn-warning my-2 mx-3"
          type="button"
          onClick={handleActionSuccess}>Cancel
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