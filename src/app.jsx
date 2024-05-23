import React, { createContext, useContext, useReducer } from 'react';

// Create the counter context
const CounterContext = createContext();

// Define the reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return state.count > 0 ? { count: state.count - 1 } : state;
    default:
      return state;
  }
}

// Counter component
function Counter() {
  // Use the counter context
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div>
      <h1>Counter</h1>
      <p>The current count is: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

// App component
function App() {
  // Use the useReducer hook to manage the counter state
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <Counter />
    </CounterContext.Provider>
  );
}

export default App;