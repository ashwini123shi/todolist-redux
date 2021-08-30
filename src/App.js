import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";
import RootReducer from "./redux/reducers/index";
//components
import TodoApp from "./components/TodoApp";
const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
//const store = createStore(RootReducer);
const store = createStore(RootReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(logger),
  // other store enhancers if any
));

const App = () => (
  <Provider store={store}>
  <div className="App">
    <TodoApp />
  </div>
  </Provider>
);

export default App;
