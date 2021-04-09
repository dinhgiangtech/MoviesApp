// redux/selectors.js

export const getState = (store) => store.movies
export const getMarvel=(store)=>getState(store).filter(movie=>movie.typeMovie==='Mavel')
export const getOscar=(store)=>getState(store).filter(movie=>movie.typeMovie==='Oscar')
export const getDC=(store)=>getState(store).filter(movie=>movie.typeMovie==='DC')
export const getDetail=(store,id)=>getState(store).filter(movie=>movie.id===id)
