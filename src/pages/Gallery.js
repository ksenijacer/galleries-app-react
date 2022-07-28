import React from 'react';
 import { useParams } from 'react-router-dom';

 function Gallery() {
   const { id } = useParams();
   return <div>Gallery {id}</div>;
 }

 export default Gallery;