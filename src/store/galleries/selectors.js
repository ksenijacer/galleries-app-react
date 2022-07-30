export function selectGalleries(state){
    return state.galleries.page;
}

export function selectGallery(state){
    return state.galleries.gallery;
}

export function selectCreateErrors(state) {
    return state.gallery.createErrors;
}

export function selectAddCommentErrors(state) {
    return state.gallery.addCommentErrors;
  }
  