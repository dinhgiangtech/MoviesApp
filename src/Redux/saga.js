import {fetchProductPending,fetchProductSuccess,fetchProductError} from './actions'
import fetch from 'node-fetch'
import {FETCH_PRODUCT_ERROR,FETCH_PRODUCT_PENDING,FETCH_PRODUCT_SUCCESS} from './typeActions'
import { all, call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import { getDetail } from './Selector'

 
const getMovies=()=>
{
   return fetch('https://api.themoviedb.org/3/movie/77422/similar?api_key=ca6757db8048c2ac657560858f4f9495&language=en-US&page=1')
   
  
}
getDetailMovie=(id)=>{
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ca6757db8048c2ac657560858f4f9495&language=en-US`)
}


export function* fetchMovies(){
    try{
        yield put({type:FETCH_PRODUCT_PENDING})
        const res=yield call(getMovies)
        const data=yield res.json()
        console.log(data.page)
        yield put({type:FETCH_PRODUCT_SUCCESS,movies:data.results})
    }   
    catch(e){
        yield put({type:FETCH_PRODUCT_ERROR,e})
    } 
}
function* fetchDetailMovies(id){
    try{
         yield put({type:FETCH_PRODUCT_PENDING})
        const res=yield call(getDetailMovie(id))
        const data=yield res.json()
        console.log(data.id)
  
     
        yield put({type:FETCH_PRODUCT_SUCCESS,movies:data})
    }   
    catch(e){
        yield put({type:FETCH_PRODUCT_ERROR,e})
    } 
}

function* watcherDetailMovie(){
    yield takeLatest('API_CALL_REQUEST_DETAIL',fetchDetailMovies)
}
function* watcherMovies() {
   yield takeLatest("API_CALL_REQUEST",fetchMovies);
 }
 export default function* rootWatcher(){
     yield all([
         watcherDetailMovie(),
         watcherMovies()
     ])
 }

