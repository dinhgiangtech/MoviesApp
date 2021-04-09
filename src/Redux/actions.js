import {FETCH_PRODUCT_PENDING,FETCH_PRODUCT_ERROR,FETCH_PRODUCT_SUCCESS} from './typeActions'
export const fetchProductPending=()=>{
    return{
        type:FETCH_PRODUCT_PENDING,
       
    }
}
export const fetchProductSuccess=(data)=>{
    return{
        type:FETCH_PRODUCT_SUCCESS,
        movies:data.results,
    }
}
export const fetchProductError=(error)=>{
    return{
        type:FETCH_PRODUCT_ERROR,
        error:error,
    }
}