import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addComment,
  selectAddCommentErrors,
  setAddCommentErrors,
} from '../store/galleries/index';
import { useParams } from 'react-router-dom';

function CommentForm() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const addCommentErrors = useSelector(selectAddCommentErrors);

  const [content, setContent] = useState('');

  useEffect(() => {
    dispatch(setAddCommentErrors(''));
  }, []);

  function handleSuccessAction() {
    setContent('');
  }

  function handleAddComment() {
    dispatch(
      addComment({
        id,
        content,
        meta: {
          onSuccess: handleSuccessAction,
        },
      })
    );
  }
  return (
    <> 
    < br/>
    <h4 style={{ textAlign: 'left' }}>Comments:</h4>
      <textarea
        required
        className="form-control mt-2"
        rows="5"
        placeholder="Write comment"
        onChange={({ target }) => setContent(target.value)}
        value={content}
      ></textarea>
      {addCommentErrors && (
        <p className="text-danger">{addCommentErrors.content}</p>
      )}
      <button  style={{ color: "white", backgroundColor: "green", float: "right"}}
        type="button"
        className="btn btn-primary btn-sm mt-2 mb-5"
        onClick={handleAddComment}
      >
        Add comment
      </button>
    </>
  );
}

export default CommentForm;