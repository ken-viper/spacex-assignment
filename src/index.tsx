/* eslint-disable @typescript-eslint/no-non-null-assertion */
import 'antd/dist/reset.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app';
import './index.css';
import { store } from './redux/store/store';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById(`root`)!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
