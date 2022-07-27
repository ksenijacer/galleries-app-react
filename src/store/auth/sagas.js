import { put, call, takeLatest } from "redux-saga/effects";
import { login, logout, register, getActiveUser, setActiveUser, setToken, } from "./slice";
import AuthService from "../../services/AuthService";

function* handleRegister(action) {
    try {
        console.log({
            action
        })
        const data = yield call(AuthService.register, action.payload.credentials)
        yield put(setToken(data.token))
            if (action.payload.meta.onSuccess) {
                yield call(action.payload.meta.onSuccess)
            }
        
        } catch (error) {
            alert("Invalid input values");
        }
}

function* handleLogin(action){
    try {
        const {user, token} = yield call(AuthService.login, action.payload);
        yield put(setToken(token));
        yield put(setActiveUser(user));
    } catch (error) {
        alert("Password must contain at least one number and at least 8 characters");
    }
}

function* handleLogout(){
    try {
        yield call(AuthService.logout);
        yield put(setToken(null));
        yield put(setActiveUser(null));
    } catch (error) {
        yield put(setToken(null));
        yield put(setActiveUser(null));
        alert("Can`t logout as a guest");
    }
}

function* handleGetActiveUser(){
    try {
        const activeUser = yield call(AuthService.getActiveUser);
        yield put(setActiveUser(activeUser));
    } catch (error) {
        yield put(setToken(null));
        yield put(setActiveUser(null));
        console.log("Session expired");
    }
}



export function* watchLogin(){
    yield takeLatest(login.type, handleLogin);
}

export function* watchLogout(){
    yield takeLatest(logout.type, handleLogout);
}

export function* watchRegister(){
    yield takeLatest(register.type, handleRegister);
}

export function* watchGetActiveUser(){
    yield takeLatest(getActiveUser.type, handleGetActiveUser);
}