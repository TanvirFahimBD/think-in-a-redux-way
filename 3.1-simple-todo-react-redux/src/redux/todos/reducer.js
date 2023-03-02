import { ADDED, TOGGLED, COLORESELECTED, DELETED, ALLCOMPLETED, CLEARCOMPLETED } from './actionTypes';
import { initialState } from './initialState';

const nextTodoId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1);
    return maxId + 1;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload,
                }
            ]
        case TOGGLED:
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            })
        case COLORESELECTED:
            return state.map(todo => {
                if (todo.id === action.payload.todoId) {
                    return {
                        ...todo,
                        color: action.payload.color
                    }
                }
                return todo;
            })
        case DELETED:
            return state.filter(todo => todo.id !== action.payload)
        case ALLCOMPLETED:
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true
                }
            })
        case CLEARCOMPLETED:
            return state.filter(todo => !todo.completed)
        default:
            return state
    }
}

export default reducer;