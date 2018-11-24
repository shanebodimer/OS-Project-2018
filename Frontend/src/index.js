import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import App from './App.jsx'

// Styles
import 'bootstrap/dist/css/bootstrap.css'
import './Utilities/custom.css'

// FontAwesome
import './Utilities/fa/fontawesome-all.css'
// import './Utilities/fa/fa-light.min.js'
// import './Utilities/fa/fa-regular.min.js'
// import './Utilities/fa/fa-solid.min.js'
// import './Utilities/fa/fa-brands.min.js'

render(<App />, window.document.getElementById('root'))

// https://stackoverflow.com/questions/47953732/what-does-registerserviceworker-do-in-react-js
registerServiceWorker()
