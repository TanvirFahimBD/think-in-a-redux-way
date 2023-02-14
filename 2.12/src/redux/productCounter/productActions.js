import { ADD_PRODUCT } from './productActionTypes'

export const productAdd = (value) => {
    return {
        type: ADD_PRODUCT,
        payload: value
    }
}