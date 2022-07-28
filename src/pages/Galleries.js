import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { selectGalleries } from "../store/galleries/selectors";
import { deleteGallery, getAll } from "../store/galleries/slice";

export default function AppMovies() {
  const dispatch = useDispatch();
  const history = useHistory();

  const galleries = useSelector(selectGalleries);

  const handleDelete = (id) => {
    dispatch(deleteGallery(id));
  };

  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <div style={{ marginLeft: 5 }}>
      <h2>Galleries</h2>
      {galleries.data.map((gallery) => (
        <div
          key={gallery.id}
          style={{
            border: "3px solid orange",
            width: 300,
            marginTop: 15,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p>
            <strong>Title:</strong> {gallery.title}
          </p>
          {/* <Link to={`/galleries/${gallery.id}`}>View gallery</Link>
          <button onClick={() => history.push(`/edit/${gallery.id}`)}>
            Edit
          </button> */}
          <button onClick={() => handleDelete(gallery.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}