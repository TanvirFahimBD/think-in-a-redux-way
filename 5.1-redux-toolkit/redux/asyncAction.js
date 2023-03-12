const fetch = require("node-fetch");
const { createStore, applyMiddleware } = require("redux");
const thunkMiddleware = require("redux-thunk");

//initial state
const initialState = {
    loading: false,
    posts: [],
    error: false,
};

//actions
const fetchPostsRequested = () => {
    return {
        type: "post/requested",
    }
}

const fetchPostsSucceeded = (posts) => {
    return {
        type: "post/succeeded",
        payload: posts,
    }
}

const fetchPostsFailed = (error) => {
    return {
        type: "post/failed",
        payload: error
    }
}

//reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'post/requested':
            return {
                ...state,
                loading: true,
                error: ''
            }
        case 'post/succeeded':
            return {
                ...state,
                loading: false,
                posts: action.payload,
                error: ''
            }
        case 'post/failed':
            return {
                ...state,
                loading: false,
                error: action.payload.message,
                posts: [],
            }
        default: break;
    }

}

//thunk function
const fetchPosts = () => {
    return async (dispatch) => {
        dispatch(fetchPostsRequested());
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
            const posts = await response.json()
            dispatch(fetchPostsSucceeded(posts))
        } catch (err) {
            dispatch(fetchPostsFailed(err))
        }
    };
}

//create store
const store = createStore(reducer, applyMiddleware(thunkMiddleware.default));

//subscribe to state changes
store.subscribe(() => {
    console.log(store.getState());
})

//dispatch action
store.dispatch(fetchPosts());