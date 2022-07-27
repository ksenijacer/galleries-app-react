import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    getAll() {},
    get () {},
    add() {},
    edit() {},
    delete() {},
};


export const galleriesSlice = createSlice({
    name: "galleries",
    initialState: {
        gallery: null,
        page: {
            data: [],
            current_page: 1,
            last_page: 0,
        },
    },
    reducers: {
        setGalleries: (state, action) => {
            state.page = action.payload;
        },
        setGallery: (state, action) => {
            state.gallery = action.payload;
        },


      ...middlewareActions,
    },
  });
  
  export const { getAll, get, add, edit, setGalleries, setGallery, } = galleriesSlice.actions;
  
  export default galleriesSlice.reducer; 