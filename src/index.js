import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'components/redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
    <ToastContainer autoClose={1000} />
  </Provider>
  // </React.StrictMode>
);
