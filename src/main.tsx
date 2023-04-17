import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainInfo } from './components/MainInfo/MainInfo';
import { Vaccination } from './components/Vaccination/Vaccination';
import Main from './pages/Main/Main';

import './index.scss';

const router = createBrowserRouter([
  {
    element: <Main />,
    children: [
      {
        path: '/',
        element: <MainInfo />,
      },
      {
        path: '/vaccination',
        element: <Vaccination />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
