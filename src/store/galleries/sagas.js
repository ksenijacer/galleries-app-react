import { put, call, takeLatest } from "redux-saga/effects";
import { getAll, get, setGalleries, setGallery, add, edit, } from "./slice";
import GalleryService from "../../services/GalleryService";

function* handleGet(action){
    try {
        const gallery = yield call(GalleryService.get, action.payload);
        yield put(setGallery(gallery));
    } catch (error) {
        alert(error.message);
    }
}

function* handleAdd(action){
    try {
        const newGallery = yield call(GalleryService.create, action.payload);
        yield put(setGalleriesWithNewGallery(newGallery));
    } catch (error) {
        alert("Title should be at least 2 and at most 255 characters long and images must be in jpg, jpeg or png format");
    }
}

function* handleEdit(action){
    try {
        const gallery = yield call(galleryService.edit, payload.id, payload.gallery);
        yield put(setGalleriesWithNewGallery(gallery));
        if (typeof payload.meta?.onSuccess === "function") {
            yield call(payload.meta.onSuccess);
          }
        } catch (error) {
          console.log(error);
        }
      }

function* handleDeleteGallery(action){
    try {
        console.log(action);
        yield call(galleryService.deleteGallery, action.payload);
        const galleries = yield call(galleryService.getGalleries, 1, null, null);
        yield put(setGalleries(galleries));
    } catch (error) {
        alert(error.message);
    }
}

export function* watchGetAll(){
    yield takeLatest(getAll.type, handleGetAll
}

export function* watchGet(){
    yield takeLatest(get.type, handleGet);
}