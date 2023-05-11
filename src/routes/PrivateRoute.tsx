import { FC, Suspense, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { IRouteProps } from './types';

export const PrivateRoute: FC<IRouteProps> = ({ children }) => {
  const navigate = useNavigate();

  const isActiveSession = localStorage.getItem('token');

  useEffect(() => {
    if (!isActiveSession) {
      navigate('/auth/login', { replace: true });
    }
  }, [navigate, isActiveSession]);

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
