// Write example code with redux here
const { configureStore, createSlice } = require("@reduxjs/toolkit");

// Ingat: state ini sifatnya immutable
const initialState = {
	counter: 100,
	todos: [],
};

const counterSlice = createSlice({
	name: "counter",
	initialState: initialState,
	reducers: {
		incrementCounter(state) {
			state.counter += 1;
		},
		decrementCounter(state) {
			state.counter -= 1;
		},
	},
});
const { actions: counterActions, reducer: counterReducer } = counterSlice;

const store = configureStore({
	reducer: counterReducer,
});

store.subscribe(() => {
	console.log("State berubah:", store.getState());
});

store.dispatch(counterActions.incrementCounter());
store.dispatch(counterActions.incrementCounter());
store.dispatch(counterActions.decrementCounter());
store.dispatch(counterActions.decrementCounter());
