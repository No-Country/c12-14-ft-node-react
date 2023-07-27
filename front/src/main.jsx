import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { AppRoutes } from './router/routes'
import { fetchUser } from './redux/slices/authSlice'

// Aquí se realiza el dispatch para cargar los datos del usuario
store.dispatch(fetchUser())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes />
      {/* //modal */}
      <div id='modal'></div>
    </Provider>
  </React.StrictMode>
)
