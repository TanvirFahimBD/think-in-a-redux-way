import { ADD_PRODUCT } from './productActionTypes'
const initialState = {
    items: [],
    count: 0,
    price: 0,
}


export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            const selected = state.items.find(item => item.id === action.payload.id);
            const notSelected = state.items.filter(item => item.id !== action.payload.id);
            if (selected) {
                return {
                    ...state,
                    items: [notSelected, { ...selected, quantity: selected.quantity + 1 }],
                    count: state.count + 1,
                    price: state.price + action.payload.price
                };
            } else {
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, quantity: 1 }],
                    count: state.count + 1,
                    price: state.price + action.payload.price
                };
            }
        default:
            return state;
    }

}