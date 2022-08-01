import {
    setCreateErrors,
    setGalleries,
    setGallery,
    setAddCommentErrors,
    setNewComment,
    setDeletedComment,
    createGallery,
    getGalleries,
    getGallery,
    editGallery,
    deleteGallery,
    addComment,
    deleteComment,
    appendGalleries,
    setCurrentPages,
    setSort
  } from './index';
  
  import { takeLatest, call, put, select } from 'redux-saga/effects';
  import GalleryService from '../../services/GalleryService';
  import CommentService from '../../services/CommentService';
  import { selectSort } from './selectors';
  
  function* getGalleriesHandler({ payload }) {
    
    if (!(payload.page > 1)) {
      yield put(setGalleries(null));
    }
    try {
      const galleries = yield call(GalleryService.getAll, payload);
      if (galleries.current_page > 1) {
        yield put(appendGalleries(galleries));
      } else {
        yield put(setGalleries(galleries));
      }
    } catch (error) {
      console.log('get all galleries', error);
    }
  }
  
  
  function* getGalleryHandler({ payload }) {
    yield put(setGallery(null));
    try {
      const gallery = yield call(GalleryService.get, payload.id);
      yield put(setGallery(gallery));
    } catch (error) {
      console.log('get all gallery', error);
      if (error.response.status === 404) {
        if (typeof payload.meta?.onNotFound === 'function') {
          yield call(payload.meta.onNotFound);
        }
      }
    }
  }

  
  function* addGalleryHandler({ payload }) {
    yield put(setCreateErrors(null));
    try {
      yield call(GalleryService.create, payload.gallery);
      if (typeof payload.meta?.onSuccess === 'function') {
        yield call(payload.meta.onSuccess);
      }
    } catch (error) {
      console.log('addGalleryHandler', error);
      if (error.response.status === 422) {
        yield put(setCreateErrors(error.response.data.errors));
      }
    }
  }
  
  function* editGalleryHandler({ payload }) {
    yield put(setCreateErrors(null));
    try {
      yield call(GalleryService.edit, payload.id, payload.gallery);
      if (typeof payload.meta?.onSuccess === 'function') {
        yield call(payload.meta.onSuccess);
      }
    } catch (error) {
      console.log('addGalleryHandler', error);
      if (error.response.status === 422) {
        yield put(setCreateErrors(error.response.data.errors));
      }
    }
  }
  
  function* deleteGalleryHandler({ payload }) {
    try {
      yield call(GalleryService.delete, payload.id);
      if (typeof payload.meta?.onDelete === 'function') {
        yield call(payload.meta.onDelete);
      }
    } catch (error) {
      console.log('deleteGalleryHandler', error);
    }
  }
  
  function* addCommentHandler({ payload }) {
    yield put(setAddCommentErrors(null));
    try {
      // const comment = yield call(CommentService.add, payload.id, payload.content);
      yield put(setNewComment(yield call(CommentService.add, payload.id, payload.content)));
      if (typeof payload.meta?.onSuccess === 'function') {
        yield call(payload.meta.onSuccess);
      }
    } catch (error) {
      console.log('addCommentHandler', error);
      if (error.response.status === 422) {
        yield put(setAddCommentErrors(error.response.data.errors));
      }
    }
  }
  
  function* deleteCommentHandler({ payload }) {
    try {
      yield call(CommentService.delete, payload);
      yield put(setDeletedComment(payload));
    } catch (error) {
      console.log(error);
    }
  }
  

  export function* watchGetGalleries() {
    yield takeLatest(getGalleries.type, getGalleriesHandler);
  }
  export function* watchGetGallery() {
    yield takeLatest(getGallery.type, getGalleryHandler);
  }  
  export function* watchAddGallery() {
    yield takeLatest(createGallery.type, addGalleryHandler);
  }
  export function* watchEditGallery() {
    yield takeLatest(editGallery.type, editGalleryHandler);
  }
  export function* watchDeleteGallery() {
    yield takeLatest(deleteGallery.type, deleteGalleryHandler);
  }
  export function* watchAddComment() {
    yield takeLatest(addComment.type, addCommentHandler);
  }
  export function* watchDeleteComment() {
    yield takeLatest(deleteComment.type, deleteCommentHandler);
  }