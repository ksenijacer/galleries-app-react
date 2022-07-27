export function selectGalleries(state){
    return state.galleries.page;
}

export function selectGallery(state){
    return !!state.galleries.gallery;
}