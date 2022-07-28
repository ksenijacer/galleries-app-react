import React, { useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import { get } from "../store/galleries/slice";
import { selectGallery } from "../store/galleries/selectors";


export default function SingleGallery() {
    const dispatch = useDispatch();
    const history = useHistory();
  
    const { id } = useParams();
    const gallery = useSelector(selectGallery);
  
  
    useEffect(() => {
      if (id) {
        dispatch(
          get({
            id,
            meta: {
              onError: () => history.push("/galleries"),
            },
          })
        );
      }
    }, [id]);
  
    if (!gallery) {
      return null;
    }

  return (
    <div style={{ marginLeft: 5 }}>
      <h2>{gallery.title}</h2>
      <h4>{gallery.description}</h4>
      <h6>{gallery.user_id}</h6>

    </div>
  );
}

//     dispatch(delete(id));
//   };

//   return (
//     <li
//       style={{
//         border: "1px solid black",
//         marginBottom: "5px",
//         padding: 5,
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <span>Brand: {brand}</span>
//       <span>Model: {model}</span>
//       <span>Year: {year}</span>
//       <span>Max Speed: {max_speed}</span>
//       <span>{is_automatic ? "Is" : "Not"} Automatic </span>
//       <span>Engine: {engine}</span>
//       <span>Number of doors: {number_of_doors}</span>
//       <button onClick={() => handleDelete()}>Delete</button>
//       <button onClick={() => handleEdit()}>Edit</button>
//     </li>
//   );
// }

// export default SingleCar;