import { put, call, takeLatest } from "redux-saga/effects";
import { getAll, get, setGalleries, setGallery, add, edit, deleteGallery, deleteGallerySuccess } from "./slice";
import GalleriesService from "../../services/GalleriesService";

function* getGalleriesHandler() {
    try {
      const galleries = yield call(GalleriesService.getAll, payload);
      yield put(
        setGalleries({
          galleries
        })
      );
    } catch (e) {
      console.error(e);
    }
  }
  
  function* getGalleryHandler({ payload: galleryId }) {
    try {
      const gallery = yield call(GalleriesService.get, galleryId);
      yield put(setGallery(gallery));
      if (payload.meta.onSuccess) {
        yield call(payload.meta.onSuccess);
      }
    } catch (e) {
      console.error(e);
      if (payload.meta.onError) {
        yield call(payload.meta.onError);
      }
    }

    function* deleteGalleryHandler({ payload: galleryId }) {
        try {
          yield call(GalleriesService.delete, galleryId);
          yield put(deleteGallerySuccess(galleryId));
        } catch (e) {
          console.log(e);
        }
      }
      
      function* createGalleryHandler({ payload }) {
        try {
          yield call(GalleriesService.add, payload.gallery);
          if (typeof payload.meta?.onSuccess === "function") {
            yield call(payload.meta.onSuccess);
          }
        } catch (error) {
          console.log(error);
        }
      }
      
      function* editGalleryHandler({ payload }) {
        try {
          yield call(GalleriesService.edit, payload.id, payload.gallery);
          if (typeof payload.meta?.onSuccess === "function") {
            yield call(payload.meta.onSuccess);
          }
        } catch (error) {
          console.log(error);
        }
      }
  }


  export function* watchGetGalleries() {
    yield takeLatest(getAll.type, getGalleriesHandler);
  }
  export function* watchGetMovie() {
    yield takeLatest(get.type, getGalleryHandler);
  }

  export function* watchDeleteGallery() {
    yield takeLatest(deleteGallery.type, deleteGalleryHandler);
  }
  export function* watchCreateGallery() {
    yield takeLatest(add.type, createGalleryHandler);
  }
  export function* watchEditGallery() {
    yield takeLatest(edit.type, editGalleryHandler);
  }