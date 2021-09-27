// import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {store, StoreContext} from './stores/Store'
import './fontawesome'
import './scss/style.scss'

ReactDOM.render(
  <StoreContext.Provider value={store}>
     <App />
  </StoreContext.Provider>,
  document.getElementById('root')
)
