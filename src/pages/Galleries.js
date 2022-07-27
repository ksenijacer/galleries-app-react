import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Pagination from '../components/Pagination';
import { selectGalleries } from '../store/galleries/selector';
import { getAllGalleries } from '../store/galleries/slice';


function Galleries() {
  const { myGalleries } = useParams();
  const dispatch = useDispatch()
  const galleriesList = useSelector(selectGalleries)
  

useEffect(() => {
    dispatch(getAll()) 
}, [])
  


  return (
    <div>
    <div className='row d-flex justify-content-center'>
       {galleriesList.length > 0 ? 
       
       galleriesList.map(gallery=>(
          <div className="card border-dark col-md-3 m-2" key={gallery.id}>
              <Link to={`/galleries/${gallery.id}`}><h2>{gallery.title}</h2></Link>
              <div className="image">
              <img className='image-src' src={gallery.images[0].image_url} alt="" />
              </div>
              <p><small>Author:</small> <Link to={`/authors/${gallery.user_id}`}><strong>{gallery.user.first_name+ " "+ gallery.user.last_name}</strong></Link></p>
              <p className='text-center'>{gallery.created_at}</p>
          </div>
       )) : <p>There is no Galleries to show</p>}
      </div>

      <div className="row">
       <Pagination/>
      </div>
    
    </div>
  )
}

export default Galleries