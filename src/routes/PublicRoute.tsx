import { FC, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';

import { IRouteProps } from './types';

export const PublicRoute: FC<IRouteProps> = ({ children }) => {
  return (
    <Suspense fallback={<div>Загрузка</div>}>
      {
        <>
          {children}
          <ToastContainer />
        </>
      }
    </Suspense>
  );
};
