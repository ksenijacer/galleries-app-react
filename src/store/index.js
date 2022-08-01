import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga/";
import authReducer from "./auth/slice";
import sagas from "./saga";
import galleriesReducer from  "./galleries/slice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
      auth: authReducer,
      galleries: galleriesReducer,
      

    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({ thunk: false, serializableCheck: false
        }),
        sagaMiddleware,

      ],
    });

for (const saga in sagas) {
    sagaMiddleware.run(sagas[saga]);
}

export default store;