export function selectGalleries(state){
    return state.galleries.page;
}

export function selectGallery(state){
    return state.galleries.gallery;
}

export function selectCreateErrors(state) {
    return state.galleries.createErrors;
}

export function selectCurrentPage(state) {
    return state.galleries.galleries?.current_page;
}

export function selectAddCommentErrors(state) {
    return state.galleries.addCommentErrors;
  }

export function selectSort(state) {
  return state.galleries.sort;
}
  
