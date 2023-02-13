// select dom elements
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const newCounterEl = document.getElementById("new-counter");
const newCountersEl = document.getElementById("new-counters");
const resetCounterEl = document.getElementById("reset-counter");

//action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";
const ADD = "add";

//action creators
const incrementAction = (id, value) => {
  console.log(id, value);
  return {
    type: INCREMENT,
    payload: { id, value },
  };
};

const decrementAction = (id, value) => {
  return {
    type: DECREMENT,
    payload: { id, value },
  };
};

const addAction = () => {
  return {
    type: ADD,
  };
};

// initial state
const initialState = [
  {
    id: 1,
    value: 10,
  },
];

// create reducer function
function counterReducer(state = initialState, action) {
  let selected;
  if (action.type === INCREMENT) {
    // console.log("clicking increment");
    selected = state.find((s) => s.id === action.payload.id);
    currentState = [
      ...state.filter((s) => s.id !== action.payload.id),
      { ...selected, value: selected.value + action.payload.value },
    ];
    return currentState;
  } else if (action.type === DECREMENT) {
    // console.log("clicking decrease");
    selected = state.find((s) => s.id === action.payload.id);
    currentState = [
      ...state.filter((s) => s.id !== action.payload.id),
      { ...selected, value: selected.value - action.payload.value },
    ];
    return currentState;
  } else if (action.type === ADD) {
    currentState = [...state, { id: state.length + 1, value: 10 }];
    return currentState;
  } else {
    return state;
  }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  state.map((s) => {
    // button click listeners
    incrementEl.addEventListener("click", () => {
      console.log(state.id);
      store.dispatch(incrementAction(state.id, 5));
    });

    decrementEl.addEventListener("click", () => {
      console.log(state.id);
      store.dispatch(decrementAction(state.id, 5));
    });
    document.getElementById(s.id).innerText = s.value.toString();
  });
};

// update UI initially
render();

store.subscribe(render);

//new counter add listener
newCounterEl.addEventListener("click", () => {
  const div = document.createElement("div");
  div.innerHTML = `
            <div class="mx-auto max-w-md mt-10 space-y-5">
               <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
                    <div  id='${
                      store.getState().length + 1
                    }'  class="text-2xl font-semibold"></div>
                    <div class="flex space-x-3">
                        <button id="increment" class="bg-indigo-400 text-white px-3 py-2 rounded shadow" id="increment" > Increment </button>
                        <button id="decrement" class="bg-red-400 text-white px-3 py-2 rounded shadow" id="decrement" > Decrement </button>
                    </div>
                </div>
              </div>
            `;
  newCountersEl.appendChild(div);
  store.dispatch(addAction());
});

// reset the counter
resetCounterEl.addEventListener("click", () => {
  alert("reset counter");
  store.dispatch(resetAction());
});

// store.getState().map((state) => {
//   // button click listeners
//   incrementEl.addEventListener("click", () => {
//     console.log(state.id);
//     store.dispatch(incrementAction(state.id, 5));
//   });

//   decrementEl.addEventListener("click", () => {
//     console.log(state.id);
//     store.dispatch(decrementAction(state.id, 5));
//   });
// });
