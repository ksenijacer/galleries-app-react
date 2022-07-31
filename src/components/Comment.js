import React from 'react';
import useFormattedDate from '../hooks/useFromattedDate';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment } from '../store/galleries';
import { selectActiveUser } from './../store/auth/selectors';

function Comment({ comment }) {
  const dispatch = useDispatch();
  const authUser = useSelector(selectActiveUser);

  function handleDelete() {
    const confirm = window.confirm("Do you want to delete comment?")
    if (confirm) {
      dispatch(deleteComment(comment.id));
    }
  }

  return (
    <div className="card-body">
      <div className="comment2">
        <div className="row" style={{border: '2'}}>
          <h6 className="fw-bold text-primary mb-1 col-10" style={{border: '2'}}>
            {comment.user.first_name} {comment.user.last_name}
          </h6>
          {authUser?.id === comment.user.id && (
            <button
              type="button"
              className="btn btn-danger btn-sm mx-1 col-1"
              onClick={handleDelete}
            >
              Delete
            </button>
          )}
        </div>
        <p className="text-muted small mb-0">
          {useFormattedDate(comment.created_at)}
        </p>
      </div>
      <p className="m-0">{comment.content}</p>
      <hr></hr>
    </div>
  );
}

export default Comment;