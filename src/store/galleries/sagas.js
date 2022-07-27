import { put, call, takeLatest } from "redux-saga/effects";
import { getAll, get, setGalleries, setGallery, add, edit, setPaginatedGalleries } from "./slice";
import GalleryService from "../../services/GalleryService";

function* handleGetGalleries(action){
    try{
        const galleries = yield call(galleryService.getGalleries, action.payload?.page, action.payload?.term, action.payload?.userId);
        if(action.payload?.page > 1){
            yield put(setPaginatedGalleries(galleries));
        } else {
            yield put(setGalleries(galleries));
        }
    } catch (error){
        alert(error.message);
    }
}

export function* watchGet(){
    yield takeLatest(get.type, handleGet);
}
