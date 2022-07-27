import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleCar from "../pages/SingleGallery";
import { getAll, selectCars } from "../store/galleries";

function AppCars() {

const dispatch = useDispatch();

const cars = useSelector(selectCars);

useEffect(() => {
  dispatch(getAll());
}, []);

return (
  <div>
    <h2>Galleries</h2>
    {galleries.data.length > 0 && (
      <ul>
        {galleries.data.map((gallery) => (
          <SingleCar {...gallery} key={gallery.id} />
        ))}
      </ul>
    )}
    {galleries.data.length == 0 && <p>No galleries</p>}
  </div>
);
}