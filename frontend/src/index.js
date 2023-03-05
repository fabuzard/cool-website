import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Import COOL Youth pages here
import YLogin from './App';
import YSignup from './youth/signup/App'
import YJadwal from './youth/jadwal/App'
import YRenungan from './youth/renungan/App';
import YAgenda from './youth/agenda/App';
import YBiodata from './youth/profile/App';

// Import COOL Umum pages here
// Import ULogin from './App'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
}from "react-router-dom";

const router = createBrowserRouter([
  {path: "/",element: <YLogin/>,},
  {path: "/login",element: <YLogin/>,},
  {path: "/signup",element: <YSignup/>,},
  {path: "/jadwal",element: <YJadwal/>,},
  {path: "/renungan",element: <YRenungan/>,},
  {path: "/agenda",element: <YAgenda/>,},
  {path: "/biodata",element: <YBiodata/>,}
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
