const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk")
const { fetchTodos } = require("./functions");
// initial State
const initialState = {
    todos: [],
}

//reducer
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'todos/todoAdded':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        title: action.payload,
                    }
                ]
            }
        case 'todos/todoLoaded':
            return {
                ...state,
                todos: [
                    ...state.todos, ...action.payload
                ]
            }
        default:
            break;
    }
}

//store
const store = createStore(todoReducer, applyMiddleware(thunk.default));

//subscribe
store.subscribe(() => {
    console.log(store.getState())
})

// store.dispatch({
//     type: 'todos/todoAdded',
//     payload: "Learn redux from LWS"
// })

//dispatch actions  
store.dispatch(fetchTodos)