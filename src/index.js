import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';


import cityReducer from "./redux/cityReducer"
import favoritesReducer from './redux/favoritesReducer';
import preferencesReducer from './redux/preferencesReducer';


const store = configureStore({
  reducer: {
    city: cityReducer,
    favorites: favoritesReducer,
    preferences: preferencesReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      // Ignore these action types
      ignoredActions: ['setCity','removeCity'],
      // Ignore these field paths in all actions
      ignoredActionPaths: ['city.value','payload'],
      // Ignore these paths in the state
      ignoredPaths: ['city.value'],
    },
  }),
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
