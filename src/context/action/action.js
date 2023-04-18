import {ADD_TO_HEART, REMOVE_FROM_HEART} from "./actionType"


export const addToCart = (payload)=>{
    return {
        type: ADD_TO_HEART, payload:payload
    }
}

export const removeFromHeart = (payload)=>{
    return {
        type: REMOVE_FROM_HEART, payload:payload
    }
}