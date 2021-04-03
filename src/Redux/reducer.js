import movies from '../Service/index'
import {FILTERMARVEL} from './typeActions'
const initialState={
    movies:movies
}
export const mainReducer=(state=initialState,action)=>{
    if(action.type===FILTERMARVEL)
    {
        return {
            movies:state.movies.filter(movie=>movie.typeMovie==='Marvel')
        }
    }
    else{
        return state;
    }

}