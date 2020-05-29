import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {BrowserRouter as Router} from "react-router-dom"
import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {Provider} from "react-redux"
import {generalReducer} from "./store/actions/reducers/generalReducer"

const store = createStore(generalReducer, applyMiddleware(thunk))
const root = document.getElementById('root')

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>, root
)
