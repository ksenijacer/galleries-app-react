import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    getAll() {},
    get () {},
    add() {},
    edit() {},
    deleteGallery() {},
};


export const galleriesSlice = createSlice({
    name: "galleries",
    initialState: {
        gallery: null,
        // term:null,
        // userId:null,
        page: {
            data: [],
            currentPage: 1,
        },
    },
    reducers: {
        setGalleries(state, action) {
            state.page = action.payload;
        },
        setGallery(state, action) {
            state.gallery = action.payload;
        },

        deleteGallerySuccess(state, { payload }) {
            state.page.data = state.page.data.filter((gallery) => gallery.id !== payload);
          },


      ...middlewareActions,
    },
  });
  
  export const { getAll, get, add, edit, setGalleries, setGallery, deleteGallery, deleteGallerySuccess } 
  = galleriesSlice.actions;
  
  export default galleriesSlice.reducer; 