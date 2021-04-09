
import {FETCH_PRODUCT_ERROR,FETCH_PRODUCT_SUCCESS,FETCH_PRODUCT_PENDING,FETCH_PRODUCT_DETAIL} from './typeActions'
import { combineReducers } from 'redux'

const initialState={
    movies:null,
    pending:false,
    error:null,
    id:null,
    

}
 const mainReducer=(state=initialState,action)=>{
  switch(action.type)
  {
      case FETCH_PRODUCT_SUCCESS:{
          return {pending:false,
                movies:action.movies
            }
          break
      };
     
      case FETCH_PRODUCT_PENDING:{
          return {...state,
            pending:true,
        }
        break
          
      };
       
         case FETCH_PRODUCT_ERROR:{
          return {...state,
            pending:false,
            error:action.error
        }
        break
          
      };
       
      default: return state
  }

}

 
 export default mainReducer;