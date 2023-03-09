## Redux Intro
1. What is Redux?
2. Why is Redux?
3. How we use it?
4. Where we use it?

// Store is read only
//Redux state management tool
//1. Read data, 2. Modify data, 3. Store the data
// Action -> Dispatcher -> Store -> View

//There is a single store
//Counter
//Timer
//Cart
//Token

store = {
    Counter:0,
    Timer:10,
    Cart:[],
    token:""
}

1. useReducer hook
2. Dispatch
3. Action --> type & Payload
4. Reducer

## Redux
1. npm i redux
2. Make the basic structure

- Redux folder
    - store.js
    - reducer.js
    - action.js
    - actionTypes.js