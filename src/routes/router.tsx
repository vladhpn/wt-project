import { createBrowserRouter } from 'react-router-dom';

import { MainInfo } from '../components/MainInfo/MainInfo';
import { Treatment } from '../components/Treatment/Treatment';
import { Vaccination } from '../components/Vaccination/Vaccination';
import Main from '../pages/Main/Main';

export const router = createBrowserRouter([
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
      {
        path: '/treatment',
        element: <Treatment />,
      },
    ],
  },
]);
