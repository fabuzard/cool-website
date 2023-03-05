import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Import pages here
import YLogin from './App';
import YAnggota_Cool from './youth/pages/anggota_cool/App';
import YKakak_Cool from './youth/pages/kakak_cool/App';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
}from "react-router-dom";

const DefaultPath = 'cool-admin/'

const router = createBrowserRouter([
  {path: DefaultPath, element: <YLogin/>,},
  {path: (DefaultPath+'anggota-cool'), element: <YAnggota_Cool/>,},
  {path: (DefaultPath+'kakak-cool'), element: <YKakak_Cool/>,},
]);

const root = ReactDOM.createRoot(document.getElementById('content'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
