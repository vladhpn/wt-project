/* eslint-disable react/no-unescaped-entities */
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';

import { Header } from '../../components/Header/Header';
import { registration } from '../../core/api';
import { isLoginRecoil } from '../../core/state/globalState';

import type { IRegistrationForm } from './types';

export const Registration = () => {
  const setIslogin = useSetRecoilState(isLoginRecoil);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<IRegistrationForm>();

  const onSubmit: SubmitHandler<IRegistrationForm> = async (values) => {
    try {
      const token = await registration(values);

      localStorage.setItem('token', JSON.stringify(token));

      navigate('/', { replace: true });
      setIslogin(true);
    } catch (err) {
      console.log(err);
      //нотифікашки винксти в окрему функцію та додати
      toast.error(String(err), {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-5/6 justify-center items-center">
        <form className="w-80" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900">
              Введіть почту
            </label>
            <input
              {...register('email', { required: true, maxLength: 20 })}
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@mail.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900">
              Введіть ім'я
            </label>
            <input
              {...register('fullName', { required: true, maxLength: 20 })}
              type="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Alex Tors"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900">
              Введіть пароль
            </label>
            <input
              {...register('password', { required: true, maxLength: 20 })}
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
            Продовжити
          </button>
        </form>
      </div>
    </div>
  );
};
