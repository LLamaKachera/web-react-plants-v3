import React from 'react'
import ReactDOM from 'react-dom/client'
//! era de esta manera --> import App  from './App.jsx' - pero usar los corchetes
import { App } from './App.jsx'
//import './index.css'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <App/>
)


