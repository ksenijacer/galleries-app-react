// import React from "react";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { deleteCar } from "../store/cars";

// function SingleGallery({
  
// }) {
//   const dispatch = useDispatch();
//   const history = useHistory();

//   const handleEdit = () => {
//     history.push(`edit/${id}`);
//   };

//   const handleDelete = async () => {
//     const response = prompt(
//       "Are you sure you want to delete this car ?\n Enter 'Yes' if you are"
//     );

//     if (response !== "Yes") {
//       return;
//     }

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