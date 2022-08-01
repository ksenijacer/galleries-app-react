import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    getGalleries() {},
    getGallery() {},
    createGallery() {},
    editGallery() {},
    deleteGallery() {},
    addComment() {},
    deleteComment() {},
};


export const galleriesSlice = createSlice({
    name: "galleries",
    initialState: {
        gallery: null,
        createErrors: null,
        addCommentErrors: null,
        sort: null,
        page: {
            data: [],
            current_page: 1,
            last_page:1,
            total: 0,
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
        appendGalleries(state, { payload }) {
            state.galleries = {
              ...payload,
              data: [...state.galleries.data, ...payload.data],
            };
        },

        setCurrentPage: (state, action) => {
            state.galleries.current_page = action.payload;
        },

        setCreateErrors(state, { payload }) {
          state.createErrors = payload;
        },

        setAddCommentErrors(state, { payload }) {
          state.addCommentErrors = payload;
        },
        setNewComment(state, { payload }) {
          state.gallery.comments = [...state.gallery.comments, payload];
        },
        setDeletedComment(state, { payload }) {
          const updated = state.gallery.comments.filter(
            (comment) => comment.id !== payload);
          state.gallery.comments = updated;
        },


      ...middlewareActions,
    },
  });
  
  export const { setCreateErrors,
    setGalleries,
    setGallery,
    setAddCommentErrors,
    setNewComment,
    setDeletedComment,
    appendGalleries,
    setCurrentPage,
  
    
    getGalleries,
    getGallery,
    createGallery,
    editGallery,
    deleteGallery,
    addComment,
    deleteComment,} 
  = galleriesSlice.actions;
  
  export default galleriesSlice.reducer; 