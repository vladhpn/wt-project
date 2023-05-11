import { createBrowserRouter } from 'react-router-dom';

import { Calendar } from '../components/Calendar/Calendar';
import { MainInfo } from '../components/MainInfo/MainInfo';
import { Treatment } from '../components/Treatment/Treatment';
import { Vaccination } from '../components/Vaccination/Vaccination';
import { Login } from '../pages/Login/Login';
import Main from '../pages/Main/Main';
import { Registration } from '../pages/Registration/Registration';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const router = createBrowserRouter([
  {
    element: (
      <PrivateRoute>
        <Main />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/',
        element: <MainInfo />,
      },
      {
        path: '/vaccination',
        element: <Vaccination />,
      },
      {
        path: '/treatment',
        element: <Treatment />,
      },
      {
        path: '/calendar',
        element: <Calendar />,
      },
    ],
  },
  {
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
    path: 'auth/login',
  },
  {
    element: (
      <PublicRoute>
        <Registration />
      </PublicRoute>
    ),
    path: 'auth/registration',
  },
]);
